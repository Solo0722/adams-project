import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        // TODO: Implement Google OAuth
        console.log('Google login clicked')
        navigate('/app/dashboard')

    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                        <p className="text-gray-600">Sign in to your account to continue</p>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200 mb-6"
                    >
                        <FcGoogle className="w-6 h-6" />
                        <span className="font-medium">Continue with Google</span>
                    </button>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-colors"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-colors"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            <Link to="/forgot-password" className="text-sm text-sky-600 hover:text-sky-500">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-sky-600 text-white py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors duration-200"
                        >
                            Sign in
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/auth/signup" className="text-sky-600 hover:text-sky-500 font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Login