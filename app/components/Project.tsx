import Image from 'next/image';
import { motion } from 'framer-motion';

// Mock project data with project-specific links
const projects = [
  {
    id: 1,
    title: 'Blog Website Sanity',
    description: 'Full responsive website and all the data in sanity database store.',
    imageUrl: '/blog.jpeg',
    link: 'https://blog-website-sanity-vhlq.vercel.app/', // E-commerce project link
  },
  {
    id: 1,
    title: 'vprimetech Website',
    description: 'A fully functional vprimetech platform.',
    imageUrl: '/new.jpeg',
    link: 'https://vprimetech.vercel.app/', // E-commerce project link
  },
  {
    id: 1,
    title: 'StyleHub Website',
    description: 'A fully functional StyleHub platform.',
    imageUrl: '/9.png',
    link: 'https://fahad-website-stylehub.vercel.app/', // E-commerce project link
  },
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully functional e-commerce platform.',
    imageUrl: '/ecommerce.png',
    link: 'https://ecommerce-website-online-grocery-store-fahad.vercel.app/', // E-commerce project link
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description: 'A fully functional e-commerce platform.',
    imageUrl: '/2.png',
    link: 'https://e-commerce-1-hazel.vercel.app/', // Mock Portfolio link
  },
  {
    id: 3,
    title: 'Next.js 14 CRUD Employee Data App',
    description: 'A CRUD app with Next.js 14 and Tailwind CSS.',
    imageUrl: '/3.png',
    link: 'https://employee-data-7hzs.vercel.app/', // Mock Social Media App link
  },
  {
    id: 3,
    title: 'Football Website Full Responsive',
    description: 'A fully responsive football website with Next.js 14.',
    imageUrl: '/4.png',
    link: 'https://hammer-fc-1.vercel.app/', // Mock Social Media App link
  },
  {
    id: 3,
    title: 'Portfolio Website Full Responsive ',
    description: 'A personal portfolio built using modern technologies for Next.js 14.',
    imageUrl: '/5.png',
    link: 'https://mfahadjbr.github.io/Portfolio/', // Mock Social Media App link
  },
  {
    id: 3,
    title: 'Personal Website Full Responsive ',
    description: 'A personal Website built using modern technologies for Next.js 14.',
    imageUrl: '/6.png',
    link: 'https://root-xran.vercel.app/', // Mock Social Media App link
  },
];

const ProjectsSection = ({ projectsRef }: { projectsRef: React.RefObject<HTMLElement> }) => {
  return (
    <section ref={projectsRef} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                placeholder="blur"
                blurDataURL={project.imageUrl}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors inline-block"
                >
                  Visit Website
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
