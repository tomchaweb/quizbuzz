'use client'

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <main className="mt-20 p-8 md:p-16 flex flex-col items-center gap-4">
      <h1 className="w-fit mx-auto text-4xl md:text-6xl text-center font-extrabold tracking-tighter px-6 py-1 rounded-full border-yellow-400 border-8 bg-yellow-300">Welcome to <span className="underline">QuizBuzz</span></h1>
      <span className="text-2xl md:text-4xl font-bold text-center">Choose your favourite category and test your knowledge</span>
      <Link href="/categories" className="mt-10 px-6 py-1 flex items-center align-middle gap-2 text-2xl md:text-4xl font-bold rounded-full border-green-400 border-8 bg-green-300">Play Now<ArrowRight size={32} /></Link>
    </main>
  );
}
