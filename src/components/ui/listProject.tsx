import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegWindowRestore } from "react-icons/fa6";
import { projects } from "./projects";
import { Project } from "./project";

export const ListProjects = () => {
  return (
    <Card className="mx-auto w-full max-w-5xl border-none bg-inherit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 py-6 text-2xl">
          <FaRegWindowRestore />
          <span>Nossos projetos</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex w-full flex-col items-center justify-around gap-1 md:flex-row md:flex-wrap md:items-start">
        {projects.map((project, index) => (
          <Project
            key={project.nameProject}
            {...project}
            align={index % 2 === 0 ? "top" : "bottom"}
          />
        ))}
      </CardContent>
    </Card>
  );
};
