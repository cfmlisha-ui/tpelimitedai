import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import { siteConfig, mission, vision, coreValues, team, legalCompliance, accreditations } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name}, established in 2004. Our mission, vision, values, leadership team, and regulatory compliance.`,
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-ink-800 px-6 py-16 lg:px-10">
        <div className="container-max max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">About us</p>
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Two decades of evidence-based pest control</h1>
          <p className="text-sm leading-relaxed text-gray-400">
            The Pest Exterminator Limited was established in {siteConfig.founded} with the sole objective of
            solving problems associated with household pests. The company provides evidence-based, high-quality
            pest control services beyond expectation, composed of dedicated research scientists in insect and
            environmental health sciences, ensuring that while pests are controlled, both human health and the
            environment are protected.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="mb-2 text-lg font-bold text-brand-ink-800">Our mission</h2>
            <p className="text-sm leading-relaxed text-gray-600">{mission}</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="mb-2 text-lg font-bold text-brand-ink-800">Our vision</h2>
            <p className="text-sm leading-relaxed text-gray-600">{vision}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f9f7f5]">
        <div className="container-max">
          <SectionHeading eyebrow="What guides us" title="Our core values" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div key={value.name} className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="mb-1 text-sm font-bold text-brand-red-500">{value.name}</h3>
                <p className="text-xs leading-relaxed text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading eyebrow="Leadership" title="Directors and key personnel" />
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Qualification</th>
                  <th className="px-4 py-3">Experience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {team.map((member) => (
                  <tr key={member.name}>
                    <td className="px-4 py-3 font-semibold text-brand-ink-800">{member.name}</td>
                    <td className="px-4 py-3 text-gray-600">{member.role}</td>
                    <td className="px-4 py-3 text-gray-600">{member.qualification}</td>
                    <td className="px-4 py-3 text-gray-600">{member.experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-ink-800">
        <div className="container-max">
          <SectionHeading
            eyebrow="Health and safety"
            title="Our commitment to compliance"
            light
            description="The bulk of our work is in the food industry, so we apply the seven principles of HACCP throughout every engagement, alongside strict adherence to Kenyan and international law."
          />
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {legalCompliance.map((law) => (
              <li
                key={law}
                className="rounded-md border border-brand-ink-600 bg-brand-ink-700 px-4 py-3 text-xs text-gray-300"
              >
                {law}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">
              Our accreditations
            </p>
            <div className="flex flex-wrap gap-2">
              {accreditations.map((item) => (
                <span
                  key={item.short}
                  title={item.description}
                  className="rounded-full border border-brand-ink-600 px-3 py-1 text-[10px] uppercase tracking-wide text-brand-mocha-400"
                >
                  {item.full}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f9f7f5]">
        <div className="container-max max-w-2xl">
          <SectionHeading eyebrow="Giving back" title="Corporate social responsibility" />
          <p className="text-sm leading-relaxed text-gray-600">
            We are duly registered by NEMA and actively committed to supporting the conservation and protection
            of the environment. We donate funds to Rhino Ark, a charity based in Kenya and the UK with a mission
            to raise funds and material support to build an electrified fence encircling the Aberdares National
            Park and surrounding forestry areas &mdash; preventing illegal exploitation of forest habitat and
            promoting sustainable use of environmental products for current and future generations.
          </p>
        </div>
      </section>
    </>
  )
}
