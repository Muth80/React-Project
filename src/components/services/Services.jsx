import "./services.scss";
import {motion} from "framer-motion";



const Services = () => {
  return (
    <motion.div className="services">
     <motion.div className="textContainer">
        <p>I focus on helping your brand grow
            <br /> and move forward</p>
        <hr/>
     </motion.div> 
     <motion.div className="titleContainer">
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
            </h1>
        </div>
        <div className="title">
            <h1>
                <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business.
            </h1>
        </div>
        
     </motion.div>
     <motion.div className="listContainer">
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>AI Chatbot</h2>
            <p>
            Unlock the full potential of your business with Our tailored AI Business Assistant Chatbots. 
            Experience increased efficiency, enhanced customer satisfaction, and accelerated growth. 
            Let our AI-powered assistant become your trusted business companion, working tirelessly 
            to support your business objectives.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>AI Software Dev</h2>
            <p>
            Unlock the full potential of your business with Our tailored AI Business Assistant Chatbots. 
            Experience increased efficiency, enhanced customer satisfaction, and accelerated growth. 
            Let our AI-powered assistant become your trusted business companion, working tirelessly 
            to support your business objectives.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Web/App Dev</h2>
            <p>
            Unlock the full potential of your business with Our tailored AI Business Assistant Chatbots. 
            Experience increased efficiency, enhanced customer satisfaction, and accelerated growth. 
            Let our AI-powered assistant become your trusted business companion, working tirelessly 
            to support your business objectives.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Websites</h2>
            <p>
            Unlock the full potential of your business with Our tailored AI Business Assistant Chatbots. 
            Experience increased efficiency, enhanced customer satisfaction, and accelerated growth. 
            Let our AI-powered assistant become your trusted business companion, working tirelessly 
            to support your business objectives.
            </p>
            <button>Go</button>
        </motion.div>
     </motion.div>
    </motion.div>
  )
}

export default Services
