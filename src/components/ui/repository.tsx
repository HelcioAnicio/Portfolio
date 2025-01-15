import { Card } from './card';

export const GitHubRepos = () => {
  return (
    <Card className='w-full p-2 text-lg '>
      Tenho um total de{' '}
      <span className='font-serif text-primary-foreground'>32 projetos</span>{' '}
      desenvolvidos.
    </Card>
  );
};
