import React, { useState } from 'react'
import MainContent from '@/components/main-content'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Edit2, Trash2, Upload, Video, Activity, Navigation, Rotate3D } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const Project = () => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)

    // Sample data for charts
    const accelerometerData = [
        { time: '00:00', x: 0.1, y: 0.2, z: 0.3 },
        { time: '01:00', x: 0.2, y: 0.3, z: 0.4 },
        { time: '02:00', x: 0.3, y: 0.4, z: 0.5 },
        { time: '03:00', x: 0.4, y: 0.5, z: 0.6 },
        { time: '04:00', x: 0.5, y: 0.6, z: 0.7 },
    ]

    const gyroscopeData = [
        { time: '00:00', x: 0.5, y: 0.6, z: 0.7 },
        { time: '01:00', x: 0.6, y: 0.7, z: 0.8 },
        { time: '02:00', x: 0.7, y: 0.8, z: 0.9 },
        { time: '03:00', x: 0.8, y: 0.9, z: 1.0 },
        { time: '04:00', x: 0.9, y: 1.0, z: 1.1 },
    ]

    const gpsData = [
        { time: '00:00', latitude: 6.5244, longitude: 3.3792 },
        { time: '01:00', latitude: 6.5245, longitude: 3.3793 },
        { time: '02:00', latitude: 6.5246, longitude: 3.3794 },
        { time: '03:00', latitude: 6.5247, longitude: 3.3795 },
        { time: '04:00', latitude: 6.5248, longitude: 3.3796 },
    ]

    return (
        <MainContent
            title="Project Details"
            description="View and manage project information"
            toolbar={
                <div className="flex gap-2">
                    <Button variant="outline" className="h-8 text-[12px] font-bold">
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit Project
                    </Button>
                    <Button variant="destructive" className="h-8 text-[12px] font-bold">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Project
                    </Button>
                </div>
            }
        >
            <div className="space-y-6">
                {/* Project Summary */}
                <Card>
                    <CardHeader>
                        <CardTitle>Project Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500">Project Name</p>
                                <p className="font-medium">Lagos-Ibadan Expressway Expansion</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500">Asset Name</p>
                                <p className="font-medium">Main Highway Section A</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500">Description</p>
                                <p className="font-medium">Expansion of the Lagos-Ibadan expressway to 10 lanes with modern tolling infrastructure</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-medium">Lagos to Ibadan, Nigeria</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500">Last Modified</p>
                                <p className="font-medium">3/29/2024 01:36 AM</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500">Project ID</p>
                                <p className="font-medium">DboFihPGrksaOrtTYw3H</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500">Author</p>
                                <p className="font-medium">Unknown User</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Sensors */}
                <Card>
                    <CardHeader>
                        <CardTitle>Sensors</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-4 p-4 border rounded-lg">
                                <Activity className="w-6 h-6 text-blue-500" />
                                <div>
                                    <p className="font-medium">Accelerometer</p>
                                    <p className="text-sm text-gray-500">Active</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-4 border rounded-lg">
                                <Rotate3D className="w-6 h-6 text-green-500" />
                                <div>
                                    <p className="font-medium">Gyroscope</p>
                                    <p className="text-sm text-gray-500">Active</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-4 border rounded-lg">
                                <Navigation className="w-6 h-6 text-purple-500" />
                                <div>
                                    <p className="font-medium">GPS</p>
                                    <p className="text-sm text-gray-500">Active</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Analysis Options */}
                <Card>
                    <CardHeader>
                        <CardTitle>Analysis Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Button variant="outline" className="h-auto py-4">
                                <div className="text-left">
                                    <p className="font-medium">Pavement Analysis</p>
                                    <p className="text-sm text-gray-500">Analyze road surface conditions</p>
                                </div>
                            </Button>
                            <Button variant="outline" className="h-auto py-4">
                                <div className="text-left">
                                    <p className="font-medium">Traffic Analysis</p>
                                    <p className="text-sm text-gray-500">Analyze traffic patterns and flow</p>
                                </div>
                            </Button>
                            <Button variant="outline" className="h-auto py-4">
                                <div className="text-left">
                                    <p className="font-medium">Structural Analysis</p>
                                    <p className="text-sm text-gray-500">Analyze structural integrity</p>
                                </div>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Project Videos */}
                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle>Project Videos</CardTitle>
                            <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <Upload className="w-4 h-4 mr-2" />
                                        Upload Video
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Upload Project Video</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4 py-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="title">Title</Label>
                                            <Input id="title" placeholder="Enter video title" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea id="description" placeholder="Enter video description" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="video">Video File</Label>
                                            <div className="flex items-center justify-center w-full">
                                                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                                                        <p className="mb-2 text-sm text-gray-500">Click to upload or drag and drop</p>
                                                        <p className="text-xs text-gray-500">MP4, MOV, AVI (MAX. 500MB)</p>
                                                    </div>
                                                    <input id="video" type="file" className="hidden" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                                <Video className="w-12 h-12 text-gray-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Sensor Data & Charts */}
                <Card>
                    <CardHeader>
                        <CardTitle>Sensor Data & Charts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {/* Accelerometer Chart */}
                            <div>
                                <h3 className="text-lg font-medium mb-4">Accelerometer Data</h3>
                                <div className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={accelerometerData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="time" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="x" stroke="#3b82f6" name="X-Axis" />
                                            <Line type="monotone" dataKey="y" stroke="#10b981" name="Y-Axis" />
                                            <Line type="monotone" dataKey="z" stroke="#8b5cf6" name="Z-Axis" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Gyroscope Chart */}
                            <div>
                                <h3 className="text-lg font-medium mb-4">Gyroscope Data</h3>
                                <div className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={gyroscopeData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="time" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="x" stroke="#3b82f6" name="X-Axis" />
                                            <Line type="monotone" dataKey="y" stroke="#10b981" name="Y-Axis" />
                                            <Line type="monotone" dataKey="z" stroke="#8b5cf6" name="Z-Axis" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* GPS Chart */}
                            <div>
                                <h3 className="text-lg font-medium mb-4">GPS Data</h3>
                                <div className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={gpsData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="time" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="latitude" stroke="#3b82f6" name="Latitude" />
                                            <Line type="monotone" dataKey="longitude" stroke="#10b981" name="Longitude" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Project Report Generation */}
                <Card>
                    <CardHeader>
                        <CardTitle>Project Report Generation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <Button className="w-full md:w-auto">
                                    Generate Full Report
                                </Button>
                                <Button variant="outline" className="w-full md:w-auto">
                                    Generate Sensor Report
                                </Button>
                                <Button variant="outline" className="w-full md:w-auto">
                                    Generate Analysis Report
                                </Button>
                            </div>
                            <div className="border rounded-lg p-4">
                                <p className="text-sm text-gray-500">Last Generated Report</p>
                                <p className="font-medium">Full Project Report - March 28, 2024</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </MainContent>
    )
}

export default Project