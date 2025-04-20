import MainContent from '@/components/main-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MapPin, AlertCircle, Image as ImageIcon, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const distressTypes = [
    { name: 'Alligator Cracking', count: 4 },
    { name: 'Rutting', count: 2 },
    { name: 'Potholes', count: 3 },
    { name: 'Transverse Cracking', count: 1 },
    { name: 'Manholes', count: 3 },
    { name: 'Longitudinal Cracking', count: 1 },
    { name: 'Weathering', count: 1 },
    { name: 'Edge Cracking', count: 1 }
]

const pciLegend = [
    { range: 'Poor (25-50)', color: 'bg-red-500' },
    { range: 'Fair (51-70)', color: 'bg-yellow-500' },
    { range: 'Good (71-85)', color: 'bg-green-500' },
    { range: 'Very Good (86-100)', color: 'bg-blue-500' }
]

const recentImages = [
    { id: 1, title: 'Image 1' },
    { id: 2, title: 'Image 2' },
    { id: 3, title: 'Image 3' },
    { id: 4, title: 'Image 4' }
]

const PavementAssetAnalysis = () => {
    return (
        <MainContent
            title="Pavement Asset Analysis"
            description="Analyze and monitor pavement conditions"
        >
            <div className="space-y-6">
                <Tabs defaultValue="distress" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="distress">Distress Detection</TabsTrigger>
                        <TabsTrigger value="pci">PCI Mapping</TabsTrigger>
                        <TabsTrigger value="mark">Mark Evaluation</TabsTrigger>
                    </TabsList>

                    {/* Distress Detection Tab */}
                    <TabsContent value="distress">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Distress Map</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-12 h-12 text-gray-400" />
                                        <span className="text-gray-600 ml-2">Map View</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>Distress Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                            <span className="font-medium">Total Distress Detected</span>
                                            <Badge variant="secondary">15</Badge>
                                        </div>
                                        <div className="space-y-2">
                                            {distressTypes.map((type, index) => (
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

                    {/* PCI Mapping Tab */}
                    <TabsContent value="pci">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>PCI Map</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-12 h-12 text-gray-400" />
                                        <span className="text-gray-600 ml-2">PCI Map View</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>PCI Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                                            <h3 className="text-sm text-gray-500 mb-2">Average PCI Score</h3>
                                            <div className="text-3xl font-bold">93.00</div>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium mb-3">PCI Legend</h3>
                                            <div className="space-y-2">
                                                {pciLegend.map((item, index) => (
                                                    <div key={index} className="flex items-center gap-2 p-2 border rounded-lg">
                                                        <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                                                        <span className="text-sm">{item.range}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Mark Evaluation Tab */}
                    <TabsContent value="mark">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Mark Map</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-12 h-12 text-gray-400" />
                                        <span className="text-gray-600 ml-2">Mark Map View</span>
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
                </Tabs>
            </div>
        </MainContent>
    )
}

export default PavementAssetAnalysis