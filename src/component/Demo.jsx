import React from 'react'
import { motion } from "framer-motion"

const Demo = () => {
    return <>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // animation target state
            transition={{ duration: 2 }} // increased duration for the transition
            viewport={{ once: true }}
        >
           
        </motion.div>
    </>
}

export default Demo