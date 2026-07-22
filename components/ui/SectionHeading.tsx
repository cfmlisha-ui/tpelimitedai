type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`mb-9 ${align === 'center' ? 'text-center' : ''}`}>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red-500">{eyebrow}</p>
      <h2
        className={`mb-2 text-2xl font-bold leading-tight sm:text-3xl ${
          light ? 'text-white' : 'text-brand-ink-800'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-xl text-sm leading-relaxed ${light ? 'text-gray-400' : 'text-gray-600'} ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
      <div className={`mt-5 h-1 w-10 rounded bg-brand-red-500 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  )
}
