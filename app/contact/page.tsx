'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import LeadForm from '@/components/forms/LeadForm'
import GoogleMapEmbed from '@/components/shared/GoogleMapEmbed'
import { contact } from '@/lib/constants'

type Intent = 'quote' | 'inspection' | 'contact'

const tabs: { id: Intent; label: string }[] = [
  { id: 'quote', label: 'Request a quote' },
  { id: 'inspection', label: 'Book inspection' },
  { id: 'contact', label: 'General enquiry' },
]

function ContactPageContent() {
  const searchParams = useSearchParams()
  const initialIntent = (searchParams.get('intent') as Intent) ?? 'contact'
  const [activeTab, setActiveTab] = useState<Intent>(
    tabs.some((t) => t.id === initialIntent) ? initialIntent : 'contact'
  )

  return (
    <>
      <section className="bg-brand-ink-800 px-6 py-16 lg:px-10">
        <div className="container-max max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">Contact us</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Let&rsquo;s solve your pest problem</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-wrap gap-2 border-b border-gray-200 pb-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                    activeTab === tab.id
                      ? 'bg-brand-red-500 text-white'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <LeadForm intent={activeTab} />
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-500">Contact details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-brand-red-500" />
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <p className="text-sm font-semibold text-brand-ink-800">
                      {contact.phonePrimary} &middot; {contact.phoneSecondary}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle size={16} className="mt-0.5 shrink-0 text-brand-red-500" />
                  <div>
                    <p className="text-xs text-gray-400">WhatsApp</p>
                    <a href={contact.whatsappHref} className="text-sm font-semibold text-brand-ink-800 hover:text-brand-red-500">
                      +{contact.whatsappNumber}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 shrink-0 text-brand-red-500" />
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm font-semibold text-brand-ink-800">{contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-brand-red-500" />
                  <div>
                    <p className="text-xs text-gray-400">Address</p>
                    <p className="text-sm font-semibold text-brand-ink-800">
                      {contact.address.line1}, {contact.address.line2}
                    </p>
                    <p className="text-xs text-gray-500">{contact.address.poBox}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 shrink-0 text-brand-red-500" />
                  <div>
                    <p className="text-xs text-gray-400">Office hours</p>
                    <p className="text-sm font-semibold text-brand-ink-800">Mon &ndash; Fri: {contact.hours.weekdays}</p>
                    <p className="text-sm font-semibold text-brand-ink-800">Sat: {contact.hours.saturday}</p>
                    <p className="text-xs text-gray-500">{contact.hours.emergencyNote}</p>
                  </div>
                </div>
              </div>
            </div>

            <GoogleMapEmbed className="h-52" />
          </aside>
        </div>
      </section>
    </>
  )
}

// Wrapped in Suspense because useSearchParams requires it during static export.

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageContent />
    </Suspense>
  )
}
