import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Malware detection: computer vision vs malware static analysis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="w-full mx-auto flex justify-center items-center">
        <div className="grid-cols-1 md:grid-cols-3 gap-4 ">
          {posts.map(({ slug, frontmatter }) => (
            <Link key={slug} href={`/post/${slug}`}>
              <div
                className="card bg-blur cursor-pointer"
                style={{ backgroundImage: `url(images/${frontmatter.socialImage})` }}
              >
                <h3 className="text-xl">{frontmatter.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
