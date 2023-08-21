import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export default async function ProjectsPage() {
	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Resume
					</h2>
					<p className="mt-4 text-zinc-400">
						Feel free to Download my CV and <Link  className="underline duration-500 hover:text-zinc-300" href={"mailto:ishak.larbi@inttic.dz"}>Contact Me</Link>
					</p>
					<p className="mt-4 text-zinc-300">
						Languages:&nbsp;&nbsp;&nbsp;&nbsp;  js(Typescript as superset), python, PHP, SQL <br />
						Tech Stack:&nbsp;&nbsp;&nbsp;&nbsp; MERN, NEXTjs, tailwindcss, postCSS <br />
						Tools:&nbsp;&nbsp;&nbsp;&nbsp; RedHat Linux, Bash scripting, Git, Jira, Docker, Kubernetes, Neovim <br />
						Other skills:&nbsp;&nbsp;&nbsp;&nbsp; Networking(CCNP), Cloud Computing(Basics), Virtualization(Esxi, ProxmoxVE) <br />
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						<Link href={`/projects/`}>
							<article className="relative w-full h-full p-4 md:p-8">

								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
								LARBI ISHAK CV
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
									Discover it Discover it Discover it
								</p>
								<div className="absolute bottom-4 md:bottom-4">
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>

					<div className="flex flex-col w-full mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
							<Card >
								<Article />
							</Card>
					</div>
				</div>

			</div>
		</div>
	);
}
