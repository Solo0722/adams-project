import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Upload, X, MapPin, Building2, FileText, Activity, Rotate3D, Navigation } from 'lucide-react'

type CreateProjectDialogProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
    trigger?: React.ReactNode
    onSubmit: (data: {
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
    }) => void
}

export function CreateProjectDialog({ open, onOpenChange, trigger, onSubmit }: CreateProjectDialogProps) {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [assetName, setAssetName] = useState('')
    const [description, setDescription] = useState('')
    const [sensors, setSensors] = useState({
        accelerometer: false,
        gyroscope: false,
        gps: false
    })
    const [files, setFiles] = useState<{
        videos: File[]
        sensorData: File[]
    }>({
        videos: [],
        sensorData: []
    })

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'videos' | 'sensorData') => {
        if (e.target.files) {
            setFiles(prev => ({
                ...prev,
                [type]: [...prev[type], ...Array.from(e.target.files!)]
            }))
        }
    }

    const removeFile = (type: 'videos' | 'sensorData', index: number) => {
        setFiles(prev => ({
            ...prev,
            [type]: prev[type].filter((_, i) => i !== index)
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({
            name,
            location,
            assetName,
            description,
            sensors,
            files
        })
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {trigger}
            <DialogContent className="sm:max-w-[700px] h-[90vh] flex flex-col">
                <DialogHeader className="flex-none">
                    <DialogTitle className="text-2xl font-bold">Create New Project</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
                    <div className="flex-1 overflow-y-auto pr-1">
                        <div className="grid gap-6">
                            {/* Basic Information Section */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium">Project Name</Label>
                                        <Input
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter project name"
                                            className="h-10"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="location" className="text-sm font-medium">Location</Label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <Input
                                                id="location"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                placeholder="Enter project location"
                                                className="h-10 pl-9"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="assetName" className="text-sm font-medium">Asset Name</Label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <Input
                                                id="assetName"
                                                value={assetName}
                                                onChange={(e) => setAssetName(e.target.value)}
                                                placeholder="Enter asset name"
                                                className="h-10 pl-9"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description" className="text-sm font-medium">Description</Label>
                                        <Textarea
                                            id="description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Enter project description"
                                            className="min-h-[100px]"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Sensors Section */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Sensors</h3>
                                <div className="grid gap-4">
                                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                                        <Activity className="w-5 h-5 text-blue-500" />
                                        <div className="flex-1">
                                            <Label htmlFor="accelerometer" className="text-sm font-medium">Accelerometer</Label>
                                            <p className="text-sm text-gray-500">Measures acceleration forces</p>
                                        </div>
                                        <Checkbox
                                            id="accelerometer"
                                            checked={sensors.accelerometer}
                                            onCheckedChange={(checked) => setSensors(prev => ({ ...prev, accelerometer: checked as boolean }))}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                                        <Rotate3D className="w-5 h-5 text-green-500" />
                                        <div className="flex-1">
                                            <Label htmlFor="gyroscope" className="text-sm font-medium">Gyroscope</Label>
                                            <p className="text-sm text-gray-500">Measures angular velocity</p>
                                        </div>
                                        <Checkbox
                                            id="gyroscope"
                                            checked={sensors.gyroscope}
                                            onCheckedChange={(checked) => setSensors(prev => ({ ...prev, gyroscope: checked as boolean }))}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                                        <Navigation className="w-5 h-5 text-purple-500" />
                                        <div className="flex-1">
                                            <Label htmlFor="gps" className="text-sm font-medium">GPS</Label>
                                            <p className="text-sm text-gray-500">Tracks location coordinates</p>
                                        </div>
                                        <Checkbox
                                            id="gps"
                                            checked={sensors.gps}
                                            onCheckedChange={(checked) => setSensors(prev => ({ ...prev, gps: checked as boolean }))}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Files Section */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Files</h3>
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Project Videos/Images</Label>
                                        <div className="border-2 border-dashed rounded-lg p-6 hover:border-primary/50 transition-colors">
                                            <input
                                                type="file"
                                                id="videos"
                                                accept="video/*,image/*"
                                                multiple
                                                onChange={(e) => handleFileUpload(e, 'videos')}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="videos"
                                                className="flex flex-col items-center justify-center cursor-pointer"
                                            >
                                                <Upload className="w-8 h-8 mb-2 text-gray-400" />
                                                <span className="text-sm text-gray-500">
                                                    Click to upload or drag and drop
                                                </span>
                                                <span className="text-xs text-gray-400 mt-1">
                                                    MP4, MOV, AVI, JPG, PNG (MAX. 500MB)
                                                </span>
                                            </label>
                                        </div>
                                        {files.videos.length > 0 && (
                                            <div className="space-y-2">
                                                {files.videos.map((file, index) => (
                                                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                                        <div className="flex items-center space-x-2">
                                                            <FileText className="w-4 h-4 text-gray-400" />
                                                            <span className="text-sm">{file.name}</span>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => removeFile('videos', index)}
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-sm font-medium">Sensor Data Files</Label>
                                        <div className="border-2 border-dashed rounded-lg p-6 hover:border-primary/50 transition-colors">
                                            <input
                                                type="file"
                                                id="sensorData"
                                                accept=".doc,.docx,.pdf,.xls,.xlsx,.csv"
                                                multiple
                                                onChange={(e) => handleFileUpload(e, 'sensorData')}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="sensorData"
                                                className="flex flex-col items-center justify-center cursor-pointer"
                                            >
                                                <Upload className="w-8 h-8 mb-2 text-gray-400" />
                                                <span className="text-sm text-gray-500">
                                                    Click to upload or drag and drop
                                                </span>
                                                <span className="text-xs text-gray-400 mt-1">
                                                    Word, PDF, Excel, CSV (MAX. 100MB)
                                                </span>
                                            </label>
                                        </div>
                                        {files.sensorData.length > 0 && (
                                            <div className="space-y-2">
                                                {files.sensorData.map((file, index) => (
                                                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                                        <div className="flex items-center space-x-2">
                                                            <FileText className="w-4 h-4 text-gray-400" />
                                                            <span className="text-sm">{file.name}</span>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => removeFile('sensorData', index)}
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-none flex justify-end space-x-3 pt-4 mt-4 border-t">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            className="h-10"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="h-10"
                        >
                            Create Project
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
} 