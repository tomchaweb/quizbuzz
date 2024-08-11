'use client'

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <main className="mt-10 flex flex-col items-center">
      <h1 className="w-fit mx-auto text-6xl font-extrabold underline tracking-tighter px-6 py-1 rounded-full border-yellow-400 border-8 bg-yellow-300">QuizBuzz</h1>
      <Link href="/categories" className="mt-10 px-6 py-1 flex items-center align-middle gap-2 text-4xl font-bold rounded-full border-yellow-400 border-8 bg-yellow-300">Categories<ArrowRight size={32} /></Link>
    </main>
  );
}
