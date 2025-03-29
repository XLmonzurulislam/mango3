
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection";
import { Book, Code2, GraduationCap } from "lucide-react";

export const QualificationSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const qualifications = [
    {
      title: "Diploma in CSE",
      period: "2021 - 2025",
      description: "I am currently studying in Informatics Engineering (5th Semester) at Sekolah Tinggi Teknologi Informatik Sony Sugema, Karawang, Jawa Barat, Indonesia.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "React Developer",
      period: "2023",
      description: "I have successfully completed the React Web Developer Expert from Dicoding.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "SSC",
      period: "2018 - 2021",
      description: "I have passed the Senior Secondary Certificate (SSC) with the highest result GPA: 85",
      icon: <Book className="w-6 h-6" />
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-dark-200">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">My <span className="text-primary">Qualification</span></h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="/qualification.svg" 
              alt="Qualification illustration" 
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div className="md:w-1/2">
            <div className="space-y-6">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1c1c1c] rounded-lg p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-primary">
                      {qual.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{qual.title}</h3>
                  </div>
                  <p className="text-primary text-sm mb-2">{qual.period}</p>
                  <p className="text-gray-400">{qual.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default QualificationSection;
