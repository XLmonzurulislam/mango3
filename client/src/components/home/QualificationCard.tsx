
import { motion } from "framer-motion";

interface QualificationCardProps {
  title: string;
  period: string;
  description: string;
}

const QualificationCard = ({ title, period, description }: QualificationCardProps) => {
  return (
    <motion.div 
      className="bg-[#1c1c1c] rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">{period}</p>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default QualificationCard;
