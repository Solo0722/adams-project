"use client"

import * as React from "react"
import { motion, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const { scrollY } = useScroll()
    const [hasScrolled, setHasScrolled] = React.useState(false)

    React.useEffect(() => {
        return scrollY.onChange(() => setHasScrolled(scrollY.get() > 10))
    }, [scrollY])



    return (
        <header
            className={`px-4 sm:px-6 md:px-8 lg:px-16 sticky top-0 w-full z-50 transition-all duration-300 py-2  ${hasScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Logo />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="#solutions" className={`text-sm transition-colors text-gray-600 hover:text-black`}>
                            Solutions
                        </Link>
                        <Link to="#insights" className={`text-sm transition-colors text-gray-600 hover:text-black`}>
                            Insights
                        </Link>
                        <Link to="#services" className={`text-sm transition-colors text-gray-600 hover:text-black`}>
                            Services
                        </Link>
                        <Link to="#contact" className={`text-sm transition-colors text-gray-600 hover:text-black`}>
                            Contact
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/auth/signin">
                            <Button variant="ghost" className={`text-sm transition-colors text-gray-600 hover:text-black bg-accent hover:bg-accent/80 whitespace-nowrap`}>
                                Sign in
                            </Button>
                        </Link>
                        <Link to="/auth/signup">
                            <Button className={"bg-blue-400 hover:bg-blue-500 text-white whitespace-nowrap"}>Sign up</Button>
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-white border-t"
                >
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                to="#solutions"
                                className="text-sm text-gray-600 hover:text-black transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Solutions
                            </Link>
                            <Link
                                to="#insights"
                                className="text-sm text-gray-600 hover:text-black transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Insights
                            </Link>
                            <Link
                                to="#services"
                                className="text-sm text-gray-600 hover:text-black transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                to="#contact"
                                className="text-sm text-gray-600 hover:text-black transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                            <div className="pt-4 space-y-2">
                                <Link to="/auth/signin">
                                    <Button variant="ghost" className="w-full justify-center text-sm">
                                        Sign in
                                    </Button>
                                </Link>
                                <Link to="/auth/signup">
                                    <Button className="w-full justify-center bg-blue-400 hover:bg-blue-500 text-white">Sign up</Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </motion.div>
            )}
        </header>
    )
}

export default Navbar