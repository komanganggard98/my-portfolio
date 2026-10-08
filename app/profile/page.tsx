'use client';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { containerVariants, itemVariants } from '../../lib/animation';

const capabilities = ['Product-minded development', 'Frontend engineering', 'Full-stack applications', 'Thoughtful interaction design'];

export default function ProfilePage() {
  return (
    <>
      <motion.section 
        className="hero-grid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="hero-copy" variants={itemVariants}>
          <motion.p className="eyebrow" variants={itemVariants}>
            <span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS
          </motion.p>
          <motion.h1 variants={itemVariants}>
            Building digital<br />things with <em>purpose.</em>
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-intro">
            I’m Angga, a web developer turning thoughtful ideas into fast, useful, and lasting digital experiences.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-actions">
            <Link className="button button-dark" href="/portfolio">Explore my work <ArrowUpRight size={16} /></Link>
            <a className="text-link" href="mailto:hello@angga.dev">Let’s talk <ArrowUpRight size={15} /></a>
          </motion.div>
        </motion.div>
        
        <motion.aside 
          className="hero-card" 
          aria-label="Developer profile card" 
          variants={itemVariants}
          whileHover={{y:-5, transition: {duration: 0.3}}}
        >
          <div className="card-topline">
            <span>INDEPENDENT DEVELOPER</span>
            <span>01 / 03</span>
          </div>
          <div className="portrait-mark">A<span>.</span></div>
          <div className="card-caption">
            <div>
              <strong>Angga R.</strong>
              <span>Web Developer · Indonesia</span>
            </div>
            <span className="card-arrow">
              <ArrowUpRight size={18} />
              </span>
          </div>
          <div className="card-stamp">
            DESIGN<br />THINKING<br /><span>×</span><br />ENGINEERING
          </div>
        </motion.aside>
      </motion.section>

      <motion.section 
        className="intro-section section-rule"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        variants={itemVariants}
      >
        <motion.p variants={itemVariants} className="eyebrow">
          A LITTLE ABOUT ME <ArrowDownRight size={14} />
        </motion.p>

        <div className="intro-content">
          <motion.h2 variants={itemVariants}>
            Good work lives<br />at the intersection of<br /><em>clarity and craft.</em>
          </motion.h2>
          <motion.div variants={itemVariants} className="intro-body">
            <motion.p variants={itemVariants}>
              I work across the stack, with a special interest in making complex products feel simple. From the first sketch to the final line of code, I care about the details that make an experience feel effortless.
            </motion.p>
            <motion.p variants={itemVariants}>
              My toolkit includes React, Next.js, Laravel, and WordPress. More importantly, I bring curiosity, clear communication, and a steady focus on the people using what I build.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/experience" className="underlined-link">
              More about my experience <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="capabilities-section section-rule"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
      >
        <motion.p variants={itemVariants} className="eyebrow">WHAT I BRING</motion.p>
        <motion.div variants={containerVariants} className="capability-list">
          {capabilities.map((item, index) => {
            return(
              <motion.div 
                variants={itemVariants} 
                className="capability-row" 
                key={item} 
                aria-label={`Capability ${index + 1}: ${item}`}
                whileHover={{x:8, transition: {duration: 0.3, ease: 'easeOut'}}}
              >
                <span className="row-index">
                  0{index + 1}
                </span>
                <h3>{item}</h3>
                <motion.div
                  variants={{
                    initial: { y: 0, x: 0 },
                    hover: { y: -2, x: 2, transition: { duration: 0.3, ease: 'easeOut' } },
                  }}
                >
                  <ArrowUpRight className="row-icon" size={18} />
                </motion.div>
              </motion.div>
            )
          } )}
        </motion.div>
      </motion.section>

      <motion.section 
        className="contact-panel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2>Let’s make it<br /><em>matter.</em></h2>
        </motion.div>
        <motion.a 
          className="contact-circle" 
          href="mailto:hello@angga.dev" 
          aria-label="Email Angga"
          variants={itemVariants}
          whileHover={{
            scale:1.08,
            rotate:45,
            transition:{type:'spring', stiffness:300, damping:15}
          }}
          whileTap={{scale:0.95}}
        >
          <ArrowUpRight size={27} />
        </motion.a>
        <span className="contact-note">GOOD IDEAS START<br />WITH A CONVERSATION.</span>
      </motion.section>
    </>
  );
}
