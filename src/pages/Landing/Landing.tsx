"use client"

import { GridPattern } from "@/components/magicui/grid-pattern"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
    Trophy,
    Users,
    Building2,
    Calendar,
    Factory,
    Cog,
    Hammer,
    Landmark,
    Wrench,
    Mail,
    MessageSquare,
    Phone,
    ArrowRight,
    Briefcase,
    CheckCircle,
    ChevronRight,
    Sparkles,
    Star,
    BarChart3,
    Zap,
    Shield,
    Globe,
    PlayCircle,
} from "lucide-react"
import HeroVideoDialog from "@/components/magicui/hero-video-dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/pages/Landing/Navbar"
import { FAQs, insights, solutions } from "@/pages/Landing/constants"
import Footer from "@/pages/Landing/Footer"
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"

const Landing = () => {
    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div className="bg-gradient-to-b from-white to-blue-50">
            <Navbar />
            <main>
                {/* Home Section */}
                <section
                    id="home"
                    className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-24 text-center relative flex flex-col items-center justify-center overflow-hidden"
                >
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
                        <Building2 className="w-8 h-8 text-blue-400" />
                    </motion.div>

                    <motion.div
                        className="absolute right-[20%] top-[25%]"
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Landmark className="w-6 h-6 text-blue-400" />
                    </motion.div>

                    <motion.div
                        className="absolute left-[25%] bottom-[30%]"
                        variants={rotateAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Cog className="w-10 h-10 text-blue-400/70" />
                    </motion.div>

                    <motion.div
                        className="absolute right-[25%] bottom-[35%]"
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Factory className="w-8 h-8 text-blue-400/80" />
                    </motion.div>

                    <motion.div
                        className="absolute left-[30%] top-[40%]"
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Hammer className="w-7 h-7 text-blue-400/60" />
                    </motion.div>

                    <motion.div
                        className="absolute right-[30%] top-[45%]"
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Wrench className="w-9 h-9 text-blue-400/70" />
                    </motion.div>

                    <motion.div
                        className="max-w-3xl mx-auto relative z-10"
                        variants={containerAnimation}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={itemAnimation}>
                            <Badge variant="outline" className="mb-4 bg-white/80 backdrop-blur-sm border-blue-200 shadow-sm">
                                <Trophy className="w-3 h-3 mr-1 text-blue-400" />
                                <span className="text-blue-600 font-medium">Trusted by asset managers</span>
                            </Badge>
                        </motion.div>
                        <motion.h1
                            variants={itemAnimation}
                            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 "
                        >
                            One tool to{" "}
                            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                                manage
                                <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-200/50 -z-10 rounded-full"></span>
                            </span>{" "}
                            infrastructure assets and your{" "}
                            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                                team
                                <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-200/50 -z-10 rounded-full"></span>
                            </span>
                        </motion.h1>
                        <motion.p variants={itemAnimation} className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                            AdAMS helps asset managers work faster, smarter and more efficiently, delivering the visibility and
                            data-driven insights to mitigate risk and ensure compliance.
                        </motion.p>
                        <motion.div variants={itemAnimation} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <Link to="/auth/signup">
                                <Button
                                    size="lg"
                                    className="bg-blue-400 hover:bg-blue-500 text-white shadow-lg shadow-blue-400/20 transition-all duration-300 hover:shadow-blue-400/30 hover:-translate-y-1"
                                >
                                    <Sparkles className="mr-2 h-4 w-4" /> Start For Free
                                </Button>
                            </Link>
                            <Link to="#demo-video">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-blue-200 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <PlayCircle className="mr-2 h-4 w-4" /> Get a Demo
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div id="demo-video" className="pt-5 relative" variants={containerAnimation} initial="initial" animate="animate">
                        <div
                            className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-30"></div>
                        <HeroVideoDialog
                            className="block w-full max-w-3xl mx-auto relative"
                            animationStyle="from-center"
                            videoSrc="/background.mp4"
                            thumbnailSrc="/fallback.png"
                            thumbnailAlt="AdAMS video thumbnail"
                        />
                    </motion.div>

                    {/* Trusted by logos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 pt-8 border-t border-blue-100 w-full max-w-4xl mx-auto"
                    >
                        <p className="text-sm text-gray-500 mb-6">TRUSTED BY INDUSTRY LEADERS</p>
                        <div className="flex flex-wrap justify-center gap-8 opacity-70">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="h-8 w-24 bg-gray-300/50 rounded-md"></div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Solutions Section */}
                <section id="solutions" className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                        <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 blur-3xl"></div>
                    </div>

                    <div className="text-center mb-16 relative z-10">
                        <Badge variant="outline" className="mb-4 bg-white backdrop-blur-sm border-blue-200 shadow-sm">
                            <Building2 className="w-3 h-3 mr-1 text-blue-400" />
                            <span className="text-blue-600 font-medium">Solutions</span>
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                            Advanced infrastructure asset management
                            <br />
                            solutions for your organization
                        </h2>
                        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
                            Maximize your team's productivity and security with our affordable, user-friendly asset management system.
                        </p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerAnimation}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                variants={itemAnimation}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full -mr-16 -mt-16 z-0"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/5 rounded-full -ml-12 -mb-12 z-0"></div>

                                <div className="mb-6 relative z-10">
                                    <div className="inline-block p-4 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                                        <solution.icon className="h-8 w-8 text-blue-400" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-500 transition-colors duration-300 relative z-10">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-600 mb-6 relative z-10">{solution.description}</p>
                                <div className="space-y-3 mb-6 relative z-10">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-gray-600">
                                            <CheckCircle className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/auth/signup">
                                    <button className="cursor-pointer text-blue-500 font-medium flex items-center group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                                        Learn More <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Insights Section */}
                <section id="insights" className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-800"></div>
                    <div className="absolute inset-0 opacity-20">
                        <GridPattern width={40} height={40} x={-20} y={-20} className="text-white" />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 bg-blue-800/50 backdrop-blur-sm border-blue-400/30 shadow-sm">
                                <Users className="w-3 h-3 mr-1 text-blue-300" />
                                <span className="text-blue-200 font-medium">Insights</span>
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                Don't replace. <span className="text-blue-300">Integrate.</span>
                            </h2>
                            <p className="max-w-2xl mx-auto mb-12 text-blue-100 text-lg">
                                We understand the hassle of replacing the tools you're used to in your process. That's why we integrate
                                more tools you use in your day-to-day work.
                            </p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerAnimation}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {insights.map((insight, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-400/20 transition-all duration-500 group"
                                >
                                    <div className="relative overflow-hidden h-48">
                                        <img
                                            src={insight.image || "/placeholder.svg"}
                                            alt={insight.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <Badge className="bg-blue-400/90 text-white border-none">New Feature</Badge>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                                            {insight.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6">{insight.description}</p>
                                        <ul className="space-y-3">
                                            {insight.list.map((item, idx) => (
                                                <li key={idx} className="flex items-center text-gray-600">
                                                    <CheckCircle className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <Link to="/auth/signup">
                                                <Button className="w-full cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-600">
                                                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-24 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                        <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 blur-3xl"></div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto relative z-10"
                    >
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 text-9xl font-serif text-blue-200">"</div>
                            <div className="bg-white rounded-2xl p-10  relative">
                                <div className="flex items-center mb-8">
                                    <div className="flex -space-x-4 mr-6">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="h-12 w-12 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center overflow-hidden"
                                            >
                                                <img
                                                    src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`}
                                                    alt={`Testimonial avatar ${i}`}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Trusted by 1,000+ companies</div>
                                        <div className="flex mt-1">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="text-xl md:text-2xl font-medium mb-8 text-gray-800">
                                    "AdAMS is helping our company to decrease operational expenses and turnaround time, while increasing
                                    the compliance, resource allocation and effectiveness of our asset management."
                                </blockquote>

                                <div className="flex items-center">
                                    <div className="h-14 w-14 rounded-full bg-blue-400 flex items-center justify-center overflow-hidden mr-4 border-2 border-white shadow-lg">
                                        <img
                                            src="https://adams.ndsu-smartlab.com/assets/images/armstrong.png"
                                            alt="Testimonial avatar"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-medium text-lg">Dr. Armstrong Aboah</div>
                                        <div className="text-sm text-gray-500">Assistant Professor, North Dakota State University</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Stats */}
                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                    >
                        <div className="bg-white rounded-2xl p-8 border border-blue-100 relative overflow-hidden group hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <Calendar className="h-10 w-10 mx-auto mb-4 text-blue-400" />
                                <div className="text-4xl font-bold mb-2 text-gray-900">2021</div>
                                <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-600">
                                    Founded
                                </Badge>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-blue-100 relative overflow-hidden group hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <Building2 className="h-10 w-10 mx-auto mb-4 text-blue-400" />
                                <div className="text-4xl font-bold mb-2 text-gray-900">50K+</div>
                                <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-600">
                                    Assets Managed
                                </Badge>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-blue-100 relative overflow-hidden group hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <Users className="h-10 w-10 mx-auto mb-4 text-blue-400" />
                                <div className="text-4xl font-bold mb-2 text-gray-900">1k+</div>
                                <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-600">
                                    Company Partners
                                </Badge>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section id="services" className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 blur-3xl"></div>
                        <div className="absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] rounded-full bg-blue-400/5 blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 bg-white backdrop-blur-sm border-blue-200 shadow-sm">
                                <Sparkles className="w-3 h-3 mr-1 text-blue-400" />
                                <span className="text-blue-600 font-medium">Key Features</span>
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                                Why choose AdAMS?
                            </h2>
                            <p className="max-w-2xl mx-auto mb-12 text-gray-600 text-lg">
                                Our platform offers comprehensive solutions designed specifically for infrastructure asset management.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <BarChart3 className="h-6 w-6 text-blue-400" />,
                                    title: "Real-time Analytics",
                                    description:
                                        "Get instant insights into your asset performance with our powerful analytics dashboard.",
                                },
                                {
                                    icon: <Shield className="h-6 w-6 text-blue-400" />,
                                    title: "Enhanced Security",
                                    description: "Keep your asset data secure with our enterprise-grade security protocols.",
                                },
                                {
                                    icon: <Zap className="h-6 w-6 text-blue-400" />,
                                    title: "Rapid Deployment",
                                    description: "Get up and running quickly with our streamlined implementation process.",
                                },
                                {
                                    icon: <Globe className="h-6 w-6 text-blue-400" />,
                                    title: "Global Accessibility",
                                    description: "Access your asset data from anywhere in the world, on any device.",
                                },
                                {
                                    icon: <Users className="h-6 w-6 text-blue-400" />,
                                    title: "Team Collaboration",
                                    description: "Collaborate seamlessly with your team members on asset management tasks.",
                                },
                                {
                                    icon: <Cog className="h-6 w-6 text-blue-400" />,
                                    title: "Customizable Workflows",
                                    description: "Tailor the platform to match your specific asset management processes.",
                                },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-24">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 bg-white backdrop-blur-sm border-blue-200 shadow-sm">
                            <MessageSquare className="w-3 h-3 mr-1 text-blue-400" />
                            <span className="text-blue-600 font-medium">FAQ</span>
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-2xl mx-auto mb-12 text-gray-600 text-lg">
                            Find answers to common questions about AdAMS and our infrastructure asset management solutions.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-xl border border-blue-100"
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {FAQs.map((faq, index) => (
                                <AccordionItem
                                    value={`item-${index + 1}`}
                                    key={index}
                                    className="border-b border-blue-100 last:border-0"
                                >
                                    <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-blue-500 py-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </section>

                {/* Contact Us Section */}
                <section id="contact" className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <GridPattern width={40} height={40} x={-20} y={-20} className="text-white" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <Badge variant="outline" className="mb-4 bg-blue-800/50 backdrop-blur-sm border-blue-400/30 shadow-sm">
                                <Mail className="w-3 h-3 mr-1 text-blue-300" />
                                <span className="text-blue-200 font-medium">Contact Us</span>
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Ready to transform your <span className="text-blue-300">asset management?</span>
                            </h2>
                            <p className="text-blue-100 mb-8 text-lg">
                                Have questions about AdAMS? Our team is here to help. Contact us for more information about our
                                solutions.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 text-blue-100">
                                    <div className="bg-blue-700/50 p-3 rounded-full">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-4 text-blue-100">
                                    <div className="bg-blue-700/50 p-3 rounded-full">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span>contact@adams-project.com</span>
                                </div>
                                <div className="flex items-center space-x-4 text-blue-100">
                                    <div className="bg-blue-700/50 p-3 rounded-full">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <span>Monday - Friday, 9:00 AM - 6:00 PM EST</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4 relative z-10"
                        >
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 rounded-lg bg-white/10 border border-blue-400/30 text-white placeholder:text-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded-lg bg-white/10 border border-blue-400/30 text-white placeholder:text-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full p-3 rounded-lg bg-white/10 border border-blue-400/30 text-white placeholder:text-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                                ></textarea>
                                <Button className="w-full bg-blue-400 hover:bg-blue-500 text-white shadow-lg shadow-blue-400/20 transition-all duration-300">
                                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </motion.form>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
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
                        <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 blur-3xl"></div>
                        <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-blue-400/5 blur-3xl"></div>
                    </div>

                    <motion.div
                        className="max-w-3xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center relative z-10"
                        variants={containerAnimation}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemAnimation}>
                            <Badge variant="outline" className="mb-4 bg-white backdrop-blur-sm border-blue-200 shadow-sm">
                                <ArrowRight className="w-3 h-3 mr-1 text-blue-400" />
                                <span className="text-blue-600 font-medium">Get Started</span>
                            </Badge>
                        </motion.div>
                        <motion.h2
                            variants={itemAnimation}
                            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
                        >
                            Ready to transform your asset management?
                        </motion.h2>
                        <motion.p variants={itemAnimation} className="text-gray-600 mb-8 text-lg">
                            Join thousands of organizations that trust AdAMS for their infrastructure asset management needs.
                        </motion.p>
                        <motion.div variants={itemAnimation} className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/auth/signup">
                                <Button
                                    size="lg"
                                    className="bg-blue-400 hover:bg-blue-500 text-white shadow-lg shadow-blue-400/20 transition-all duration-300 hover:shadow-blue-400/30 hover:-translate-y-1"
                                >
                                    <Sparkles className="mr-2 h-4 w-4" /> Start For Free
                                </Button>
                            </Link>
                            <Link to="#demo-video">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-blue-200 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Calendar className="mr-2 h-4 w-4" /> Schedule a Demo
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Landing
