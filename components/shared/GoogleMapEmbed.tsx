import { contact } from '@/lib/constants'

type GoogleMapEmbedProps = {
  className?: string
}

// Uses the no-API-key Google Maps embed format (maps.google.com/maps?q=...&output=embed).
// This works without NEXT_PUBLIC_GOOGLE_MAPS_API_KEY and is sufficient for V1.
// TODO: if a pinned/branded map experience is needed later, swap to the
// JavaScript Maps API using NEXT_PUBLIC_GOOGLE_MAPS_API_KEY from .env.local.
export default function GoogleMapEmbed({ className }: GoogleMapEmbedProps) {
  const query = encodeURIComponent(`${contact.address.line1}, ${contact.address.line2}, Nairobi, Kenya`)

  return (
    <div className={`overflow-hidden rounded-lg border border-gray-200 ${className ?? ''}`}>
      <iframe
        title="The Pest Exterminator Company Limited location on Google Maps"
        src={`https://maps.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 240 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
