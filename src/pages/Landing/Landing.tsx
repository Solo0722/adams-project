import { GridPattern } from '@/components/magicui/grid-pattern'
import { Button } from '@/components/ui/button'
import Footer from '@/pages/Landing/Footer'
import Navbar from '@/pages/Landing/Navbar'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Trophy, Users, Building2, Calendar, BarChart, Factory, Cog, Hammer, Landmark, Wrench, Mail, MessageSquare, Phone, ArrowRight, Briefcase } from 'lucide-react'
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { solutions } from '@/pages/Landing/constants'

const Landing = () => {
    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    const floatingAnimation = {
        initial: { y: 0, opacity: 0.6 },
        animate: {
            y: [-10, 10, -10],
            opacity: [0.6, 0.8, 0.6],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    const rotateAnimation = {
        initial: { rotate: 0, opacity: 0.6 },
        animate: {
            rotate: 360,
            opacity: [0.6, 0.8, 0.6],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
            }
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <section id="home" className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-24 text-center relative flex flex-col items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <GridPattern
                            width={50}
                            height={50}
                            x={-20}
                            y={-20}
                            className="[mask-image:radial-gradient(circle_at_center,white_30%,transparent_70%)] text-green-600/5"
                        />
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
                        <Landmark className="w-6 h-6 text-green-400" />
                    </motion.div>

                    <motion.div
                        className="absolute left-[25%] bottom-[30%]"
                        variants={rotateAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Cog className="w-10 h-10 text-gray-400" />
                    </motion.div>

                    <motion.div
                        className="absolute right-[25%] bottom-[35%]"
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Factory className="w-8 h-8 text-purple-400" />
                    </motion.div>

                    <motion.div
                        className="absolute left-[30%] top-[40%]"
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Hammer className="w-7 h-7 text-orange-400" />
                    </motion.div>

                    <motion.div
                        className="absolute right-[30%] top-[45%]"
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <Wrench className="w-9 h-9 text-yellow-400" />
                    </motion.div>

                    <motion.div
                        className="max-w-3xl mx-auto relative z-10"
                        variants={containerAnimation}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={itemAnimation}>
                            <Badge variant="secondary" className="mb-4">
                                <Trophy className="w-3 h-3" />
                                Trusted by asset managers
                            </Badge>
                        </motion.div>
                        <motion.h1 variants={itemAnimation} className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
                            One tool to <span className="text-blue-400">manage</span> infrastructure assets and your{" "}
                            <span className="text-blue-400">team</span>
                        </motion.h1>
                        <motion.p variants={itemAnimation} className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            AdAMS helps asset managers work faster, smarter and more efficiently, delivering the visibility and
                            data-driven insights to mitigate risk and ensure compliance.
                        </motion.p>
                        <motion.div variants={itemAnimation} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <Button className="bg-blue-400 hover:bg-blue-700 text-white">Start For Free</Button>
                            <Button variant="outline" className="border-gray-300">
                                Get a Demo
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div className='pt-5' variants={containerAnimation} initial="initial" animate="animate">
                        <HeroVideoDialog
                            className="block w-full max-w-3xl mx-auto "
                            animationStyle="from-center"
                            videoSrc="/background.mp4"
                            thumbnailSrc="/fallback.png"
                            thumbnailAlt="AdAMS video thumbnail"

                        />
                    </motion.div>

                </section>

                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16 text-center">
                    <Badge variant="secondary" className="mb-4">
                        <Building2 className="w-3 h-3" />
                        Solutions
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">
                        Advanced infrastructure asset management
                        <br />
                        solutions for your organization
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        Maximize your team's productivity and security with our affordable, user-friendly asset management system.
                    </p>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
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
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16">
                    <div className='bg-gray-900 text-gray-300 rounded-2xl p-16'>
                        <div className="container mx-auto px-4 text-center">
                            <Badge variant="outline" className="mb-4 text-gray-400 border-gray-700">
                                <Users className="w-3 h-3" />
                                Integrations
                            </Badge>
                            <h2 className="text-3xl font-bold mb-6">Don't replace. Integrate.</h2>
                            <p className="max-w-2xl mx-auto mb-12 text-gray-300">
                                We understand the hassle of replacing the tools you're used to in your process. That's why we integrate
                                more tools you use in your day-to-day work.
                            </p>

                            <Badge variant="outline" className="mb-4 text-gray-400 border-gray-700">
                                <BarChart className="w-3 h-3" />
                                All integrations
                            </Badge>

                            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-4 max-w-4xl mx-auto mb-8">
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <div key={i} className="bg-white rounded-lg p-4 flex items-center justify-center">
                                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-3xl font-serif mb-8">"</div>
                        <blockquote className="text-xl md:text-2xl font-medium mb-8">
                            "AdAMS is helping our company to decrease operational expenses and turnaround time, while increasing the
                            compliance, resource allocation and effectiveness of our asset management."
                        </blockquote>
                        <div className="flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center overflow-hidden mr-4">
                                <img
                                    src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                                    alt="Testimonial avatar"
                                    width={48}
                                    height={48}
                                    className="bg-cover bg-center object-cover rounded-full"
                                />
                            </div>
                            <div className="text-left">
                                <div className="font-medium">Darlene Robertson</div>
                                <div className="text-sm text-gray-500">Head of Buildings at MetroCity</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16">
                    <div className="grid grid-cols-3 gap-4 text-center rounded-2xl bg-muted py-16">
                        <div>
                            <div className="text-3xl font-bold mb-2">2021</div>
                            <Badge variant="secondary" className="inline-flex">
                                <Calendar className="w-3 h-3" />
                                Founded
                            </Badge>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">50K+</div>
                            <Badge variant="secondary" className="inline-flex">
                                <Building2 className="w-3 h-3" />
                                Assets Managed
                            </Badge>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">1k+</div>
                            <Badge variant="secondary" className="inline-flex">
                                <Users className="w-3 h-3" />
                                Company Partners
                            </Badge>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16">
                    <div className="text-center mb-12">
                        <Badge variant="secondary" className="mb-4">
                            <MessageSquare className="w-3 h-3" />
                            FAQ
                        </Badge>
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Find answers to common questions about AdAMS and our infrastructure asset management solutions.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is AdAMS?</AccordionTrigger>
                                <AccordionContent>
                                    AdAMS is a comprehensive infrastructure asset management system designed to help organizations efficiently manage, monitor, and maintain their infrastructure assets. It provides tools for asset tracking, maintenance scheduling, compliance monitoring, and data-driven decision making.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>How does AdAMS help with compliance?</AccordionTrigger>
                                <AccordionContent>
                                    AdAMS ensures compliance by providing real-time monitoring, automated reporting, and comprehensive audit trails. It helps track maintenance schedules, regulatory requirements, and asset performance metrics, making it easier to meet industry standards and regulations.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Can I integrate AdAMS with existing systems?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, AdAMS is designed to integrate seamlessly with many common business tools and systems. We support integration with various asset management, maintenance, and enterprise resource planning (ERP) systems to ensure a smooth workflow.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>What type of support do you offer?</AccordionTrigger>
                                <AccordionContent>
                                    We provide 24/7 technical support, comprehensive documentation, regular training sessions, and dedicated account managers for enterprise clients. Our support team is always ready to help you make the most of AdAMS.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* Contact Us Section */}
                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-900 text-gray-300 rounded-2xl p-16">
                        <div>
                            <Badge variant="outline" className="mb-4 text-gray-400 border-gray-700">
                                <Mail className="w-3 h-3" />
                                Contact Us
                            </Badge>
                            <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
                            <p className="text-gray-400 mb-8">
                                Have questions about AdAMS? Our team is here to help. Contact us for more information about our solutions.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Phone className="w-5 h-5" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Mail className="w-5 h-5" />
                                    <span>contact@adams-project.com</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Briefcase className="w-5 h-5" />
                                    <span>Monday - Friday, 9:00 AM - 6:00 PM EST</span>
                                </div>
                            </div>
                        </div>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white" />
                            <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"></textarea>
                            <Button className="w-full bg-blue-400 hover:bg-blue-700 text-white">Send Message</Button>
                        </form>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-24  text-center bg-muted">
                    <motion.div
                        className="max-w-3xl  container mx-auto "
                        variants={containerAnimation}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={itemAnimation}>
                            <Badge variant="secondary" className="mb-4">
                                <ArrowRight className="w-3 h-3" />
                                Get Started
                            </Badge>
                        </motion.div>
                        <motion.h2 variants={itemAnimation} className="text-4xl font-bold mb-4">
                            Ready to transform your asset management?
                        </motion.h2>
                        <motion.p variants={itemAnimation} className="text-gray-600 mb-8">
                            Join thousands of organizations that trust AdAMS for their infrastructure asset management needs.
                        </motion.p>
                        <motion.div variants={itemAnimation} className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="bg-blue-400 hover:bg-blue-700 text-white">Start Your Free Trial</Button>
                            <Button variant="outline" className="border-gray-300">Schedule a Demo</Button>
                        </motion.div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Landing