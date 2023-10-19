import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye} from "lucide-react"

export default function Projects() {
  const hProjects = [
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
  const vProjects = [
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
    <section className="flex gap-4">
      <div className="grow ">
        {hProjects.map((project)=>
        <div className="mb-2">
        <Container>
          <div className="flex h-20 items-center p-4">
            <div>
              <Link href={project.url} className="text-lg font-bold">{project.name}</Link>
              <p className="text-zinc-400 text-sm">{project.explanation}</p>
            </div>
            <div className="flex gap-1">
              <Button><Link href={project.url}>Code</Link></Button>
                {project.liveUrl && <Button><Link href={project.liveUrl}> <Eye /> </Link></Button>}
            </div>
          </div>
        </Container>
        </div>
        )}
      </div>
      <div className="grow ">
        {vProjects.map((project)=>
        <div className="mb-2">
        <Container>
          <div className="flex h-24 items-center p-4">
            <div>
              <Link href={project.url} className="text-lg font-bold">{project.name}</Link>
              <p className="text-zinc-400 text-sm">{project.explanation}</p>
            </div>
            <div className="flex gap-1">
              <Button><Link href={project.url}>Code</Link></Button>
                {project.liveUrl && <Button><Link href={project.liveUrl}><Eye /></Link></Button>}
            </div>
          </div>
        </Container>
        </div>
        )}
      </div>
    </section>
  );
}
