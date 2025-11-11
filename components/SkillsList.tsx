'use client'

import { useState } from 'react'
import type { Skill } from '@/types'

interface SkillsListProps {
  initialSkills: Skill[];
}

export default function SkillsList({ initialSkills }: SkillsListProps) {
  const [skills] = useState<Skill[]>(initialSkills)
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  // Get unique categories
  const categories = Array.from(new Set(skills.map(s => s.metadata.category?.value || 'Other')))

  const filteredSkills = categoryFilter === 'all'
    ? skills
    : skills.filter(s => s.metadata.category?.value === categoryFilter)

  // Group skills by category
  const skillsByCategory = filteredSkills.reduce((acc, skill) => {
    const category = skill.metadata.category?.value || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setCategoryFilter('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            categoryFilter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All ({skills.length})
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setCategoryFilter(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              categoryFilter === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category} ({skills.filter(s => s.metadata.category?.value === category).length})
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
          if (!categorySkills || categorySkills.length === 0) {
            return null
          }

          return (
            <div key={category} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                  >
                    {skill.metadata.icon && (
                      <img
                        src={`${skill.metadata.icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                        alt={skill.metadata.skill_name}
                        className="w-10 h-10 rounded object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{skill.metadata.skill_name}</p>
                      {skill.metadata.proficiency && (
                        <p className="text-sm text-gray-500">{skill.metadata.proficiency.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}