import Footer from '@/pages/Landing/Footer'
import Navbar from '@/pages/Landing/Navbar'
import { motion } from 'framer-motion'
import { ArrowDown, Building2, Car, TrafficCone, Landmark, Shield, Database, ArrowRight, CheckCircle } from 'lucide-react'
import { solutions, whatWeDo } from './constants'

const Landing = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "Building2":
                return <Building2 className="w-12 h-12 text-sky-500" />
            case "Car":
                return <Car className="w-12 h-12 text-sky-500" />
            case "TrafficCone":
                return <TrafficCone className="w-12 h-12 text-sky-500" />
            case "Landmark":
                return <Landmark className="w-12 h-12 text-sky-500" />
            case "Shield":
                return <Shield className="w-12 h-12 text-sky-500" />
            case "Database":
                return <Database className="w-12 h-12 text-sky-500" />
            default:
                return null
        }
    }

    return (
        <div className="relative min-h-screen">
            <div className="relative z-10">
                <Navbar />
                <section id="home" className="relative h-screen flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
                        <div className="absolute inset-0 hero-gradient"></div>
                    </div>
                    <div className="relative text-center text-white px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl font-bold mb-6"
                        >
                            Manage Your Infrastructure<br />Assets Efficiently
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl mb-8"
                        >
                            Transform your infrastructure management with AI-powered <br /> analysis and real-time monitoring.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-x-4"
                        >
                            <button className="px-8 py-3 rounded-lg bg-sky-500 text-white hover:bg-primary-600">
                                Get Started Free
                            </button>
                            <button className="px-8 py-3 rounded-lg border border-white text-white hover:bg-white/10">
                                Request a Demo
                            </button>
                        </motion.div>
                    </div>
                    <div className="absolute bottom-8 w-full text-center">
                        <ArrowDown className="text-white text-4xl scroll-indicator mx-auto" />
                    </div>
                </section>

                {/* Solutions Section */}
                <section id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-20"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium mb-4">
                                Our Solutions
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Asset Management Solutions
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Comprehensive solutions powered by AI and advanced analytics for modern infrastructure management
                            </p>
                        </motion.div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    whileHover={{ y: -5 }}
                                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="mb-6">
                                        <div className="inline-block p-4 rounded-xl bg-sky-50 group-hover:bg-sky-100 transition-colors duration-300">
                                            <solution.icon />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors duration-300">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {solution.description}
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        {solution.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-gray-600">
                                                <ArrowRight className="w-4 h-4 mr-2 text-sky-500" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="text-sky-600 font-medium flex items-center group-hover:text-sky-700 transition-colors duration-300">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* What We Do Section */}
                <section id="what-we-do" className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-20"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium mb-4">
                                Our Expertise
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                What We Do
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Comprehensive solutions for infrastructure management and optimization
                            </p>
                        </motion.div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-12"
                        >
                            {whatWeDo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 }
                                    }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                                    <div className="relative p-8">
                                        <div className="mb-6">
                                            <div className="inline-block p-4 rounded-xl bg-sky-100">
                                                {getIcon(item.icon)}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                            {item.category}
                                        </h3>
                                        <ul className="space-y-4">
                                            {item.features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                    className="flex items-center text-gray-600"
                                                >
                                                    <CheckCircle className="w-5 h-5 mr-3 text-sky-500" />
                                                    <span>{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    )
}

export default Landing