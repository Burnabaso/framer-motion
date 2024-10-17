import React,{useEffect} from 'react';
import {motion} from "framer-motion"
const containerVarients = {
  initial:{
    opacity: 0,
    x:"200vw",
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      type:'spring',
      mass:0.4,
      damping:8,
      when:"beforeChildren",
      staggerChildren:0.4
    }
  },
  exit:{
    x:"-100vw",
    transition:{
      ease: 'easeInOut'
    }
  }
}
const childVarient = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
  }
}
const Order = ({ pizza ,setShowModel}) => {
  useEffect(()=>{
    setTimeout(() => {
      setShowModel(true)
    }, 5000);
  },[setShowModel])
  return (
    <motion.div className="container order" variants={containerVarients}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <motion.h2>Thank you for your order :)</motion.h2>
      <motion.p variants={childVarient}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVarient}> 
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;