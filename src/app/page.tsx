'use client';
import { Header } from '@/components/ui/header';
import { Technology } from '@/components/ui/technology';
import { ListProjects } from '@/components/ui/listProject';
import { CardAboutMe } from '@/components/ui/cardAboutMe';
import { CardImage } from '@/components/ui/cardImage';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col sm:items-center overflow-hidden'>
        <section
          id='home'
          className='w-full max-w-3xl pt-20'>
          <CardImage />
        </section>
        <section
          id='aboutMe'
          className='w-full max-w-3xl pt-20'>
          <CardAboutMe />
        </section>
        <section
          className='w-full max-w-3xl pt-20'
          id='projects'>
          <ListProjects />
        </section>
        <section
          className='pt-20 w-full mx-auto max-w-3xl'
          id='technology'>
          <Technology />
        </section>
      </main>
      <Footer />
    </>
  );
}
