import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import Particle from '../components/Particle'
import resumePDF from '../assets/Mohtashim_Maaz_Full_Stack_Developer_Resume (4)_compressed.pdf'

const ResumePage = () => {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = resumePDF
        link.download = 'Mohtashim_Maaz_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <Particle />
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-7xl font-black mb-5">
                        My <span className="text-gradient">Resume</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Download or view my resume below
                    </p>

                    {/* Download Button */}
                    <motion.button
                        onClick={handleDownload}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
                    >
                        <ArrowDownTrayIcon className="w-6 h-6" />
                        Download Resume
                    </motion.button>
                </motion.div>

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full max-w-5xl mx-auto"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
                        {/* PDF Embed */}
                        <div className="w-full" style={{ height: '80vh', minHeight: '600px' }}>
                            <iframe
                                src={resumePDF}
                                className="w-full h-full"
                                title="Resume PDF"
                                style={{ border: 'none' }}
                            />
                        </div>

                        {/* Fallback for browsers that don't support PDF viewing */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 opacity-0 hover:opacity-0 pointer-events-none">
                            <p className="text-gray-400">
                                If the PDF doesn't display, please{' '}
                                <button
                                    onClick={handleDownload}
                                    className="text-purple-400 hover:text-purple-300 underline pointer-events-auto"
                                >
                                    download it here
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Decorative gradient blur */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
                </motion.div>
            </div>
        </main>
    )
}

export default ResumePage
