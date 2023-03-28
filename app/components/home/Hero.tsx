import hero from "../../assets/hero.jpg"
import {
  motion
} from "framer-motion"

export default function Hero() {
  return (
    <>
    <div className="sect1 opacity-50 absolute w-full h-screen">
    </div>
    <div className="w-full sect2 h-screen overflow-hidden flex text-left">
    <div className="flex flex-col ml-8 font-black">
    <motion.h3 initial={ { opacity: 0, x: -50 }} whileInView={ { opacity: 1, x: 0 }} transition={ { duration: .5 }} className="text-7xl">
    Leonardo Kazuya
    </motion.h3>
    <motion.h3 initial={ { opacity: 0, y: -30 }} whileInView={ { opacity: 1, y: 0 }} transition={ { duration: 1 }} className="text-2xl">
    Full Stack UX / UI
    </motion.h3>
    </div>
    </div> < />
  )
}