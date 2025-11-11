import { getTestimonials } from '@/lib/cosmic'
import TestimonialsList from '@/components/TestimonialsList'

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
        <p className="text-gray-600 mt-2">Manage client testimonials</p>
      </div>

      <TestimonialsList initialTestimonials={testimonials} />
    </div>
  )
}