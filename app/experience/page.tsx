'use client';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../lib/animation';

const roles = [
  { period: '2023 — NOW', title: 'Independent Web Developer', company: 'Freelance · Indonesia', description: 'Partnering with founders and creative teams to shape and build thoughtful web experiences, from early product ideas through launch.', points: ['Plan and build responsive applications with React and Next.js', 'Develop custom CMS and commerce solutions with Laravel and WordPress', 'Work closely with clients to turn goals into clear product decisions'] },
  { period: '2021 — 2023', title: 'Frontend Developer', company: 'Digital Studio · Indonesia', description: 'Worked with a multidisciplinary team to deliver websites and internal tools for growing businesses.', points: ['Translated design systems into reusable, accessible interfaces', 'Improved page performance and responsive behavior across devices', 'Collaborated with designers and backend engineers through delivery'] },
  { period: '2019 — 2021', title: 'Web Developer', company: 'Early career', description: 'Built a strong foundation in the web, learning to balance practical problem solving with a lasting curiosity for how things work.', points: ['Created and maintained client websites using WordPress and PHP', 'Built confidence across HTML, CSS, JavaScript, and modern tooling'] },
];

export default function ExperiencePage() {
  return (
    <>
      <motion.section 
        className="page-heading experience-heading"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="eyebrow">THE PATH SO FAR · 2019—NOW</motion.p>
        <motion.h1 variants={itemVariants}>
          Experience<br />shaped by <em>making.</em>
        </motion.h1>
        <motion.p variants={itemVariants} className="heading-intro">
          A few chapters, many lessons, and a continued interest in building things that make a difference.
        </motion.p>
        <motion.a 
          variants={itemVariants} 
          className="underlined-link" 
          href="#timeline"
        >
          Explore my journey
          <ArrowDownRight size={15} />
        </motion.a>
      </motion.section>

      <section className="experience-layout" id="timeline">
        <motion.div 
          className="experience-aside"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="eyebrow">CAREER NOTES</motion.span>
          <motion.div variants={itemVariants} className="experience-quote">
            <Sparkles size={17} />
            <p>“Stay curious.<br />Make it useful.<br /><em>Care about the details.</em>”</p>
          </motion.div>
          <motion.span variants={itemVariants} className="aside-caption">A SIMPLE FRAMEWORK<br />FOR DOING GOOD WORK.</motion.span>
        </motion.div>
        <div className="timeline">
          {roles.map((role, index) => {
            return(
              <motion.article 
                className="role" 
                key={role.period} 
                variants={containerVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.3, margin: "-100px" }}
              >
                <motion.div variants={itemVariants} className="role-meta">
                  <span>{role.period}</span>
                  <span>0{index + 1}</span>
                </motion.div>
                <motion.h2 variants={itemVariants}>{role.title}</motion.h2>
                <motion.p variants={itemVariants} className="role-company">
                  {role.company}
                </motion.p>
                <motion.p variants={itemVariants} className="role-description">
                  {role.description}
                </motion.p>
                <ul>
                  {role.points.map(point => (
                    <motion.li key={point} variants={itemVariants}>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </section>
        
      <section className="skills-band">
        <span className="eyebrow">TOOLS I REACH FOR</span>
        <div className="skill-cloud">
          {['React', 'Next.js', 'TypeScript', 'Laravel', 'WordPress', 'Tailwind CSS', 'Figma', 'Git'].map((skill) => {
            return(
              <span key={skill}>{skill}</span>
            )
          })}
        </div>
      </section>

      <motion.section 
        className="closing-note"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.p variants={itemVariants}>
          Good things happen when the right people work together.
        </motion.p>
        <a className="underlined-link" href="mailto:hello@angga.dev">
          Let’s build something <ArrowUpRight size={15} />
        </a>
      </motion.section>
    </>
  )
  
}
