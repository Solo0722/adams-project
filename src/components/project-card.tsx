import { Building2, MapPin, Calendar, Users, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type SensorData = {
    time: string
    x?: number
    y?: number
    z?: number
    latitude?: number
    longitude?: number
}

type Video = {
    id: string
    title: string
    description: string
    url: string
    createdAt: string
}

type Project = {
    id: string
    name: string
    assetName?: string
    location: string
    startDate: string
    endDate: string
    status?: 'planning' | 'in-progress' | 'completed' | 'on-hold'
    teamSize?: number
    budget?: number
    description?: string
    lastModified?: string
    author?: string
    sensors?: {
        accelerometer: boolean
        gyroscope: boolean
        gps: boolean
    }
    analysisOptions?: string[]
    videos?: Video[]
    sensorData?: {
        accelerometer?: SensorData[]
        gyroscope?: SensorData[]
        gps?: SensorData[]
    }
}

type Props = {
    project: Project
}

const ProjectCard = ({ project }: Props) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'planning':
                return 'bg-blue-100 text-blue-800'
            case 'in-progress':
                return 'bg-yellow-100 text-yellow-800'
            case 'completed':
                return 'bg-green-100 text-green-800'
            case 'on-hold':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.assetName}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status ?? 'in-progress')}`}>
                    {(project.status ?? 'in-progress').replace('-', ' ')}
                </span>
            </div>

            <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{project.location}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.startDate} - {project.endDate}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{project.teamSize} team members</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                    <Building2 className="h-4 w-4 mr-2" />
                    <span>Budget: ${project.budget?.toLocaleString()}</span>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex justify-end items-center pt-2 border-t">
                    <Link
                        to={`/app/projects/${project.id}`}
                        className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-md hover:bg-primary/20 transition-colors"
                    >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard 