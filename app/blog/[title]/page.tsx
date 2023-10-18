import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import  Link from "next/link";

export const generateMetadata = ({ params }: { params: { title: string } }) => {
  const post = allPosts.find(
    (post) => post.path === params.title
  );
  if (!post) throw new Error(`Post not found for title: ${params.title}`);
  return { title: post.title };
};

export default function PostLayout({ params }: { params: { title: string } })  {

  // fetching exact post for using in
  const post = allPosts.find(
    (post) => post.path === params.title
  );
  if (!post) throw new Error(`Post not found for title: ${params.title}`);

  return (
    <article className="mx-20">
      <div className="mb-8 text-center">
        <Link href="/blog" className="block  text-md p-6 text-gray-600 hover:underline">← Back to all posts</Link>
        <time dateTime={post.date} className="mb-1 text-sm text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};


export const generateStaticParams = async () =>
  allPosts.map((post) => ({ title: post.path}));
