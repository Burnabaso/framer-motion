import { AnimatePresence, animationControls, motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const backDrop={
    initial:{
        opacity: 0
    },
    animate:{
        opacity:1,
        transition:{

        }
    },
}
const modal = {
    initial:{
        y:"-100vh",
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            delay: 0.5
        }
    }
}
const Modal = ({showModel,setShowModel}) => {
  return (
    <AnimatePresence exitBeforeEnter>
        {showModel && (
            <motion.div
                className='backdrop'
                variants={backDrop}
                animate="animate"
                initial="initial"
                exit="initial"
            >
                <motion.div className='modal'
                    variants={modal}
                >
                    <p>Want another pizza?</p>
                    <Link to="/">
                        <button>
                            yes
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

        )}
    </AnimatePresence>
  )
}

export default Modal