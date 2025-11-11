'use client'

import { useState } from 'react'
import type { WorkExperience } from '@/types'

interface ExperienceListProps {
  initialExperience: WorkExperience[];
}

export default function ExperienceList({ initialExperience }: ExperienceListProps) {
  const [experience] = useState<WorkExperience[]>(initialExperience)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }

  return (
    <div className="space-y-6">
      {experience.map((exp) => (
        <div key={exp.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start gap-4">
            {exp.metadata.company_logo && (
              <img
                src={`${exp.metadata.company_logo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                alt={exp.metadata.company_name}
                className="w-16 h-16 rounded object-cover"
              />
            )}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.metadata.job_title}
                  </h3>
                  <p className="text-gray-600">{exp.metadata.company_name}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatDate(exp.metadata.start_date)} -{' '}
                    {exp.metadata.current 
                      ? 'Present' 
                      : exp.metadata.end_date 
                        ? formatDate(exp.metadata.end_date)
                        : 'Present'
                    }
                  </p>
                </div>
                {exp.metadata.current && (
                  <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Current
                  </span>
                )}
              </div>

              {exp.metadata.description && (
                <p className="text-gray-700 mt-4">{exp.metadata.description}</p>
              )}

              {exp.metadata.achievements && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                  <div className="text-gray-700 whitespace-pre-line">
                    {exp.metadata.achievements}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}