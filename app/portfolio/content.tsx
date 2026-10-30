'use client';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { arrowVariants, containerVariants, itemVariants } from '../../lib/animation';
import { ProjectMetadata, DesignMetadata } from '@/lib/mdx';
import ProjectList from '@/components/ProjectList';
import DesignList from '@/components/DesignList';


export default function Content({projects, designs}: {projects: ProjectMetadata[], designs:DesignMetadata[]}) {
  return (
    <>
      <motion.section 
        className="page-heading"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="eyebrow">SELECTED WORK · 2026</motion.p>
        <motion.h1 variants={itemVariants}>
          Ideas turned<br />into <em>impact.</em>
        </motion.h1>
        <motion.p variants={itemVariants} className="heading-intro">
          A selection of digital products and experiences built with care, curiosity, and a healthy respect for the details.
        </motion.p>
        <motion.a 
          variants={itemVariants} 
          className="underlined-link" 
          href="#projects"
          initial="initial"
          whileHover="hover"
        >
          Scroll to explore
          <motion.span style={{ display: 'inline-block' }} variants={arrowVariants}>
            <ArrowDownRight size={15} />
          </motion.span>
        </motion.a>
      </motion.section>

      <section className="project-list" id="projects">
        {projects.map((project:ProjectMetadata, index:number) => {
          return(
            <ProjectList project={{...project, number: index + 1}} key={project.slug} />
          )
        })}
      </section>

      <section className="designs-section" id="designs" aria-labelledby="designs-title">
        <motion.div
          className="designs-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="eyebrow">SELECTED DESIGN · 2026</motion.p>
          <motion.h2 variants={itemVariants} id="designs-title">
            Thoughtful details,<br />made <em>visual.</em>
          </motion.h2>
          <motion.div variants={itemVariants} className="designs-intro">
            <p className="designs-intro">
              A collection of visual explorations and digital experiences, shaped around clarity, character, and the people who use them.
            </p>
            <a href="https://dribbble.com/anggarahayudiputra" target="_blank" className="underlined-link">
              More about my design <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </motion.div>

        <div className="design-list">
          {designs.map((design: DesignMetadata) => (
            <DesignList design={design} key={design.slug} />
          ))}
        </div>
      </section>
      
      <motion.section 
        className="portfolio-note"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.span variants={itemVariants} className="eyebrow">MORE IN THE WORKS</motion.span>
        <motion.p variants={itemVariants}>Every project starts with a good question.<br />Have one for me?</motion.p>
        <a className="underlined-link" href="mailto:angga.rahayudiputra98@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
      </motion.section>
    </>
  )
}
