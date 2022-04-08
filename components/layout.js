import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      {router.pathname !== "/" && (
        <header className="w-screen fixed bg-white h-7 py-4">
          <div className="container pl-5 flex justify-start">
            <Link href="/">
              <a className="text-lg font-medium">Secure Inference for Machine Learning</a>
            </Link>
          </div>
        </header>
      )}
      <main className="container mx-auto flex w-screen h-screen">{children}</main>
    </div>
  );
}
