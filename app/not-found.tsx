import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red-500">404</p>
      <h1 className="mb-3 text-2xl font-bold text-brand-ink-800 sm:text-3xl">Page not found</h1>
      <p className="mb-7 max-w-sm text-sm text-gray-600">
        The page you are looking for does not exist or may have moved. Try heading back to the homepage or
        contacting us directly.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href="/">Back to homepage</Button>
        <Button href="/contact" variant="outline">Contact us</Button>
      </div>
    </section>
  )
}
