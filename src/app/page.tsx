'use client';
import { Header } from '@/components/ui/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GitHubRepos } from '@/components/ui/repository';
import { Technology } from '@/components/ui/technology';
import { ListProjects } from '@/components/ui/listProject';
import { CardAboutMe } from '@/components/ui/cardAboutMe';
import { CardImage } from '@/components/ui/cardImage';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='flex flex-col gap-16 sm:p-5 sm:items-center'>
        <section className='sm:flex gap-4 items-center justify-center sm:p-5'>
          <CardImage />{' '}
        </section>
        <section>
          <CardAboutMe />{' '}
        </section>
        <section>
          <GitHubRepos />
        </section>
        <section>
          <Technology />
        </section>
        <section className='w-full'>
          <Card className='p-1 w-full max-w-2xl m-auto '>
            <CardHeader>
              <CardTitle className='text-center text-2xl text-primary-foreground'>
                Pricipais Projetos
              </CardTitle>
            </CardHeader>
            <CardContent className='p-2'>
              <ListProjects />
            </CardContent>
          </Card>
        </section>
        <section className='bg-white h-96 '></section>
      </main>
    </div>
  );
}
