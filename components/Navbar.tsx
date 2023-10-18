import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between pb-8 items-end">
        <p className="pb-2 border-b-4 border-zinc-700">
          <Link className="font-bold tracking-tight text-2xl" href="/">
            LARBI ISHAK
          </Link>
        </p>
        <div className="flex items-center gap-x-2">
        <ToggleTheme/>
        <ul className="text-sm flex flex-wrap gap-x-2 border border-zinc-200 px-4 rounded-full shadow-sm hover:shadow-md transition">
          <li>
            <Link
              className="block text-zinc-500 hover:text-zinc-700 transition-colors font-medium py-2 px-2"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="block text-zinc-500 hover:text-zinc-700 transition-colors font-medium py-2 px-2"
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="block text-zinc-500 hover:text-zinc-700 transition-colors font-medium py-2 px-2"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="block text-zinc-500 hover:text-zinc-700 transition-colors font-medium py-2 px-2"
              href="/resume"
            >
              Resume
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}
