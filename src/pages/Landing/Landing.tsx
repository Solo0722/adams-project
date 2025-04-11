import Footer from '@/pages/Landing/Footer'
import Navbar from '@/pages/Landing/Navbar'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Building2, Car, TrafficCone, Landmark, Shield, Database, ArrowRight, CheckCircle } from 'lucide-react'
import { solutions, whatWeDo } from './constants'
import { useEffect, useRef } from 'react'

const Landing = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);


    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const fadeInLeft = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    }

    const scaleUp = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
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
                <motion.section
                    id="home"
                    className="px-4 sm:px-6 md:px-8 lg:px-16 relative h-screen flex items-center justify-center"
                    style={{ opacity }}
                >
                    <div className="absolute inset-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            ref={videoRef}
                            poster='/fallback.png'
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src="/background.mp4" type="video/mp4" />
                        </video>
                        {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" /> */}
                        <div className="absolute inset-0 hero-gradient"></div>
                    </div>
                    <motion.div
                        className="relative text-center text-white px-6 sm:px-8 md:px-12 lg:px-16"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-6xl font-bold mb-6"
                        >
                            Manage Your Infrastructure<br />Assets Efficiently
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl mb-8"
                        >
                            Transform your infrastructure management with AI-powered <br /> analysis and real-time monitoring.
                        </motion.p>
                        <motion.div
                            variants={fadeInUp}
                            className="space-x-4"
                        >
                            <button className="px-8 py-3 rounded-lg bg-sky-500 text-white hover:bg-primary-600">
                                Get Started Free
                            </button>
                            <button className="px-8 py-3 rounded-lg border border-white text-white hover:bg-white/10">
                                Request a Demo
                            </button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="absolute bottom-8 w-full text-center"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="show"
                    >
                        <ArrowDown className="text-white text-4xl scroll-indicator mx-auto" />
                    </motion.div>
                </motion.section>

                {/* Solutions Section */}
                <motion.section
                    id="solutions"
                    className="px-4 sm:px-6 md:px-8 lg:px-16 py-24 bg-gradient-to-b from-gray-50 to-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
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
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    variants={scaleUp}
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
                </motion.section>

                {/* What We Do Section */}
                <motion.section
                    id="services"
                    className="px-4 sm:px-6 md:px-8 lg:px-16 py-24 bg-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
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
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-12"
                        >
                            {whatWeDo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInLeft}
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
                </motion.section>

                {/* Insights Section */}
                <motion.section
                    id="insights"
                    className="px-4 sm:px-6 md:px-8 lg:px-16 py-24 bg-gradient-to-b from-gray-50 to-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium mb-4">
                                Data-driven Insights
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Advanced Analytics
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Comprehensive data analysis and visualization for infrastructure management
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {/* PCI Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="mb-6">
                                    <img src="/pavecap-video.gif" alt="Pavement Condition Index" className="w-full h-48 object-cover rounded-lg" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pavement Condition Index</h3>
                                <p className="text-gray-600 mb-6">
                                    Advanced analysis of pavement conditions using AI-powered image processing and machine learning algorithms.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-5 h-5 mr-3 text-sky-500" />
                                        <span>Automated condition assessment</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-5 h-5 mr-3 text-sky-500" />
                                        <span>Real-time data collection</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-5 h-5 mr-3 text-sky-500" />
                                        <span>Predictive maintenance planning</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* PDE Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="mb-6">
                                    <img src="/pde.gif" alt="Pavement Distress Evaluation" className="w-full h-48 object-cover rounded-lg" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pavement Distress Evaluation</h3>
                                <p className="text-gray-600 mb-6">
                                    Comprehensive evaluation of pavement distress types and severity using advanced image analysis.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-5 h-5 mr-3 text-sky-500" />
                                        <span>Detailed distress classification</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-5 h-5 mr-3 text-sky-500" />
                                        <span>Severity level assessment</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-5 h-5 mr-3 text-sky-500" />
                                        <span>Automated reporting</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* TSR Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="mb-6">
                                    <img src="/pavecap-video.gif" alt="Traffic Sign Retroreflectivity" className="w-full h-48 object-cover rounded-lg" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Traffic Sign Retroreflectivity</h3>
                                <p className="text-gray-600 mb-6">
                                    Precise measurement and analysis of traffic sign retroreflectivity for improved road safety.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-5 h-5 mr-3 text-sky-500" />
                                        <span>Accurate retroreflectivity measurement</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-5 h-5 mr-3 text-sky-500" />
                                        <span>Compliance monitoring</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="w-5 h-5 mr-3 text-sky-500" />
                                        <span>Maintenance prioritization</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Testimonials Section */}
                <motion.section
                    id="testimonials"
                    className="px-4 sm:px-6 md:px-8 lg:px-16 py-24 bg-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium mb-4">
                                Client Success Stories
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                What Our Clients Say
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Hear from organizations that have transformed their infrastructure management
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {[1, 2, 3].map((_, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                                            <span className="text-sky-600 font-bold text-xl">JD</span>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900">John Doe</h4>
                                            <p className="text-gray-600">Director of Infrastructure</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        "The AI-powered analysis has revolutionized our pavement management system. We've seen a 40% improvement in maintenance efficiency."
                                    </p>
                                    <div className="flex text-yellow-400">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    className="px-4 sm:px-6 md:px-8 lg:px-16 py-24 bg-gradient-to-r from-sky-500 to-sky-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Transform Your Infrastructure Management?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                                Join leading organizations in revolutionizing their infrastructure management with AI-powered solutions.
                            </p>
                            <div className="space-x-4">
                                <button className="px-8 py-3 rounded-lg bg-white text-sky-600 font-semibold hover:bg-white/90 transition-colors">
                                    Get Started Free
                                </button>
                                <button className="px-8 py-3 rounded-lg border border-white text-white hover:bg-white/10 transition-colors">
                                    Schedule a Demo
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section
                    id="contact"
                    className="px-4 sm:px-6 md:px-8 lg:px-16 py-24 bg-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium mb-4">
                                Get in Touch
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Contact Us
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Have questions? We're here to help. Reach out to our team for more information.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="px-8 py-3 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </motion.section>

                <Footer />
            </div>
        </div>
    )
}

export default Landing