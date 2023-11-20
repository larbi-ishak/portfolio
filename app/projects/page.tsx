import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye} from "lucide-react"

export default function Projects() {
  const lProjects = [
    {
      liveUrl: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      url: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      name: "Go shell",
      explanation: "small explanation, small explanations mall explanation",
    },
    {
      liveUrl: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      url: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      name: "DSA preparation",
      explanation: "small explanation, small explanations mall explanation",
    },
    {
      liveUrl: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      url: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      name: "Nextjs Workshop",
      explanation: "small explanation, small explanations mall explanation",
    },

  ];
  const rProjects = [
    {
      liveUrl: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      url: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      name: "System Design preparation",
      explanation: "small explanation, small explanations mall explanation",
    },
    {
      liveUrl: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      url: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      name: "Nextjs Workshop",
      explanation: "small explanation, small explanations mall explanation",
    },
    {
      liveUrl: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      url: "https://github.com/larbi-ishak/latest-nextjs-workshop",
      name: "Nextjs Workshop",
      explanation: "small explanation, small explanations mall explanation",
    },

  ];
  return (
    <section className="md:flex gap-4">
      <div className="grow">
        {lProjects.map((project)=>
        <div className="mb-2">
        <Container>
          <div className="sm:flex items-center p-4">
            <div>
              <Link href={project.url} className="text-lg font-bold">{project.name}</Link>
              <p className="text-zinc-400 text-sm">{project.explanation}</p>
            </div>
            <div className="flex gap-1">
              <Button className="p-2"><Link href={project.url}>Code</Link></Button>
                {project.liveUrl && <Link className="p-2" href={project.liveUrl}> <Eye /> </Link>}
            </div>
          </div>
        </Container>
        </div>
        )}
      </div>
      <div className="grow">
        {rProjects.map((project)=>
        <div className="mb-2">
        <Container>
          <div className="sm:flex items-center p-4 gap-1">
            <div>
              <Link href={project.url} className="text-lg font-bold">{project.name}</Link>
              <p className="text-zinc-400 text-sm">{project.explanation}</p>
            </div>
            <div className="flex gap-1">
              <Button className="p-2"><Link href={project.url}>Code</Link></Button>
                {project.liveUrl && <Link className="p-2" href={project.liveUrl}> <Eye /> </Link>}
            </div>
          </div>
        </Container>
        </div>
        )}
      </div>
    </section>
  );
}
