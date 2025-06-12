'use client';

import { motion, AnimatePresence } from 'framer-motion';

export function useMotion() {
  return {
    motion,
    AnimatePresence,
    m: {
      div: motion.div,
      span: motion.span,
      h1: motion.h1,
      p: motion.p,
      a: motion.a,
      button: motion.button,
      section: motion.section,
      // Add other motion components as needed
    }
  };
}
