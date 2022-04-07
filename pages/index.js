import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Secure Inference for Machine Learning | Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="grid grid-cols-2 md:grid-cols-2  justify-between w-screen p-4 md:p-0">
        <div className="col-span-1">
          <h1 className="text-9xl font-bold">Ciao</h1>
        </div>
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <Link href={`/post/${slug}`}>
              <a>
                <Image
                  layout="responsive"
                  priority={true}
                  objectFit={"cover"}
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`/images/${frontmatter.socialImage}` || "/images/default.jpg"}
                />
                <h1 className="text-glow p-4">{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
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
