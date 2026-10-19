// src/lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Lokasi folder penyimpanan file .mdx
const projectsDirectory = path.join(process.cwd(), 'content/projects');
const experiencesDirectory = path.join(process.cwd(), 'content/experiences');

export interface ProjectMetadata {
  title: string;
  slug: string;
  summary: string;
  category: string;
  techStack: string[];
  liveUrl?: string;
  featuredImage?: string;
}

export interface ExperienceMetaData {
  period:string;
  title: string;
  company: string;
  description: string;
  points:string[];
}

// 1. Fungsi untuk mengambil SEMUA metadata proyek (untuk halaman daftar / card)
export function getAllProjects(): ProjectMetadata[] {
  // Cek apakah folder ada
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Gunakan gray-matter untuk memisahkan frontmatter data & konten markdown
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as Omit<ProjectMetadata, 'slug'>),
      };
    });

  // Urutkan dari tanggal terbaru
  return allProjects;
}

// 2. Fungsi untuk mengambil SATU proyek spesifik berdasarkan slug (beserta konten MDX-nya)
export function getProjectBySlug(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      slug,
      ...(data as Omit<ProjectMetadata, 'slug'>),
    },
    content, // Isinya adalah teks Markdown / MDX murni
  };
}

// 1. Fungsi untuk mengambil SEMUA metadata proyek (untuk halaman daftar / card)
export function getAllExperiences(): ExperienceMetaData[] {
  // Cek apakah folder ada
  if (!fs.existsSync(experiencesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(experiencesDirectory);

  const allExperiences = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(experiencesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Gunakan gray-matter untuk memisahkan frontmatter data & konten markdown
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as Omit<ExperienceMetaData, 'slug'>),
      };
    });

  // Urutkan dari tanggal terbaru
  return allExperiences.sort((a, b) => {
    const dateB = new Date(b.period.split(' - ')[0]).getTime()
    const dateA = new Date(a.period.split(' - ')[0]).getTime()
    // // padStart ensures the month always has 2 digits (e.g., "01" instead of "1")
    // const B = String(dateB.getMonth() + 1).padStart(2, '0')
    // const A = String(dateA.getMonth() + 1).padStart(2, '0')
    return dateB - dateA
  } );
}