import { getProjects } from '@/lib/cosmic'
import ProjectsList from '@/components/ProjectsList'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="text-gray-600 mt-2">Manage your portfolio projects</p>
      </div>

      <ProjectsList initialProjects={projects} />
    </div>
  )
}