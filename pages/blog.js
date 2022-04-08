import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div className="flex justify-center items-center">
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug} className="border w-full m-2 rounded-xl shadow-lg overflow-hidden flex flex-col">
          <Link className="border-gray-200" href={`/post/${slug}`}>
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
