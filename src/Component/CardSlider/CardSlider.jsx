// import React from 'react'

// const CardSlider = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default CardSlider
// import {sliderimg1} from './assets/DY25_April_and_May_A_A-banner-3000x2000.jpg'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, text: "Card 1", color: "https://accountantonline.co.za/wp-content/uploads/2023/08/how-to-become-a-chartered-accountant-in-south-africa-10-facts-you-cant-miss-online-accountant.jpg ", border:"border-[red]" },
  { id: 2, text: "Card 2", color: "https://theivyag.com/wp-content/uploads/2021/04/Retirement-Planning.svg" ,border:"border-[green]"},
  { id: 3, text: "Card 3", color: "https://media.licdn.com/dms/image/v2/C4D12AQGFELCaHObAKQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1546352591438?e=2147483647&v=beta&t=p1JMbQNO59aKXIkT5mJxm_JZ1AhNPVyh-LwN35_L-Z0"  ,border:"border-[blue]"},
  { id: 4, text: "Card 4", color: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/10000053/B-Com-Accounting-and-Finance.png"  ,border:"border-[pink]"},
  { id: 5, text: "Card 5", color: "https://regent.ac.za/wp-content/uploads/2020/06/Chartered_Accounting.jpg.webp"  ,border:"border-[blue]"},
  { id: 6 ,text : "Card 6", color: "https://static.vecteezy.com/system/resources/thumbnails/002/223/432/small_2x/banner-design-of-accounting-education-and-financial-literacy-to-improve-economic-growth-illustration-concept-can-be-use-for-landing-page-template-ui-web-mobile-app-poster-banner-website-free-vector.jpg"  ,border:"border-[blue]"},
];

export default function CardSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto    flex h-120 max-sm:h-70  items-center justify-center relative  "> 
    
    <AnimatePresence><motion.h1 
    key={cards[current].id}
    initial={{ x: "75%", opacity: 0 }}
          animate={{ x: 60,  opacity: 1 }}
          exit={{ x: "-70%", opacity: 0 , }}
          transition={{ duration: 0.8 }}

    className="absolute top-100 max-sm:top-60 container "><hr  className={`container border-4 rounded  w-80 ${cards[current].border} `}/></motion.h1></AnimatePresence>
      <AnimatePresence>
        <motion.div
          key={cards[current].id}
          initial={{ x: "75%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-70%", opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute top-10    mx-auto  sliderShadow flex items-center justify-center text-white text-2xl shadow-2xl w-[600px] h-[300px] max-md:w-[500px] max-md:h-[250px] max-sm:w-[300px] max-sm:h-[150px] font-bold `}
        >
            
          <img width='600' height='300' className="w-[600px] h-[300px] max-md:w-[500px] max-md:h-[250px] max-sm:w-[300px] max-sm:h-[150px]" src={cards[current].color} alt="" />
        </motion.div>
      </AnimatePresence>
      
    </div>
  );
}
