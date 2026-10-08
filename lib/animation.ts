import { Variants } from "framer-motion";

// Variasi animasi untuk container utama (mengatur delay antar elemen anak)
const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // jeda animasi antar anak elemen
      delayChildren: 0.1,
    },
  },
};

// Variasi animasi untuk masing-masing elemen anak
const itemVariants:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1.0] as const, // smooth cubic-bezier
    },
  },
};

// Animasi khusus untuk panah (bergerak perlahan menunjuk ke bawah)
const arrowVariants: Variants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 3,
    y: 3,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

const iconVariants: Variants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 4,
    y: -4,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

export { containerVariants, itemVariants, arrowVariants, iconVariants };