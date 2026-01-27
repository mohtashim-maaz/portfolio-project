import React from 'react'
import { motion } from 'framer-motion'
import Project from '../components/Project'
import mental_health_project from "../assets/projects/mental_health.png";
import shopify_project from "../assets/projects/shopify.png";
import employee_management_project from "../assets/projects/employee_management.png";
import Particle from '../components/Particle';

const projectData = [
  {
    title: "Mental Health Consulting",
    desc: "A dedicated platform for teenagers seeking professional guidance on mental health, featuring resource integration and consultation flows.",
    image: mental_health_project,
    link: "https://mental-health-therapy.netlify.app/"
  },
  {
    title: "Shopify Cloane",
    desc: "Premium e-commerce experience featuring dynamic filtering, cart management, and a refined UI for high-end fashion browsing.",
    image: shopify_project,
    link: "https://github.com/mohtashim21/shopify"
  },
  {
    title: "Employee Mgmt System",
    desc: "Full-stack dashboard for efficient employee tracking, data visualization, and streamlined administrative operations.",
    image: employee_management_project,
    link: "https://employee-management-react-redux.netlify.app/"
  }
];

const ProjectsPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <Particle />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-black mb-4">
            Creative <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A selection of projects where I blend technical precision with creative design to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Project {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;