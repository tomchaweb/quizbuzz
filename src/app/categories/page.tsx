'use client'

import CategoryBadge from "@/components/CategoryBadge";
import { BookOpenTextIcon, Gamepad2Icon, MedalIcon, PawPrintIcon, Popcorn, Tv } from "lucide-react";

export default function Home() {
  const categoryInfo = [
    {
      categoryName: "movies",
      color: "#f87171",
      borderColor: "#ef4444",
      icon: <Popcorn size={64} />
    },
    {
      categoryName: "television",
      color: "#facc15",
      borderColor: "#ca8a04",
      icon: <Tv size={64} />
    },
    {
      categoryName: "videogames",
      color: "#60a5fa",
      borderColor: "#3b82f6",
      icon: <Gamepad2Icon size={64} />
    },
    {
      categoryName: "sport",
      color: "#4ade80",
      borderColor: "#22c55e",
      icon: <MedalIcon size={64} />
    },
    {
      categoryName: "history",
      color: "#c084fc",
      borderColor: "#a855f7",
      icon: <BookOpenTextIcon size={64} />
    },
    {
      categoryName: "animals",
      color: "#fb923c",
      borderColor: "#f97316",
      icon: <PawPrintIcon size={64} />
    }

  ]

  return (
    <main className="mt-5 md:mt-10">
      <h1 className="w-fit mx-auto text-4xl md:text-6xl font-extrabold underline tracking-tighter px-6 py-1 rounded-full border-yellow-400 border-8 bg-yellow-300">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center place-items-center md:gap-16 mt-5 md:mt-10 mx-4 md:mx-40 lg:mx-60">
        {categoryInfo.map((category) => {
          return <CategoryBadge key={`${category.categoryName}-badge`} icon={category.icon} color={category.color} borderColor={category.borderColor} category={category.categoryName} />
        })}
      </div>
    </main>
  );
}