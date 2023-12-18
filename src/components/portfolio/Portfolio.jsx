import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"Quizzed Web App",
        img:"https://i.imgur.com/NcEvE55.png",
        desc:"Quizzed is created for anyone with a curios mind. It's an ideal tool for self-assessment and expanding your knowledge horizons.",
        link:"https://quizzed-six.vercel.app"
    },
    {
        id:2,
        title:"AI Chatbot",
        img:"https://i.imgur.com/125IPNY.png",
        desc:"Browse through an extensive array of products ranging from trendy fashion to cutting-edge electronics, all just a click away.",
    },
    {
        id:3,
        title:"Next.js App",
        img:"https://i.imgur.com/zH4JdXK.jpg",
        desc:"Browse through an extensive array of products ranging from trendy fashion to cutting-edge electronics, all just a click away.",
    },
    {
        id:4,
        title:"HTML5 Website",
        img:"https://i.imgur.com/raPABlL.png",
        desc:"Browse through an extensive array of products ranging from trendy fashion to cutting-edge electronics, all just a click away.",
    },
];

const Single = ({item}) =>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    const openLink = () => {
        window.open(item.link, "_blank"); // Open link in a new tab
        // or use window.location.href = item.link; to redirect in the same tab
    };

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt=""/>
                    </div>
                    
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={openLink}>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref= useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfolio;