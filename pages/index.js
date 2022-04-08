import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Secure Inference for Machine Learning | Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container h-full flex justify-center gap-10 lg:justify-between items-center flex-col lg:flex-row w-screen p-4 md:p-0">
        <div className="lg:w-1/2">
          <h1 className="text-glow text-white text-5xl md:text-7xl xl:text-8xl font-bold mb-10">
            Secure Inference for Machine Learning
          </h1>

          <Link href="/blog">
            <button className="text-white font-bold py-2 px-4 rounded">Read the blog</button>
          </Link>
        </div>
        <div className="w-2/3 lg:w-1/2 flex justify-center items-center">
          <div className="pc w-full">
            <Image
              layout="responsive"
              priority={true}
              objectFit={"contain"}
              width={100}
              height={100}
              alt={"pc image"}
              src="/images/pc.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
