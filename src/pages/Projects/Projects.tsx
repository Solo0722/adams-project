import { useState } from 'react'
import MainContent from '@/components/main-content'
import ProjectCard from '@/components/project-card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { CreateProjectDialog } from '@/components/project/create-project-dialog'

const projects = [
    {
        id: 'DboFihPGrksaOrtTYw3H',
        name: 'Lagos-Ibadan Expressway Expansion',
        assetName: 'Main Highway Section A',
        location: 'Lagos to Ibadan, Nigeria',
        startDate: '2024-01-15',
        endDate: '2025-12-30',
        status: 'in-progress' as const,
        teamSize: 45,
        budget: 250000000,
        description: 'Expansion of the Lagos-Ibadan expressway to 10 lanes with modern tolling infrastructure and smart traffic management systems.',
        lastModified: '2024-03-29T01:36:00',
        author: 'Unknown User',
        sensors: {
            accelerometer: true,
            gyroscope: true,
            gps: true
        },
        analysisOptions: ['pavement', 'traffic', 'structural'],
        videos: [],
        sensorData: {
            accelerometer: [],
            gyroscope: [],
            gps: []
        }
    },
    {
        id: '2',
        name: 'Abuja Metro Rail Phase 2',
        assetName: 'Central Rail Line',
        location: 'Abuja, Nigeria',
        startDate: '2024-03-01',
        endDate: '2026-06-30',
        status: 'planning' as const,
        teamSize: 32,
        budget: 180000000,
        description: 'Second phase of the Abuja metro rail system, extending the network to key suburbs and business districts.',
        lastModified: '2024-03-28T14:20:00',
        author: 'Unknown User',
        sensors: {
            accelerometer: true,
            gyroscope: true,
            gps: true
        },
        analysisOptions: ['structural', 'traffic'],
        videos: [],
        sensorData: {
            accelerometer: [],
            gyroscope: [],
            gps: []
        }
    },
    {
        id: '3',
        name: 'Port Harcourt Deep Sea Port',
        assetName: 'Main Port Complex',
        location: 'Port Harcourt, Nigeria',
        startDate: '2023-09-01',
        endDate: '2025-08-31',
        status: 'in-progress' as const,
        teamSize: 58,
        budget: 350000000,
        description: 'Construction of a modern deep sea port with automated container handling systems and expanded berthing facilities.',
        lastModified: '2024-03-27T09:15:00',
        author: 'Unknown User',
        sensors: {
            accelerometer: true,
            gyroscope: true,
            gps: true
        },
        analysisOptions: ['structural', 'pavement'],
        videos: [],
        sensorData: {
            accelerometer: [],
            gyroscope: [],
            gps: []
        }
    },
    {
        id: '4',
        name: 'Kano Solar Power Plant',
        location: 'Kano, Nigeria',
        startDate: '2023-06-15',
        endDate: '2024-12-15',
        status: 'completed' as const,
        teamSize: 28,
        budget: 120000000,
        description: '100MW solar power plant with battery storage system to provide clean energy to the Kano metropolitan area.'
    },
    {
        id: '5',
        name: 'Lekki Free Trade Zone Infrastructure',
        location: 'Lekki, Lagos',
        startDate: '2024-02-01',
        endDate: '2026-01-31',
        status: 'in-progress' as const,
        teamSize: 65,
        budget: 420000000,
        description: 'Development of critical infrastructure for the Lekki Free Trade Zone including roads, utilities, and logistics facilities.'
    },
    {
        id: '6',
        name: 'Benin City Water Treatment Plant',
        location: 'Benin City, Edo',
        startDate: '2024-04-15',
        endDate: '2025-10-15',
        status: 'planning' as const,
        teamSize: 24,
        budget: 95000000,
        description: 'Modern water treatment facility with capacity to serve 2 million residents and industrial users.'
    }
]

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false)

    const handleCreateProject = (data: {
        name: string
        location: string
        assetName: string
        description: string
        sensors: {
            accelerometer: boolean
            gyroscope: boolean
            gps: boolean
        }
        files: {
            videos: File[]
            sensorData: File[]
        }
    }) => {
        // TODO: Implement project creation logic
        console.log('Creating project:', data)
    }

    const renderContent = () => {
        return (
            <div className='w-full h-full flex flex-col gap-4'>
                <header className='w-full h-[48px] flex items-center justify-between'>
                    <p className='font-bold text-md'>{projects.length} project(s)</p>
                    <div className='flex gap-2'>
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${activeFilter === 'all'
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setActiveFilter('active')}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${activeFilter === 'active'
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Active
                        </button>
                        <button
                            onClick={() => setActiveFilter('completed')}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${activeFilter === 'completed'
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Completed
                        </button>
                        <button
                            onClick={() => setActiveFilter('planning')}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${activeFilter === 'planning'
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Planning
                        </button>
                    </div>
                </header>
                <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <MainContent
            title='Infrastructure Projects'
            description='Manage and track your infrastructure projects'
            toolbar={
                <Button
                    className='h-8 text-[12px] font-bold'
                    onClick={() => setIsCreateProjectOpen(true)}
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Create new project
                </Button>
            }
        >
            {renderContent()}
            <CreateProjectDialog
                open={isCreateProjectOpen}
                onOpenChange={setIsCreateProjectOpen}
                onSubmit={handleCreateProject}
            />
        </MainContent>
    )
}

export default Projects