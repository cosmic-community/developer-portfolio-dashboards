import { getSkills } from '@/lib/cosmic'
import SkillsList from '@/components/SkillsList'

export default async function SkillsPage() {
  const skills = await getSkills()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Skills</h1>
        <p className="text-gray-600 mt-2">Manage your technical skills</p>
      </div>

      <SkillsList initialSkills={skills} />
    </div>
  )
}