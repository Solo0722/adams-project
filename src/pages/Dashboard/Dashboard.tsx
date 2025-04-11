import MainContent from '@/components/main-content'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Building2, Package, AlertTriangle, Plus, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { projects } from '@/data/projects'
import { CreateProjectDialog } from '@/components/project/create-project-dialog'

const Dashboard = () => {
    const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false)

    const metrics = [
        {
            title: "Total Projects",
            value: projects.length.toString(),
            icon: <Package className="h-4 w-4" />,
            description: "Active infrastructure projects"
        },
        {
            title: "In Progress",
            value: projects.filter(p => p.status === 'in-progress').length.toString(),
            icon: <Activity className="h-4 w-4" />,
            description: "Projects currently being executed"
        },
        {
            title: "Locations",
            value: new Set(projects.map(p => p.location)).size.toString(),
            icon: <MapPin className="h-4 w-4" />,
            description: "Project locations"
        },
        {
            title: "Total Budget",
            value: `$${projects.reduce((acc, p) => acc + p.budget, 0).toLocaleString()}`,
            icon: <Building2 className="h-4 w-4" />,
            description: "Combined project budgets"
        }
    ]

    const recentProjects = projects
        .sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
        .slice(0, 3)

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

    return (
        <MainContent
            title='Welcome, Solomon'
            description='Overview of your infrastructure projects'
            toolbar={
                <Button
                    className="h-8 text-[12px] font-bold bg-sky-500 hover:bg-sky-700 text-white"
                    onClick={() => setIsCreateProjectOpen(true)}
                >
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                </Button>
            }
        >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {metric.title}
                            </CardTitle>
                            {metric.icon}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{metric.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {metric.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentProjects.map((project) => (
                                <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-medium">{project.name}</h3>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                                                project.status === 'planning' ? 'bg-blue-100 text-blue-800' :
                                                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                        'bg-gray-100 text-gray-800'
                                                }`}>
                                                {project.status.replace('-', ' ')}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500">{project.assetName}</p>
                                        <div className="flex items-center gap-4 mt-2">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {project.location}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Clock className="w-4 h-4 mr-1" />
                                                Modified {new Date(project.lastModified).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/app/projects/${project.id}`}
                                        className="text-primary hover:text-primary-dark text-sm font-medium"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Button
                                variant="outline"
                                className="w-full justify-start"
                                onClick={() => setIsCreateProjectOpen(true)}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Create New Project
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Activity className="w-4 h-4 mr-2" />
                                View All Projects
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <AlertTriangle className="w-4 h-4 mr-2" />
                                Generate Reports
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Building2 className="w-4 h-4 mr-2" />
                                Manage Assets
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <CreateProjectDialog
                open={isCreateProjectOpen}
                onOpenChange={setIsCreateProjectOpen}
                onSubmit={handleCreateProject}
            />
        </MainContent>
    )
}

export default Dashboard