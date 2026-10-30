import { itemVariants } from "@/lib/animation";
import { DesignMetadata } from "@/lib/mdx";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DesignList({ design }: { design: DesignMetadata }) {
    return (
    <motion.article 
        className="design-item" 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        whileHover="hover"
    >
        <motion.div 
            className="design-art"
            variants={{
                hover: { scale: 1.015, transition: { duration: 0.3, ease: 'easeOut' } }
            }}
        >
            {design.featuredImage ? (
                design.liveUrl ? (
                    <a href={design.liveUrl} target="_blank" className="design-art-link">
                        <Image
                            src={design.featuredImage}
                            width={1000}
                            height={1000}
                            alt={`${design.title} design preview`}
                            className="design-art-image"
                        />
                    </a>
                ) : (
                    <Image
                        src={design.featuredImage}
                        width={1000}
                        height={1000}
                        alt={`${design.title} design preview`}
                        className="design-art-image"
                    />
                )
            ) : (
                <span className="design-art-placeholder" aria-hidden="true">{design.title}</span>
            )}
            <div className="design-info">
                <h2>{design.title}</h2>
            </div>
        </motion.div>

    </motion.article>
  )
}