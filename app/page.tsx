import { redirect } from 'next/navigation';
export default function HomePage() {
  // Langsung arahkan ke halaman profile
  redirect('/profile');
}