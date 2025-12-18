"use client";
import { Header } from "@/components/ui/header";
import { ListProjects } from "@/components/ui/listProject";
// import { CardAboutMe } from "@/components/ui/cardAboutMe";
import { CardImage } from "@/components/ui/cardImage";
import { Footer } from "@/components/ui/footer";
import { WhyDevLab } from "@/components/ui/whyDevLab";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex h-full max-w-5xl flex-col gap-20 overflow-hidden sm:items-center">
        <section
          id="home"
          className="h-100vh flex min-h-max w-full max-w-5xl flex-col gap-5 px-2 md:gap-10 md:px-6 lg:h-[calc(100vh-144px)] lg:gap-16"
        >
          <CardImage />
        </section>
        {/* <section id="aboutMe" className="w-full max-w-3xl pt-20">
          <CardAboutMe />
        </section> */}
        <section className="relative flex w-full flex-col gap-5 bg-white px-1 pb-10 pt-6 md:p-6">
          <WhyDevLab />
        </section>
        <section className="w-full max-w-5xl" id="projects">
          <ListProjects />
        </section>
      </main>
      <Footer />
    </>
  );
}
