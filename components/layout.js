import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      {router.pathname !== "/" && (
        <header className="w-full sticky h-20 pt-5 pb-25">
          <div className=" w-full text-center">
            <Link href="/">
              <a className=" text-l md:text-xl text-white font-medium">
                Malware detection: computer vision vs malware static analysis
              </a>
            </Link>
          </div>
        </header>
      )}
      {children}
    </div>
  );
}
