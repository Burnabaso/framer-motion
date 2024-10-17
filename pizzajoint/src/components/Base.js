import React from 'react';
import { Link } from 'react-router-dom';
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

const nextVariants = {
  initial:{x:'-250vw'},
  animate:{
    x:0,
    transition:{type:'spring',stiffness:70}
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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVarients}
      initial="initial"
      animate="animate"
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{
                color:'#f8e112',
                scale:1.3,
                originX:0
              }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover="whileHover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;