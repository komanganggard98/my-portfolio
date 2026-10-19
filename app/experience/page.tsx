import { getAllExperiences } from "@/lib/mdx"
import Content from "./content"

export default function ExperiencePage() {
  const experiences = getAllExperiences()
  return (
    <Content experiences={experiences}/>
  )
}
