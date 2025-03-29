import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection";
import { Code, GraduationCap, Briefcase } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

export const AboutSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="about" className="py-20 bg-dark-200">
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-2">Something About Myself</p>
          <h2 className="text-4xl font-bold">About <span className="text-primary">Me</span></h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="rounded-full overflow-hidden w-[350px] h-[350px] bg-gradient-to-br from-primary/80 to-primary">
                <img 
                  src="/profile.jpg" 
                  alt="Gilbert Hutapea" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-white">Gilbert Hutapea</h2>
            <p className="text-primary text-xl mb-4">A Front-end Developer</p>
            <p className="text-gray-300 mb-6">
              As a MERN stack developer, I am committed to building high-quality web applications that
              meet the needs of my clients. With years of experience in full-stack web development, I
              specialize in using React.js, Next.js, Typescript, MongoDB, Express.js, and Node.js to create
              scalable and robust web applications.
            </p>
            <p className="text-gray-300 mb-8">
              My passion for solving complex problems and creating innovative solutions drives me to
              stay up-to-date with the latest technologies and trends in the industry.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300"><span className="text-primary">Name: </span>Gilbert Hutapea</p>
                <p className="text-gray-300"><span className="text-primary">Phone: </span>+62 823 6148 4992</p>
              </div>
              <div>
                <p className="text-gray-300"><span className="text-primary">Email: </span>berthutapea@gmail.com</p>
                <p className="text-gray-300"><span className="text-primary">Address: </span>Karawang, Jawa Barat, Indonesia</p>
              </div>
            </div>

            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded mt-6 flex items-center gap-2">
              MY RESUME
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;