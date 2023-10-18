import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Resume() {
  return (
    <main>
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

      <section className="flex mt-4 gap-x-2">
        <Button>Download Resume ↓</Button>
        <Button>View Resume →</Button>
      </section>
      <section>
        <h1 className="mt-3 text-2xl underline font-bold">Work Experience</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-between">
                <div className="flex">
                    <Image
                      src={"/juba.jpg"}
                      width={60}
                      height={60}
                      alt="amb logo"
                    />
                  <p className="ml-2 text-zinc-400">
                    <Link
                      className="underline"
                      target="blank"
                      href={"https://www.ambinternationale.com"}
                    >
                      Juba Academy
                    </Link>
                  </p>
                </div>
                <p className="text-zinc-400">Dec 2021, Present</p>
              </div>
              <div className="p-4">
                <h3 className="text-zinc-400">Software Engineer</h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Create custom trading indicators and strategies using Pine
                    Script
                  </li>
                  <li>
                    Integrate trading APIs, and other APIs: live chats and
                    webinars
                  </li>
                  <li>
                    Create interactive modules with quizzes and charts to
                    enhance the learning experience
                  </li>
                  <li>User authentication and authorization</li>
                </ul>
              </div>
            </div>
          </Container>
          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-between">
                <div className="flex">
                  <Image
                    src={"/amb.png"}
                    width={50}
                    height={50}
                    alt="amb logo"
                  />
                  <p className="ml-2 text-zinc-400">
                    <Link
                      className="underline"
                      target="blank"
                      href={"https://www.ambinternationale.com"}
                    >
                      AMB International
                    </Link>
                  </p>
                </div>
                <p className="text-zinc-400">Dec 2021, Present</p>
              </div>
              <div className="p-4">
                <h3 className="text-zinc-400">Software Engineer, Part time</h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Full website rebuild, migrating from php to Nextjs</li>
                  <li>
                    Conducted a codebase imporvement led 16% performance
                    optimization
                  </li>
                  <li>3rd parth API integration</li>
                  <li>Mobile Responsive design</li>
                  <li>Incorporated SEO best practices</li>
                </ul>
              </div>
            </div>
          </Container>
          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-between">
                <div className="flex">
                  <Image
                    src={"verizon.svg"}
                    width={80}
                    height={80}
                    alt="verizon logo"
                  />
                  <Image
                    src={"forage.svg"}
                    width={60}
                    height={60}
                    alt="forage logo"
                  />
                  <p className="ml-6 text-zinc-400">
                    <Link
                      className="underline"
                      target="blank"
                      href={"https://www.ambinternationale.com"}
                    >
                      Verizon & Forage
                    </Link>
                  </p>
                </div>
                <p className="text-zinc-400"> Aug 2023, Sep 2023</p>
              </div>
              <div className="p-4">
                <h3 className="text-zinc-400">
                  Cloud Software Engineer: Internship, job simulation{" "}
                </h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Testing entreprise VPN solution</li>
                  <li>Interact and test cloud applications with Python</li>
                  <li>
                    Present and Communicate application test results with the
                    CCE team.
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </section>
    </main>
  );
}
