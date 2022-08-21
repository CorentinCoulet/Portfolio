import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom';
import Accueil from "../pages/Accueil";
import Parcours from "../pages/Parcours";
import Competences from "../pages/Competences";
import Projets from "../pages/Projets";
import Contact from "../pages/Contact";

import { motion } from "framer-motion";
import {AnimatePresence} from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <motion.div 
    
        className="accueil"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ x: window.innerWidth}}
        transition={{ duration: 0.5 }}
    >
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Accueil />}></Route>
            <Route path="/parcours" element={<Parcours />}></Route>
            <Route path="/competences" element={<Competences />}></Route>
            <Route path="/projet" element={<Projets />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
    </AnimatePresence>
    </motion.div>
  );
}

export default AnimatedRoutes;