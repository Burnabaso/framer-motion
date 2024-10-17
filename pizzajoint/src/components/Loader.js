import React from 'react'
import { motion, useCycle } from 'framer-motion'

const loader={
    animate1:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:"easeOut"
            },
        }
    },
    animate2:{
        y:[0,-40],
        x:0,
        transition:{
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:"easeOut"
            }
        }
    }
}
const Loader = () => {
    const [animation,cycleAnimation]= useCycle("animate1","animate2");
    return (
        <>
            <motion.div className='loader' variants={loader} animate={animation}>

            </motion.div>
            <div onClick={()=>cycleAnimation()}>Cycle</div>
        </>
    )
}

export default Loader