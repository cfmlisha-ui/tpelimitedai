import { stats } from '@/lib/constants'

export default function StatsBar() {
  return (
    <section className="grid grid-cols-2 bg-brand-red-500 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`px-4 py-6 text-center ${
            index !== stats.length - 1 ? 'border-r border-white/15' : ''
          }`}
        >
          <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
          <p className="mt-1 text-[10px] uppercase tracking-wide text-white/75 sm:text-xs">{stat.label}</p>
        </div>
      ))}
    </section>
  )
}
