import { Routes, Route } from "react-router-dom";
import { motion } from 'framer-motion';
import './index.css'
import Nav from './components/Nav'
import Hero from './pages/Hero'
import Destination from "./pages/Destination";

function HomePage() {
  return (
    <>
      <div className="scroll-smooth">
      <Hero />
      <Destination />
      </div>
    </>
  );
}

function App() {
  return (
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </motion.div>
  )
}

export default App
