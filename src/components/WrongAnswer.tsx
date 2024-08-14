import { X } from "lucide-react"

export default function WrongAnswer({ answerText }: { answerText: string }) {
  return (
    <div className="answer w-80 md:w-96 p-4 text-center text-xl md:text-2xl font-bold tracking-tight bg-red-300 rounded-lg border-red-400 border-b-8">
      <span className="flex justify-center items-center gap-2">{answerText}<X /></span>
    </div>
  )
}
