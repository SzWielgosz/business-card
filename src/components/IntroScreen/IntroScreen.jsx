import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import styles from './IntroScreen.module.css'

export default function IntroScreen(){
    const[isShown, setIsShown] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

        return(
        <AnimatePresence>
        {isShown && (
        <motion.div
          key="intro"
          className={styles.intro}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            “The expert in anything was once a beginner.” – Helen Hayes
          </motion.h1>
        </motion.div>
        )}
        </AnimatePresence>
        )

}