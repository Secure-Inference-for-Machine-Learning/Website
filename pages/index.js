import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Malware detection: computer vision vs malware static analysis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="container mx-auto flex w-screen h-screen">
        <div className="container h-full flex justify-center gap-10 lg:justify-between items-center flex-col lg:flex-row w-screen p-4 md:p-0">
          <div className="lg:w-1/2">
            <h1 className="text-glow text-white text-4xl md:text-5xl xl:text-7xl font-bold mb-10">
              Malware detection: computer vision vs malware static analysis
            </h1>

            <Link href="/blog">
              <button className="text-white font-bold py-2 px-4 rounded">Read the blog</button>
            </Link>
          </div>
          <div className="w-2/3 md:w-1/3 lg:w-1/2 flex justify-center items-center">
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
      </main>
    </>
  );
}
