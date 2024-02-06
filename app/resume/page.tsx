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
                <div className="flex font-bold">
                  Freelancer
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
                <div className="flex font-bold">
                  HUAWEI
                </div>
                <p className="text-zinc-400"> March 2023</p>
              </div>
              <div className="p-4">
                <h3 className="text-zinc-400">
                  Cloud, Linux, Database Training
                </h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Understanding of GAUSSDB (postgresql-based db) and experience in database management tasks such as data modeling, querying, and optimization.</li>
                  <li>database administration tasks like backup, replication and recovery, data integrity(procedures, triggers ...)</li>
                  <li>Knowledge of database design</li>
                  <li>Proficiency in Linux system administration shell scripting</li>
                  <li>Familiarity with Linux server technologies such as Apache and SSH  and Virualization(KVM)</li>
                  <li>Familiarity with OpenEuler (RedHat-based linux distro)</li>
                  <li>Basic Cloud Concepts:instances, VPC, security group, load balancers</li>
                </ul>
              </div>
            </div>
          </Container>
          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-between">
                <div className="flex font-bold">
                  Verizon & Forage
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
          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-between">
                <div className="flex font-bold">
                  GitHub
                </div>
                <p className="text-zinc-400">Mar 2024, Present</p>
              </div>
              <div className="p-4">
                <h3 className="text-zinc-400">Campus Expert, Student Ambassador</h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Campus Experts are student leaders that strive to build diverse and inclusive spaces to learn
                    skills, share their experiences, and build projects together
                  </li>
                </ul>
              </div>
            </div>
          </Container>

          <Container>
            <div className="py-4 px-4 flex flex-col">
              <div className="flex justify-between">
                <div className="flex font-bold">
                  Huawei
                </div>
                <p className="text-zinc-400">Dec 2023, Present</p>
              </div>
              <div className="p-4">
                <h3 className="text-zinc-400">Academy Student Ambassador</h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Student leaders creating inclusive spaces for learning, skill-sharing, and collaborative projects. Plus, there's a global showdown in the Huawei competition - compete, showcase, and win on the world stage in China! 🌐🏆
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
