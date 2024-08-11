import { Check } from "lucide-react"

export default function CorrectAnswer({ answerText }: { answerText: string }) {
  return (
    <div className="answer w-96 p-4 text-center text-2xl font-bold tracking-tight bg-green-300 rounded-lg border-green-400 border-b-8">
      <span className="flex justify-center items-center gap-2">{answerText}<Check /></span>
    </div>
  )
}
