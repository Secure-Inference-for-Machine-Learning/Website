import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-screen sticky bg-transparent py-4">
        <div className="container pl-5 flex justify-start">
          <Link href="/">
            <a className="text-lg font-medium">Secure Inference for Machine Learning</a>
          </Link>{" "}
        </div>
      </header>
      <main className="container mx-auto flex w-screen">{children}</main>
    </div>
  );
}
