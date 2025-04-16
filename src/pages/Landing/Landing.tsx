import { GridPattern } from '@/components/magicui/grid-pattern'
import { Button } from '@/components/ui/button'
import Footer from '@/pages/Landing/Footer'
import Navbar from '@/pages/Landing/Navbar'

const Landing = () => {
    return (
        <>
            <Navbar />
            <main>
                <section id="home" className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-24 text-center relative  flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center ">
                        <GridPattern
                            width={50}
                            height={50}
                            x={-20}
                            y={-20}
                            className="[mask-image:radial-gradient(circle_at_center,white_30%,transparent_70%)] text-green-600/5"
                        />
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">Trusted by asset managers</div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
                            One tool to <span className="text-blue-400">manage</span> infrastructure assets and your{" "}
                            <span className="text-blue-400">team</span>
                        </h1>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            AdAMS helps asset managers work faster, smarter and more efficiently, delivering the visibility and
                            data-driven insights to mitigate risk and ensure compliance.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <Button className="bg-blue-400 hover:bg-blue-700 text-white">Start For Free</Button>
                            <Button variant="outline" className="border-gray-300">
                                Get a Demo
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16 text-center">
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">Solutions</div>
                    <h2 className="text-3xl font-bold mb-4">
                        Advanced infrastructure asset management
                        <br />
                        solutions for your organization
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        Maximize your team's productivity and security with our affordable, user-friendly asset management system.
                    </p>
                </section>

                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16">
                    <div className='bg-gray-900 text-gray-300 rounded-2xl p-16'>
                        <div className="container mx-auto px-4 text-center">
                            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">Integrations</div>
                            <h2 className="text-3xl font-bold mb-6">Don't replace. Integrate.</h2>
                            <p className="max-w-2xl mx-auto mb-12 text-gray-300">
                                We understand the hassle of replacing the tools you're used to in your process. That's why we integrate
                                more tools you use in your day-to-day work.
                            </p>

                            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">All integrations</div>

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
                    <div className="grid grid-cols-3 gap-4  text-center rounded-2xl bg-accent py-16">
                        <div>
                            <div className="text-3xl font-bold mb-2">2021</div>
                            <div className="text-sm text-gray-500">Founded</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">50K+</div>
                            <div className="text-sm text-gray-500">Assets Managed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">1k+</div>
                            <div className="text-sm text-gray-500">Company Partners</div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Landing