"use client";
import { Header } from "@/components/ui/header";
import { ListProjects } from "@/components/ui/listProject";
import { CardImage } from "@/components/ui/cardImage";
import { Footer } from "@/components/ui/footer";
import { WhyDevLab } from "@/components/ui/whyDevLab";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import { Steps } from "@/components/ui/steps";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto mt-10 flex h-full max-w-5xl flex-col gap-20 overflow-hidden sm:items-center">
        <CardImage />
        <WhyDevLab />
        <section className="w-full max-w-5xl" id="projects">
          <ListProjects />
          <Link
            href="google.com"
            className="text-popover-foreground underline underline-offset-2"
          >
            <p className="ml-auto mt-1 flex w-max items-center gap-2">
              Ver todos os modelos <FaArrowCircleRight />
            </p>
          </Link>
        </section>
        <Steps />
      </main>
      <Footer />
    </>
  );
}
