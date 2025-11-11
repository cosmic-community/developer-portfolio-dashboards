import { getProjects, getSkills, getWorkExperience, getTestimonials } from '@/lib/cosmic'
import DashboardStats from '@/components/DashboardStats'

export default async function HomePage() {
  const [projects, skills, workExperience, testimonials] = await Promise.all([
    getProjects(),
    getSkills(),
    getWorkExperience(),
    getTestimonials(),
  ])

  const stats = {
    projects: projects.length,
    skills: skills.length,
    workExperience: workExperience.length,
    testimonials: testimonials.length,
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome to your portfolio management dashboard</p>
      </div>

      <DashboardStats stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
          <div className="space-y-3">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="border-b pb-3 last:border-b-0">
                <p className="font-medium text-gray-900">{project.title}</p>
                <p className="text-sm text-gray-500">
                  {project.metadata.technologies?.slice(0, 3).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Testimonials</h2>
          <div className="space-y-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="border-b pb-3 last:border-b-0">
                <p className="font-medium text-gray-900">{testimonial.metadata.client_name}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.metadata.client_role} - {testimonial.metadata.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}