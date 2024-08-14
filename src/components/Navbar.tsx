import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-4 md:px-8 py-4 flex items-center gap-2 md:gap-8 ">
      <Link href="/">
        <h1 className="w-fit mx-auto text-xl md:text-4xl font-extrabold underline tracking-tighter px-4 md:px-6 py-1 rounded-full border-yellow-400 border-4 md:border-8 bg-yellow-300">QuizBuzz</h1>
      </Link>
      <ul>
        <li>
          <Link href="/categories" className="hidden md:block text-2xl font-extrabold tracking-tight">Categories</Link>
        </li>
      </ul>
    </nav>
  )
}
