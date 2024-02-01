import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

const LatestBlogs = () => {
  const firstPosts = allPosts.slice(0, 3)

  const posts = firstPosts.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <section>
      <h4 className="underline p-3 text-lg">Latest Posts</h4>

      <Link href="/blog" className="block  text-md p-2 text-gray-600 hover:underline">See all posts →</Link>
      {posts.map((post: any, idx: number) => (
        <div className="flex justify-between " key={idx}>
          <Link href={`/blog/${post.path}`} className="hover:underline">{post.title} →</Link>
          <time
            dateTime={post.date}
            className="mb-2 text-xs text-gray-600"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
      ))}
    </section>
  )

}
export default LatestBlogs;
