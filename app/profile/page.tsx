'use client';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../lib/animation';

const capabilities = [
  {
    title: 'Full-Stack Web Development',
    description: 'Building end-to-end web applications using Laravel, React, and Next.js with clean, maintainable architecture.' 
  }, {
    title: 'Modern Frontend & Performance',
    description: 'Crafting responsive, accessible, and fast user interfaces using Tailwind CSS and TypeScript with a heavy focus on UX details.'
  }, {
    title: 'CMS & Tailored Web Solutions',
    description: 'Developing custom WordPress themes and headless solutions tailored for scalability, marketing efficiency, and client autonomy.'
  }, {
    title: 'Technical Ownership & Integration',
    description: 'Designing APIs, managing databases (PostgreSQL/MySQL), and optimizing web performance for maximum output.'
  }];

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
          <motion.div className="eyebrow" variants={itemVariants}>
            <div className="status-arrow" >
              <ArrowUpRight size={12} />
            </div> 
            OPEN FOR OPPORTUNITIES
          </motion.div>
          <motion.h1 variants={itemVariants}>
            Web developer building products people <em> love to use.</em>
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-intro">
            Hi, I’m Angga. A full-stack web developer crafting fast, scalable, and intuitive digital solutions. I bridge the gap between solid code and great user experience.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-actions">
            <Link className="button button-dark" href="/portfolio">Explore my work <ArrowUpRight size={16} /></Link>
            <a className="text-link" href="mailto:angga.rahayudiputra98@gmail.com">Let’s talk <ArrowUpRight size={15} /></a>
          </motion.div>
        </motion.div>
        
        <motion.aside 
          className="hero-card" 
          aria-label="Developer profile card" 
          variants={itemVariants}
          whileHover={{y:-5, transition: {duration: 0.3}}}
        >
          <div className="portrait-mark">A<span>.</span></div>
          <div className="card-caption">
            <div>
              <strong>Angga Rahayudiputra</strong>
              <span>Web Developer · Indonesia</span>
            </div>
            <span className="card-arrow">
              <ArrowUpRight size={18} />
              </span>
          </div>
        </motion.aside>
      </motion.section>

      <motion.section 
        className="intro-section section-rule"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
      >
        <motion.p variants={itemVariants} className="eyebrow">
          A LITTLE ABOUT ME <ArrowDownRight size={14} />
        </motion.p>

        <div className="intro-content">
          <motion.h2 variants={itemVariants}>
            Building products <br /> with <em>user experience <br /></em>at the core.
          </motion.h2>
          <motion.div variants={itemVariants} className="intro-body">
            <motion.p variants={itemVariants}>
              As a full-stack developer, my goal is to transform intricate product logic into smooth, user-friendly experiences. I bridge backend efficiency with clean frontend implementation, ensuring every detail serves a clear purpose for the people using the application.
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
      >
        <motion.p variants={itemVariants} className="eyebrow">WHAT I DO</motion.p>
        <motion.div variants={containerVariants} className="capability-list">
          {capabilities.map((item, index) => {
            return(
              <motion.div 
                variants={itemVariants} 
                className="capability-row" 
                key={item.title} 
                aria-label={`Capability ${index + 1}: ${item}`}
                whileHover={{x:8, transition: {duration: 0.3, ease: 'easeOut'}}}
              >
                <span className="row-index">
                  0{index + 1}
                </span>
                <div>
                  <h3>{item.title}</h3>
                <p>{item.description}</p>
                </div>
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
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>Have a project in mind, <br />or looking to add to <em>your team? </em></h2>
          <p className="contact-note">Good ideas start with a simple conversation. Feel free to reach out for collaborations or full-time opportunities.</p>
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
      </motion.section>
    </>
  );
}
