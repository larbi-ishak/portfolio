import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export default function Blog() {
  const posts = allPosts.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="">
      <h1 className="mb-3 underline text-2xl">
        Blogs
      </h1>
      <>
        {posts.map((post: any, idx: number) => (
          <div className="flex justify-between gap-2 ml-2" key={idx}>
            <Link href={`/blog/${post.path}`} className="hover:underline">{post.title} →</Link>
            <time
              dateTime={post.date}
              className="mb-2 text-xs text-gray-600"
            >
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </div>
        ))}
      </>
      <h1 className="mb-3 underline text-2xl">
        Talks
      </h1>
    </div>
  );
}
