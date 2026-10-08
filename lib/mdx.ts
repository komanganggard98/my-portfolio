// src/lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Lokasi folder penyimpanan file .mdx
const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectMetadata {
  title: string;
  slug: string;
  date: string;
  summary: string;
  category: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featuredImage?: string;
  featured?: boolean;
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
  return allProjects.sort((a, b) => (a.date < b.date ? 1 : -1));
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