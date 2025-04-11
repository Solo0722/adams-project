import { Facebook, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import Logo from "@/components/logo"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-2 mb-6">
                            <Logo />
                        </div>
                        <p className="text-sm text-gray-400 mb-6">
                            Advanced Asset Management System for the modern enterprise. Track, monitor, and optimize your assets in
                            real-time.
                        </p>
                        <div className="flex gap-4">
                            <Link to="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-medium text-white text-lg mb-4">Solutions</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                                    Asset Tracking
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                                    Preventive Maintenance
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                                    Analytics Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                                    Inventory Management
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-medium text-white text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h3 className="font-medium text-white text-lg mb-4">Subscribe to our newsletter</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Get the latest updates, industry insights, and best practices delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Input
                                placeholder="Your email address"
                                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-sky-500"
                            />
                            <Button className="bg-sky-500 hover:bg-sky-600 whitespace-nowrap">Subscribe</Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} AdAMS. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="#" className="text-sm text-gray-500 hover:text-sky-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="text-sm text-gray-500 hover:text-sky-400 transition-colors">
                            Terms of Service
                        </Link>
                        <Link to="#" className="text-sm text-gray-500 hover:text-sky-400 transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer