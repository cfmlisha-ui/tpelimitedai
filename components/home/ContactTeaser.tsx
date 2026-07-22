import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import GoogleMapEmbed from '@/components/shared/GoogleMapEmbed'
import { contact } from '@/lib/constants'

const contactItems = [
  { icon: Phone, label: 'Phone', value: `${contact.phonePrimary} \u00b7 ${contact.phoneSecondary}` },
  { icon: MessageCircle, label: 'WhatsApp', value: `+${contact.whatsappNumber}` },
  { icon: Mail, label: 'Email', value: contact.email },
  {
    icon: MapPin,
    label: 'Address',
    value: `${contact.address.line1}, ${contact.address.line2}, ${contact.address.city}`,
  },
]

export default function ContactTeaser() {
  return (
    <section className="section-padding bg-[#f9f7f5]">
      <div className="container-max">
        <SectionHeading eyebrow="Get in touch" title="Visit, call, or WhatsApp us" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <GoogleMapEmbed className="h-56 lg:h-auto" />

          <div className="flex flex-col gap-4">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-red-50">
                  <item.icon size={16} className="text-brand-red-500" />
                </span>
                <div>
                  <p className="text-[11px] text-gray-400">{item.label}</p>
                  <p className="text-sm font-bold text-brand-ink-800">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="mt-2 flex flex-wrap gap-3">
              <Button href="/contact" size="sm">
                Send enquiry
              </Button>
              <Button href="/contact?intent=quote" variant="outline" size="sm">
                Request quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
