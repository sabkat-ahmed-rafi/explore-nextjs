import Link from "next/link";

export default function Home() {
  return (
    <>
        <h2 className="text-red-600 font-bold p-3 text-7xl">Hello World</h2>
        <Link href="/users">user route</Link>
    </>
  );
}
