import Link from "next/link";
import { Github, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-500">
      <hr />
      <div className="flex my-2 justify-between ">
        <div >2023 &copy; LARBI ISHAK</div>
        <div className="flex ">
          <Link
            href={"/"}
            className="px-2 hover:text-zinc-800 transition ease-in duration-400"
          >
            <Github />
          </Link>
          <Link
            href={"/"}
            className="px-2 hover:text-zinc-800 transition ease-in duration-400"
          >
            <Linkedin />
          </Link>
          <Link
            href={"/"}
            className="px-2 hover:text-zinc-800 transition ease-in duration-400"
          >
            <Twitter />
          </Link>
          <Link
            href={"/"}
            className="px-2 hover:text-zinc-800 transition ease-in duration-400"
          >
            <Facebook />
          </Link>
          <Link
            href={"/"}
            className="px-2 hover:text-zinc-800 transition ease-in duration-400"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="h-5 w-5 "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
