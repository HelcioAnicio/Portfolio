import { Card, CardHeader, CardTitle, CardContent } from './card';

export const CardAboutMe = () => {
  const dataStart = new Date('2022-04-01');
  const dataToday = new Date();
  const timeWorking = dataToday.getFullYear() - dataStart.getFullYear();

  return (
    <Card className='max-w-2xl'>
      <CardHeader>
        <CardTitle className='text-primary-foreground font-sans text-2xl '>
          Minha experiência/Quem sou
        </CardTitle>
      </CardHeader>
      <CardContent>
        Trabalho a {timeWorking} anos como desenvolvedor web e mobile,
        trabalhando em projetos como freelancer e profissionalmente. Meu
        objetivo é simples: combinar designer, tecnologia e entregar soluções
        que realmente façam a diferença. Você pode me encontrar criando projetos
        ou tentando explicar para meus pais o que eu faço no computador o dia
        todo. Se você está procurando alguém para tirar sua ideia do papel e
        transformá-la em uma realidade incrível, bora conversar!
      </CardContent>
    </Card>
  );
};
