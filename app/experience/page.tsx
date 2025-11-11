import { getWorkExperience } from '@/lib/cosmic'
import ExperienceList from '@/components/ExperienceList'

export default async function ExperiencePage() {
  const experience = await getWorkExperience()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Work Experience</h1>
        <p className="text-gray-600 mt-2">Manage your professional experience</p>
      </div>

      <ExperienceList initialExperience={experience} />
    </div>
  )
}