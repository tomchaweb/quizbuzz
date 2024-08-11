export default function Answer({ answerText, handleClick }: { answerText: string, handleClick?: React.MouseEventHandler }) {
  return (
    <div onClick={handleClick} className="answer w-96 p-4 text-center text-2xl font-bold tracking-tight bg-blue-300 rounded-lg border-blue-400 border-b-8 hover:bg-blue-400 hover:cursor-pointer transition-all">
      <span>{answerText}</span>
    </div>
  )
}
