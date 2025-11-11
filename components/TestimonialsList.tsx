'use client'

import { useState } from 'react'
import type { Testimonial } from '@/types'

interface TestimonialsListProps {
  initialTestimonials: Testimonial[];
}

export default function TestimonialsList({ initialTestimonials }: TestimonialsListProps) {
  const [testimonials] = useState<Testimonial[]>(initialTestimonials)
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredTestimonials = filter === 'featured'
    ? testimonials.filter(t => t.metadata.featured)
    : testimonials

  const renderStars = (rating: string) => {
    const numStars = parseInt(rating)
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < numStars
      return (
        <span
          key={index}
          className={filled ? 'text-yellow-400' : 'text-gray-300'}
        >
          ★
        </span>
      )
    })
  }

  return (
    <div>
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All ({testimonials.length})
        </button>
        <button
          onClick={() => setFilter('featured')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'featured'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Featured ({testimonials.filter(t => t.metadata.featured).length})
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start gap-4 mb-4">
              {testimonial.metadata.client_photo && (
                <img
                  src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                  alt={testimonial.metadata.client_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {testimonial.metadata.client_name}
                </h3>
                <p className="text-sm text-gray-600">
                  {testimonial.metadata.client_role}
                  {testimonial.metadata.company && ` at ${testimonial.metadata.company}`}
                </p>
                {testimonial.metadata.rating && (
                  <div className="flex text-sm mt-1">
                    {renderStars(testimonial.metadata.rating.key)}
                  </div>
                )}
              </div>
              {testimonial.metadata.featured && (
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                  Featured
                </span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">
              {testimonial.metadata.testimonial_text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}