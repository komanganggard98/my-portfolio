'use client';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { arrowVariants, containerVariants, iconVariants, itemVariants } from '../../lib/animation';
import { ProjectMetadata } from '@/lib/mdx';
import ProjectList from '@/components/ProjectList';

const projects = [
  { number: '01', name: 'Commerce, made human', type: 'E-COMMERCE · FULL-STACK', year: '2025', description: 'A considered storefront experience that helps independent brands tell a stronger story and sell with confidence.', tags: ['Next.js', 'Laravel', 'Stripe'], tone: 'project-sand', mark: 'STUDIO\nGOODS' },
  { number: '02', name: 'A clearer way to work', type: 'SAAS · PRODUCT DESIGN', year: '2024', description: 'A lightweight project workspace designed to help small creative teams find focus and keep momentum.', tags: ['React', 'Inertia', 'Tailwind'], tone: 'project-lime', mark: 'FORM\n& FLOW' },
  { number: '03', name: 'Stories worth staying for', type: 'EDITORIAL · WORDPRESS', year: '2024', description: 'A flexible publishing platform bringing a culture journal’s rich photography and long-form writing to life.', tags: ['WordPress', 'PHP', 'GSAP'], tone: 'project-lilac', mark: 'SUNDAY\nPAPER' },
];

export default function Content({projects}: {projects: ProjectMetadata[]}) {
  return (
    <>
      <motion.section 
        className="page-heading"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="eyebrow">SELECTED WORK · 2024—2025</motion.p>
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
      
      <motion.section 
        className="portfolio-note"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.span variants={itemVariants} className="eyebrow">MORE IN THE WORKS</motion.span>
        <motion.p variants={itemVariants}>Every project starts with a good question.<br />Have one for me?</motion.p>
        <a className="underlined-link" href="mailto:hello@angga.dev">Get in touch <ArrowUpRight size={15} /></a>
      </motion.section>
    </>
  )
}
