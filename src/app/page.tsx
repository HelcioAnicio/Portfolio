"use client";
import { Header } from "@/components/ui/header";
import { Technology } from "@/components/ui/technology";
import { ListProjects } from "@/components/ui/listProject";
// import { CardAboutMe } from "@/components/ui/cardAboutMe";
import { CardImage } from "@/components/ui/cardImage";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-5xl flex-col gap-20 overflow-hidden sm:items-center">
        <section id="home" className="h-[calc(100vh-64px)] w-full max-w-5xl">
          <CardImage />
        </section>
        {/* <section id="aboutMe" className="w-full max-w-3xl pt-20">
          <CardAboutMe />
        </section> */}
        <section className="h-screen w-full max-w-5xl" id="projects">
          <ListProjects />
        </section>
        <section className="mx-auto w-full max-w-5xl" id="technology">
          <Technology />
        </section>
      </main>
      <Footer />
    </>
  );
}
