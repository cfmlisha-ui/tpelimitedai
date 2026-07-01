import { Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#f9f7f5]">
      <div className="container-max">
        <SectionHeading eyebrow="Testimonials" title="What our clients say" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-lg border border-brand-ink-600 bg-brand-ink-800 p-6">
              <div className="mb-3 flex gap-0.5 text-brand-red-500" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mb-4 text-sm italic leading-relaxed text-gray-300">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="text-xs font-bold text-white">{testimonial.author}</p>
              <p className="text-xs text-brand-mocha-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
