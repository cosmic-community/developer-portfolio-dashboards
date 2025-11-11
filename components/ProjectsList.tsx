'use client'

import { useState } from 'react'
import type { Project } from '@/types'

interface ProjectsListProps {
  initialProjects: Project[];
}

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [projects] = useState<Project[]>(initialProjects)
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredProjects = filter === 'featured'
    ? projects.filter(p => p.metadata.featured)
    : projects

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
          All Projects ({projects.length})
        </button>
        <button
          onClick={() => setFilter('featured')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'featured'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Featured ({projects.filter(p => p.metadata.featured).length})
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Technologies
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Links
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProjects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {project.metadata.featured_image && (
                      <img
                        src={`${project.metadata.featured_image.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                        alt={project.title}
                        className="w-10 h-10 rounded object-cover mr-3"
                      />
                    )}
                    <div>
                      <p className="font-medium text-gray-900">{project.metadata.project_name}</p>
                      <p className="text-sm text-gray-500">{project.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {project.metadata.technologies?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.metadata.technologies && project.metadata.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                        +{project.metadata.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  {project.metadata.featured && (
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                      Featured
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {project.metadata.live_url && (
                      <a
                        href={project.metadata.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Live
                      </a>
                    )}
                    {project.metadata.repo_url && (
                      <a
                        href={project.metadata.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 text-sm"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}