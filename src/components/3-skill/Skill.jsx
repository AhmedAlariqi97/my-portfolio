import React from 'react'
import './skill.css'
import { mySkills } from './mySkills'
import { AnimatePresence, motion } from 'framer-motion'

const Skill = () => {
  return (
    <section className='skill'>
        <div className='head'>
            <h2 className='title'>Skills</h2>
        </div>
        <div className='body'>
            <AnimatePresence>
                {mySkills.map((item) => {
                return (
                    <motion.article
                    layout
                    initial={{ transform: "scale(0)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{ type: "spring", damping: 7, stiffness: 50}}
                    
                    key={item.imgPath} className='card'>
                   
                    <div className='box' style={{ width: "277px" }}>
                        <h2 className='title'>{item.title}</h2>
                    </div>
                    </motion.article>
                )
                })}
            </AnimatePresence>
        </div>
    </section>
  )
}

export default Skill