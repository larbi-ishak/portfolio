import Link from "next/link";
import Container from "@/components/container";
import { Facebook, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LatestBlogs from "@/components/HomeLatestBlogs";
import HomeSkills from "@/components/HomeSkills";

export default function Home() {

  return (
    <main className="p-5">
      <section className="grid gap-y-6">
        <p className="col-span-3">
          Software Engineer{" "}
          <Link
            target="_blank"
            className="underline"
            href={"https://www.ambinternationale.com/"}
          >
            @AMB International
          </Link>{" "}
          proficient in the Back End stack. Interested in building software,
          design systems, user experience, and tooling. Working on Freelance and{" "}
          <Link
            target="_blank"
            className="underline"
            href={"https://github.com/larbi-ishak"}
          >
            open source projects
          </Link>{" "}
          at free time.
        </p>
      </section>
      <section className="flex flex-wrap mt-8 gap-3 justify-center">
        <div className="flex flex-col gap-2">
          <Container>
            <div className="py-4 px-4 flex items-center justify-between w-80">
              <Github />
              <p className="text-zinc-400">@larbi-ishak</p>
              <div>
                <Link target="_blank" href={"https://github.com/larbi-ishak"}>
                  <Button className="rounded-full">Follow</Button>
                </Link>
              </div>
            </div>
          </Container>
          <Container>
            <div className="py-4 px-4 flex items-center justify-between w-80">
              <Image
                src={"/twitter.svg"}
                width={40}
                height={40}
                alt={"Example SVG"}
                className="p-0 m-0"
              />
              <p className=" text-zinc-400">@larbizyo</p>
              <div>
                <Link target="_blank" href={"https://twitter.com/larbizyo"}>
                  <Button className="rounded-full">Follow</Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <div className="flex  flex-col gap-2">
          <Container>
            <div className="py-4 px-4 flex items-center justify-between w-80">
              <Facebook />
              <p className="text-zinc-400">Larbi Ishak</p>
              <div>
                <Link
                  target="_blank"
                  href={"https://www.facebook.com/larbizyo"}
                >
                  <Button className="rounded-full">Follow</Button>
                </Link>
              </div>
            </div>
          </Container>
          <Container>
            <div className="py-4 px-4 flex items-center justify-between w-80">
              <Linkedin />
              <p className="ml-4 text-zinc-400">LARBI ISHAK</p>
              <div>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/larbishak/"}
                >
                  <Button className="rounded-full">Follow</Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <HomeSkills />
      <LatestBlogs />
    </main>
  );
}
