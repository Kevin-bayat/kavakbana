import React from "react";

import {motion} from "framer-motion";
import './Loader.scss'



const Loader = () =>{
    const loaderVariants = {
        animationOne :{
            x: [50 , 0],
            y:[0 , -50] ,
            transition :{
                x: {
                    yoyo : Infinity,
                    duration : 0.5,

                },
                y: {
                    yoyo : Infinity,
                    duration : 0.25,

                },

            }
        }
    }
    return (

        <div  className='loader'>
            <motion.div animate='animationOne' variants={loaderVariants} className='animation' >
                KAVAK
            </motion.div>
        </div>

    )
}
export default Loader