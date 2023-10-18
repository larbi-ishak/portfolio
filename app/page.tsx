import Link from "next/link";
import Container from "@/components/container";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="p-5">
      <section className="grid gap-y-6">
        <p className="col-span-3">
          Software Developer{" "}
          <Link
            className="underline"
            href={"https://www.ambinternationale.com/"}
          >
            @AMB International
          </Link>{" "}
          proficient in the Back End stack. Interested in building software,
          design systems, user experience, and tooling. Working on Freelance and{" "}
          <Link className="underline" href={"https://github.com/larbi-ishak"}>
            open source projects
          </Link>{" "}
          at free time.
        </p>
      </section>
      <section className="flex flex-wrap mt-8 gap-x-3">
        <div className="flex flex-col gap-2">
          <Container>
            <div className="py-4 px-4 flex items-center justify-between w-80">
                <Github />
                <p className="text-zinc-400">@larbi-ishak</p>
              <div><Link href={"https://github.com/larbi-ishak"}><Button className="rounded-full">Follow</Button></Link></div>
            </div>
        </Container>
          <Container>
            <div className="py-4 px-4 flex items-center justify-between w-80">
                <Image src={"/twitter.svg"} width={40} height={40} alt={"Example SVG"} className="p-0 m-0" />
                <p className=" text-zinc-400">@LARBIIshak3</p>
              <div><Link href={"https://twitter.com/LARBIIshak3"}><Button className="rounded-full">Follow</Button></Link></div>
            </div>
        </Container>
        </div>
        <div className="flex flex-wrap gap-x-3">
          <Container>
            <div className="py-4 px-4 flex lg:flex-col">
                <Facebook color="#4267B2"/>
                <p className="ml-4 text-zinc-400">Larbi Ishak</p>
              <Link href={"https://www.facebook.com/ishak.larbi.94"}><Button style={{backgroundColor: "#4267B2"}} className="rounded-full self-center">Follow</Button></Link>
            </div>
          </Container>
          <Container>
            <div className="py-4 px-4 flex flex-col justify-between ">
                <Linkedin color="#0077b5"/>
                <p className="ml-4 text-zinc-400">LARBI ISHAK</p>
              <Link href={"https://www.linkedin.com/in/larbishak/"}><Button style={{backgroundColor: "#0077b5"}} className="rounded-full self-center">Follow</Button></Link>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
