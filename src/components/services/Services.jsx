// import Counter from "./Counter";
// import "./services.css";
// import { motion, useInView } from "motion/react";
// import { useRef, useState } from "react";

// const textVariants = {
//   initial: {
//     x: -100,
//     y: -100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const listVariants = {
//   initial: {
//     x: -100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.5,
//     },
//   },
// };

// const services = [
//   {
//     id: 1,
//     img: "/service1.png",
//     title: "Web Development",
//     counter: 35,
//   },
//   {
//     id: 2,
//     img: "/service2.png",
//     title: "Product Design",
//     counter: 23,
//   },
//   {
//     id: 3,
//     img: "/service3.png",
//     title: "Branding",
//     counter: 46,
//   },
// ];


// const Services = () => {
//   const [currentServiceId, setCurrentServiceId] = useState(1);
//   const ref = useRef();
//   const isInView = useInView(ref, { margin: "-200px" });
//   return (
//     <div className="services" id="services" ref={ref}>
//       <div className="sSection left">
//         <motion.h1
//           variants={textVariants}
//           animate={isInView ? "animate" : "initial"}
//           className="sTitle"
//         >
//           How do I help?
//         </motion.h1>
//         <motion.div
//           variants={listVariants}
//           animate={isInView ? "animate" : "initial"}
//           className="serviceList"
//         >
//           {services.map((service) => (
//             <motion.div
//               variants={listVariants}
//               className="service"
//               key={service.id}
//               onClick={() => setCurrentServiceId(service.id)}
//             >
//               <div className="serviceIcon">
//                 <img src={service.img} alt="" />
//               </div>
//               <div className="serviceInfo">
//                 <h2>{service.title}</h2>
//                 <h3>{service.counter} Projects</h3>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//         <div className="counterList">
//           <Counter from={0} to={104} text="Projects Completed" />
//           <Counter from={0} to={72} text="Happy Clients" />
//         </div>
//       </div>
//       <div className="sSection right">
//         {currentServiceId === 1 ? (
//            'computer Model'
//         ) : currentServiceId === 2 ? (
//           // <MugModelContainer /> 'null'
//           "null"
//         ) : (
//           // <ConsoleModelContainer />
//           "null"
//         )}
//       </div>
//     </div>
//   );
// };

// export default Services;

import Counter from "./Counter";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const textVariants = {
  initial: { x: -100, y: -100, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
};

const listVariants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
};

const services = [
  {
    id: 1,
    img: "/ecommerceImage.png",
    title: "E-commerce Development",
    counter: 50, 
  },
  {
    id: 2,
    img: "/NGOimage.jpg",
    title: "NGO & Charity Websites",
    counter: 10, 
  },
  {
    id: 3,
    img: "/businesImage.png",
    title: "Small Business Solutions",
    counter: 15, 
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services" id="services" ref={ref}>
      <div className="sSection left">
        <motion.h1 variants={textVariants} animate={isInView ? "animate" : "initial"} className="sTitle">
          How do I help?
        </motion.h1>
        <motion.div variants={listVariants} animate={isInView ? "animate" : "initial"} className="serviceList">
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={75} text="Projects Completed" />
          <Counter from={0} to={40} text="Happy Clients" />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <img src="/ecommerceImage.png" alt="E-commerce Model" className="service-image" />
        ) : currentServiceId === 2 ? (
          <img src="/NGOimage.jpg" alt="NGO Model" className="service-image" />
        ) : (
          <img src="/businesImage.png" alt="Business Model" className="service-image" />
        )}
      </div>

    </div>
  );
};

export default Services;
