import { getAllProjects } from '@/lib/mdx';
import Content from './content';

export default function PortfolioPage() {
  const projects = getAllProjects();
  return(
    <Content projects={projects} />
  )
}
