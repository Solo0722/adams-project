"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { GridPattern } from "@/components/magicui/grid-pattern"
import {
    Building2,
    Cog,
    Factory,
    Hammer,
    Landmark,
    Wrench,
    ArrowRight,
    Mail,
    Lock,
    Eye,
    EyeOff,
    User,
    UserPlus,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Link, useNavigate } from "react-router-dom"

const SignupPage = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    })

    const handleGoogleSignup = () => {
        // TODO: Implement Google OAuth
        setIsLoading(true)
        setTimeout(() => {
            console.log("Google signup clicked")
            navigate("/app")
            setIsLoading(false)
        }, 1000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate signup
        setTimeout(() => {
            console.log("Form submitted:", formData)
            navigate("/app")
            setIsLoading(false)
        }, 1000)
    }

    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    const floatingAnimation = {
        initial: { y: 0, opacity: 0.6 },
        animate: {
            y: [-10, 10, -10],
            opacity: [0.6, 0.8, 0.6],
            transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }

    const rotateAnimation = {
        initial: { rotate: 0, opacity: 0.6 },
        animate: {
            rotate: 360,
            opacity: [0.6, 0.8, 0.6],
            transition: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
            },
        },
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 flex items-center justify-center">
                <GridPattern
                    width={50}
                    height={50}
                    x={-20}
                    y={-20}
                    className="[mask-image:radial-gradient(circle_at_center,white_30%,transparent_70%)] text-blue-400/10"
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-3xl"></div>
                <div className="absolute top-[60%] -right-[5%] w-[30%] h-[40%] rounded-full bg-blue-400/10 blur-3xl"></div>
            </div>

            {/* Animated Infrastructure Icons */}
            <motion.div
                className="absolute left-[15%] top-[20%]"
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
            >
                <Building2 className="w-8 h-8 text-blue-400/30" />
            </motion.div>

            <motion.div
                className="absolute right-[20%] top-[25%]"
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
            >
                <Landmark className="w-6 h-6 text-blue-400/30" />
            </motion.div>

            <motion.div
                className="absolute left-[25%] bottom-[30%]"
                variants={rotateAnimation}
                initial="initial"
                animate="animate"
            >
                <Cog className="w-10 h-10 text-blue-400/20" />
            </motion.div>

            <motion.div
                className="absolute right-[25%] bottom-[35%]"
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
            >
                <Factory className="w-8 h-8 text-blue-400/20" />
            </motion.div>

            <motion.div
                className="absolute left-[30%] top-[40%]"
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
            >
                <Hammer className="w-7 h-7 text-blue-400/20" />
            </motion.div>

            <motion.div
                className="absolute right-[30%] top-[45%]"
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
            >
                <Wrench className="w-9 h-9 text-blue-400/20" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md z-10"
            >
                <div className="relative">
                    {/* Glowing border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-30"></div>

                    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 relative">
                        <div className="text-center mb-8">
                            <Badge variant="outline" className="mb-4 bg-white/80 backdrop-blur-sm border-blue-200 shadow-sm">
                                <UserPlus className="w-3 h-3 mr-1 text-blue-400" />
                                <span className="text-blue-600 font-medium">Create Account</span>
                            </Badge>
                            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2">
                                Join AdAMS
                            </h1>
                            <p className="text-gray-600">Sign up to get started with your account</p>
                        </div>

                        <motion.div variants={containerAnimation} initial="hidden" animate="show" className="space-y-6">
                            <motion.button
                                variants={itemAnimation}
                                onClick={handleGoogleSignup}
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-3 bg-white border border-blue-200 rounded-lg px-6 py-3 text-gray-700 hover:bg-blue-50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                <span className="font-medium">{isLoading ? "Connecting..." : "Continue with Google"}</span>
                            </motion.button>

                            <motion.div variants={itemAnimation} className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-blue-100"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
                                </div>
                            </motion.div>

                            <motion.form variants={itemAnimation} className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                                            First Name
                                        </Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <Input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                                                placeholder="First name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                                            Last Name
                                        </Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <Input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                                                placeholder="Last name"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        Email address
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                        Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="pl-10 pr-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                                            placeholder="Create a password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                                            placeholder="Confirm your password"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <Checkbox
                                        id="agreeToTerms"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked === true }))}
                                        className="mt-1"
                                        required
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <Label htmlFor="agreeToTerms" className="text-sm text-gray-700 font-normal leading-relaxed">
                                            I agree to the{" "}
                                            <Link to="/terms" className="text-blue-500 hover:text-blue-600 transition-colors">
                                                Terms of Service
                                            </Link>{" "}
                                            and{" "}
                                            <Link to="/privacy" className="text-blue-500 hover:text-blue-600 transition-colors">
                                                Privacy Policy
                                            </Link>
                                        </Label>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-blue-400 hover:bg-blue-500 text-white shadow-lg shadow-blue-400/20 transition-all duration-300 hover:shadow-blue-400/30 hover:-translate-y-1 disabled:opacity-70 disabled:pointer-events-none"
                                >
                                    {isLoading ? "Creating Account..." : "Create Account"}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.form>

                            <motion.div variants={itemAnimation} className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Already have an account?{" "}
                                    <Link to="/auth/signin" className="text-blue-500 hover:text-blue-600 font-medium">
                                        Sign in
                                    </Link>
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default SignupPage
