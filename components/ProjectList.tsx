import { iconVariants, itemVariants } from "@/lib/animation";
import { ProjectMetadata } from "@/lib/mdx";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectList({ project }: { project: ProjectMetadata & { number: number } }) {
    return (
    <motion.article 
        className="project-item" 
        key={project.slug}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        whileHover="hover" // Mengatur status hover untuk elemen anak
    >
        <motion.div 
            className={`project-art`}
            variants={{
                hover:{scale:1.015, transition: {duration: 0.3, ease: 'easeOut'}}
            }}
        >
        <span className="project-art-label">INDEPENDENT PROJECT&nbsp; / &nbsp;{project.date}</span>
        {/* <span className="project-art-mark">
            {project.mark.split('\n').map((line) => {
            return(
                <span key={line}>{line}</span>
            )
            })}
        </span> */}
        <span className="project-art-number">
            {project.number}
        </span>
        </motion.div>

        <div className="project-info">
            <div>
                <p className="eyebrow">{project.category}</p>
                <h2>{project.title}</h2>
                <p className="project-description">{project.summary}</p>
                <div className="tag-list">
                {project.techStack.map((tag:string) => {
                    return(
                    <span key={tag}>{tag}</span>
                    )
                })}
                </div>
            </div>
            <span className="project-link" aria-label={`Project ${project.slug}`}>
                <motion.div variants={iconVariants} className="inline-block">
                    <ArrowUpRight size={20} />
                </motion.div>
            </span>
        </div>
    </motion.article>
  )
}