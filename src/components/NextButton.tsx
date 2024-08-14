"use client"

import { ChevronRight } from "lucide-react"

export default function NextButton({ handleClick }: { handleClick: React.MouseEventHandler }) {
  return (
    <div className="w-fit mx-auto mt-5 flex items-center justify-center bg-slate-300 px-6 py-4 rounded-full hover:cursor-pointer hover:bg-slate-400 border-b-4 border-slate-400 transition-all" onClick={handleClick}>
      <span className="font-bold">Next</span>
      <button><ChevronRight /></button>
    </div>

  )
}
