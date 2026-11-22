// Systeme.io public API: add a contact (or find the existing one) and tag it.
// Adding the tag is what triggers the Systeme.io automation rule (e.g. "send the fiche by email").
const API = "https://api.systeme.io/api"

export const EMAIL_RE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i

export function extractEmail(text: string | undefined | null): string | null {
  if (!text) return null
  const m = text.match(EMAIL_RE)
  return m ? m[0].toLowerCase().replace(/\.+$/, "") : null
}

async function call(path: string, init: RequestInit = {}) {
  const key = process.env.SYSTEMEIO_API_KEY
  if (!key) throw new Error("SYSTEMEIO_API_KEY missing")
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { "X-API-Key": key, Accept: "application/json", "Content-Type": "application/json", ...(init.headers || {}) },
  })
  const text = await res.text()
  let json: any = null
  try {
    json = text ? JSON.parse(text) : null
  } catch {}
  return { status: res.status, ok: res.ok, json }
}

/** Creates the contact if needed, then adds the tag. Returns ok:false with a reason on failure. */
export async function tagSystemeContact(email: string, tagId: number): Promise<{ ok: boolean; reason?: string }> {
  try {
    let contactId: number | null = null

    const created = await call("/contacts", { method: "POST", body: JSON.stringify({ email, locale: "fr" }) })
    if (created.ok && created.json?.id) {
      contactId = created.json.id
    } else {
      // Already exists (422) → look it up
      const found = await call(`/contacts?email=${encodeURIComponent(email)}`)
      contactId = found.json?.items?.[0]?.id ?? null
      if (!contactId) return { ok: false, reason: `create ${created.status}: ${JSON.stringify(created.json)?.slice(0, 200)}` }
    }

    const tagged = await call(`/contacts/${contactId}/tags`, { method: "POST", body: JSON.stringify({ tagId }) })
    // 204 = tagged; 422 = already has the tag → remove + re-add so the rule fires again
    if (tagged.status === 422) {
      await call(`/contacts/${contactId}/tags/${tagId}`, { method: "DELETE" })
      const retry = await call(`/contacts/${contactId}/tags`, { method: "POST", body: JSON.stringify({ tagId }) })
      if (!retry.ok) return { ok: false, reason: `retag ${retry.status}` }
    } else if (!tagged.ok) {
      return { ok: false, reason: `tag ${tagged.status}: ${JSON.stringify(tagged.json)?.slice(0, 200)}` }
    }
    return { ok: true }
  } catch (e: any) {
    return { ok: false, reason: e?.message || String(e) }
  }
}
