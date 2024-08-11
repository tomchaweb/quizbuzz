import Link from "next/link";

export default function CategoryBadge({ icon, color, borderColor, category }: { icon: React.ReactNode, color: string, borderColor: string, category: string }) {

  return (
    <Link href={`/categories/${category}`} className="p-2 flex flex-col gap-2 items-center">
      <div className="flex items-center justify-center p-4 border-8 border-black rounded-full" style={{ backgroundColor: `${color}`, borderColor: `${borderColor}` }}>
        {icon}
      </div>
      <h2 className="font-bold text-2xl uppercase">{category}</h2>
    </Link>
  )
}
