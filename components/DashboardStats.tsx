interface DashboardStatsProps {
  stats: {
    projects: number;
    skills: number;
    workExperience: number;
    testimonials: number;
  };
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  const statCards = [
    { label: 'Projects', value: stats.projects, icon: '💼', color: 'bg-blue-50 text-blue-600' },
    { label: 'Skills', value: stats.skills, icon: '🎯', color: 'bg-green-50 text-green-600' },
    { label: 'Experience', value: stats.workExperience, icon: '👔', color: 'bg-purple-50 text-purple-600' },
    { label: 'Testimonials', value: stats.testimonials, icon: '💬', color: 'bg-orange-50 text-orange-600' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-2xl`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}