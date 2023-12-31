import { useRef } from "react";
import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yBg=useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
  return (
    <div 
        className="parallax"
        ref={ref}
        style={{
            background:
                type=="services" 
                    ? "linear-gradient(180deg, #1d1d1d, #000000)"
                    : "linear-gradient(180deg, #000000, #1d1d1d)",
        }}
    >
      <motion.h1 style={{y: yBg }}>
        {type=="services" ? "What We Do?" : "What We Did?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{
        backgroundImage: `url(${type==="services" ? "/planets.png" : "/sun.png"})`
      }}></motion.div>
      <motion.div style={{x: yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax
