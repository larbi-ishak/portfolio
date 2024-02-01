import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";

export default function Resume() {
  return (
    <main>
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

      <section className="flex mt-4 gap-x-2">
        <Button>Download Resume ↓</Button>
        <Button>View Resume →</Button>
      </section>
      <section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-between">
                <div className="flex">
                  <Link
                    className="font-bold"
                    target="blank"
                    href={"https://www.ambinternationale.com"}
                  >
                    Freelancer
                  </Link>
                </div>
                <p className="text-zinc-400"> Aug 2021, Present</p>
              </div>
              <div className="p-4">
                <h3 className="text-zinc-400">Software engineer/ Web dev </h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Codebase Improvement, Refactoring and Performance Optimization</li>
                  <li>Create comprehensive documentation for the codebase, APIs, and any custom functionality.</li>
                  <li>User Technology Migration  PHP to Next.js, Reactjs to Vue, Nodejs to Go </li>
                  <li>Implement a responsive design approach</li>
                </ul>
              </div>
            </div>
          </Container>
          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-between">
                <div className="flex">
                  <Link
                    className="font-bold"
                    target="blank"
                    href={"https://www.ambinternationale.com"}
                  >
                    AMB International
                  </Link>
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
                  <li>3rd party API integration</li>
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
                  <Link
                    className="font-bold"
                    target="blank"
                    href={"https://www.ambinternationale.com"}
                  >
                    Verizon & Forage
                  </Link>
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
