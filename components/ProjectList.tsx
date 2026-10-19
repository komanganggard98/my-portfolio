import { iconVariants, itemVariants } from "@/lib/animation";
import { ProjectMetadata } from "@/lib/mdx";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
            <span className="project-art-label">
                INDEPENDENT PROJECT
            </span>
            {project.featuredImage && (
                <a href={project.liveUrl} target="_blank" className={`w-full`} aria-label={`Project ${project.slug}`}>
                    <Image 
                        src={project.featuredImage} 
                        width={1000} 
                        height={1000} 
                        alt={project.slug}
                        className={`w-full object-cover`}
                    />
                </a>
            )}
            <span className="project-art-number">
                {project.number}
            </span>
        </motion.div>

        <div className="project-info">
            <div>
                <p className="eyebrow">{project.category}</p>
                <h2>
                    <a href={project.liveUrl} target="_blank" aria-label={`Project ${project.slug}`}>
                        {project.title}
                    </a>
                </h2>
                <p className="project-description">{project.summary}</p>
                <div className="tag-list">
                {project.techStack.map((tag:string) => {
                    return(
                    <span key={tag}>{tag}</span>
                    )
                })}
                </div>
            </div>
            <a href={project.liveUrl} target="_blank" className="project-link" aria-label={`Project ${project.slug}`}>
                <motion.div variants={iconVariants} className="inline-block">
                    <ArrowUpRight size={20} />
                </motion.div>
            </a>
        </div>
    </motion.article>
  )
}