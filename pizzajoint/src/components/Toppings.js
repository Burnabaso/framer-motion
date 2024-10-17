import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      delay:0.5,
      duration:0.5
    }
  },
  exit:{
    x:"-100vw",
    transition:{
      ease: 'easeInOut'
    }
  }
}
const buttonVariants = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px #FFFFFF",
    boxShadow: "0px 0px 8px #FFFFFF",
    transition: {
      duration:0.3,
      yoyo: Infinity,
    },
  },
};
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container" variants={containerVarients}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} 
              onClick={() => addTopping(topping)}
              whileHover={{
                color:'#f8e112',
                scale:1.3,
                originX:0
              }}
              transition={{type:'spring',stiffness:90}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="whileHover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;