
import AboutSection from "@/components/home/AboutSection";
import QualificationCard from "@/components/home/QualificationCard";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-20">
      <AboutSection />
      <section className="py-20 bg-dark-300">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">My <span className="text-primary">Qualification</span></h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            <QualificationCard
              title="Diploma in CSE"
              period="2021 - 2025"
              description="I am currently studying in Informatics Engineering (4th Semester) at Sekolah Tinggi Teknologi Informatik Sony Sugema (Karawang, Jawa Barat, Indonesia)."
            />
            <QualificationCard
              title="React Developer"
              period="2023"
              description="I have successfully completed the React Web Developer Expert from Dicoding."
            />
            <QualificationCard
              title="SSC"
              period="2018 - 2021"
              description="I have passed the Senior Secondary Certificate (SSC) with the highest result GPA: 85"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
