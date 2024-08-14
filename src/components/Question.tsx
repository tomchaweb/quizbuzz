export default function Question({ questionText }: { questionText: string }) {
  return (
    <div className="question w-[75vw] md:w-[50vw] p-4 text-center text-xl md:text-2xl font-bold tracking-tight bg-yellow-300 rounded-lg border-yellow-400 border-b-8">
      <span>{questionText}</span>
    </div>
  )
}
