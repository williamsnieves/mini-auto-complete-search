import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Welcome</h1>
      <Link
        href="/search"
        className="text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors"
      >
        Go to Search
      </Link>
    </main>
  );
}
