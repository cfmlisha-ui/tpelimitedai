'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { contact } from '@/lib/constants'

// Fixed bottom action bar, mobile only (md:hidden).
// Desktop already surfaces WhatsApp/Call via the hero and contact page,
// so a fixed bar there would be redundant chrome.
export default function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-brand-ink-600 bg-brand-ink-800 md:hidden">
      <a
        href={`tel:${contact.phonePrimaryHref}`}
        className="flex flex-1 items-center justify-center gap-2 bg-brand-red-500 py-3.5 text-xs font-bold uppercase tracking-wide text-white"
      >
        <Phone size={16} />
        Call now
      </a>
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-xs font-bold uppercase tracking-wide text-white"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>
    </div>
  )
}
