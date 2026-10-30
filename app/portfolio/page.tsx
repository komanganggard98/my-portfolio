import { getAllDesigns, getAllProjects } from '@/lib/mdx';
import Content from './content';

export default function PortfolioPage() {
  const projects = getAllProjects();
  const designs = getAllDesigns()
  return(
    <Content projects={projects} designs={designs} />
  )
}
