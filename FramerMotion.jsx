import { motion } from "framer-motion";  

function MyComponent() {  
  return (  
    <motion.div  
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}  
      transition={{ duration: 0.5 }}  
    >  
      Hello, Framer Motion!  
    </motion.div>  
  );  
} //  or


import { motion } from "framer-motion";  

const containerVariants = {  
  hidden: { opacity: 0, x: -100 },  
  visible: {  
    opacity: 1,  
    x: 0,  
    transition: {  
      delay: 0.5,  
      duration: 0.8,  
    },  
  },  
};  

function MyComponent() {  
  return (  
    <motion.div  
      variants={containerVariants}  
      initial="hidden"  
      animate="visible"  
    >  
      Content to animate  
    </motion.div>  
  );  
}  
