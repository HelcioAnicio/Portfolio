'use client';
import { Header } from '@/components/ui/header';
import { GitHubRepos } from '@/components/ui/repository';
import { Technology } from '@/components/ui/technology';
import { ListProjects } from '@/components/ui/listProject';
import { CardAboutMe } from '@/components/ui/cardAboutMe';
import { CardImage } from '@/components/ui/cardImage';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col gap-16 sm:p-5 sm:items-center overflow-hidden'>
        <section
          id='home'
          className='sm:flex gap-4 items-center justify-center sm:p-5'>
          <CardImage />
        </section>
        <section id='aboutMe'>
          <CardAboutMe />
        </section>
        <section>
          <GitHubRepos />
        </section>
        <section
          className='py-10 h-full w-full mx-auto max-w-3xl'
          id='technology'>
          <Technology />
        </section>
        <section
          className='w-full'
          id='projects'>
          <ListProjects />
        </section>
        <section
          className=' h-96 '
          id='footer'>
          <Footer />
        </section>
      </main>
    </>
  );
}
