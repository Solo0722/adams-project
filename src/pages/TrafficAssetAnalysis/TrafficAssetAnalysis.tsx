import React from 'react'
import MainContent from '@/components/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MapPin, AlertCircle, Image as ImageIcon, Calendar, Navigation } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const signTypes = [
    { name: 'Stop Signs', count: 10 },
    { name: 'Yield Signs', count: 8 },
    { name: 'Speed Limit', count: 12 },
    { name: 'No Entry', count: 6 },
    { name: 'Pedestrian', count: 4 },
    { name: 'Parking', count: 5 }
]

const recentImages = [
    { id: 1, title: 'Image 1' },
    { id: 2, title: 'Image 2' },
    { id: 3, title: 'Image 3' },
    { id: 4, title: 'Image 4' }
]

const TrafficAssetAnalysis = () => {
    return (
        <MainContent
            title="Traffic Asset Analysis"
            description="Analyze and monitor traffic assets"
        >
            <div className="space-y-6">
                <Tabs defaultValue="geolocation" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 p-2">
                        <TabsTrigger value="geolocation" className="">Geolocation</TabsTrigger>
                        <TabsTrigger value="signs" className="">Traffic Sign Detection</TabsTrigger>
                        <TabsTrigger value="retro" className="">Retroreflectivity</TabsTrigger>
                        <TabsTrigger value="forecast" className="">Forecasting</TabsTrigger>
                    </TabsList>

                    {/* Geolocation Tab */}
                    <TabsContent value="geolocation">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Geolocation Map</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-12 h-12 text-gray-400" />
                                        <span className="text-gray-600 ml-2">Geolocation Map View</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>Location Details</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 p-3 border rounded-lg">
                                            <Navigation className="w-5 h-5 text-gray-500" />
                                            <span className="text-sm">Current Location: Main Highway Section A</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center p-3 border rounded-lg">
                                                <span className="text-sm">Latitude</span>
                                                <span className="text-sm font-medium">6.5244° N</span>
                                            </div>
                                            <div className="flex justify-between items-center p-3 border rounded-lg">
                                                <span className="text-sm">Longitude</span>
                                                <span className="text-sm font-medium">3.3792° E</span>
                                            </div>
                                            <div className="flex justify-between items-center p-3 border rounded-lg">
                                                <span className="text-sm">Elevation</span>
                                                <span className="text-sm font-medium">41m</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Traffic Sign Detection Tab */}
                    <TabsContent value="signs">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Traffic Sign Map</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-12 h-12 text-gray-400" />
                                        <span className="text-gray-600 ml-2">Traffic Sign Map View</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>Sign Detection Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                            <span className="font-medium">Total Traffic Signs Detected</span>
                                            <Badge variant="secondary">45</Badge>
                                        </div>
                                        <div className="space-y-2">
                                            {signTypes.map((type, index) => (
                                                <div key={index} className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                                                    <span className="text-sm">{type.name}</span>
                                                    <Badge variant="secondary">{type.count}</Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Retroreflectivity Tab */}
                    <TabsContent value="retro">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Retroreflectivity Map</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-12 h-12 text-gray-400" />
                                        <span className="text-gray-600 ml-2">Retroreflectivity Map View</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>Popup View</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-sm font-medium mb-3">Recent Images</h3>
                                            <div className="grid grid-cols-2 gap-2">
                                                {recentImages.map((image) => (
                                                    <div key={image.id} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center border">
                                                        <ImageIcon className="w-8 h-8 text-gray-400" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium mb-3">Recent Alerts</h3>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 p-3 border rounded-lg">
                                                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                                                    <span className="text-sm">Maintenance due in 30 days</span>
                                                </div>
                                                <div className="flex items-center gap-2 p-3 border rounded-lg">
                                                    <Calendar className="w-5 h-5 text-green-500" />
                                                    <span className="text-sm">Last inspection completed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Forecasting Tab */}
                    <TabsContent value="forecast">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Forecasting Map</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-12 h-12 text-gray-400" />
                                        <span className="text-gray-600 ml-2">Forecasting Map View</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>Forecasting Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <h3 className="text-sm text-gray-500 mb-2">Next 30 Days</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Expected Traffic Volume</span>
                                                    <span className="text-sm font-medium">45,000 vehicles</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Peak Hours</span>
                                                    <span className="text-sm font-medium">7-9 AM, 4-6 PM</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center p-3 border rounded-lg">
                                                <span className="text-sm">Maintenance Prediction</span>
                                                <Badge variant="secondary">In 45 days</Badge>
                                            </div>
                                            <div className="flex justify-between items-center p-3 border rounded-lg">
                                                <span className="text-sm">Sign Replacement</span>
                                                <Badge variant="secondary">In 60 days</Badge>
                                            </div>
                                            <div className="flex justify-between items-center p-3 border rounded-lg">
                                                <span className="text-sm">Retroreflectivity Check</span>
                                                <Badge variant="secondary">In 30 days</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </MainContent>
    )
}

export default TrafficAssetAnalysis
