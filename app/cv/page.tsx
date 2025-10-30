import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Currículum - Jose Mª Lopez Villena",
  description: "Currículum vitae de Jose Maria Lopez Villena, Backend Developer",
}

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white">
      <iframe
        src="/cv/CurrículumLopezVillenaJoseMª.pdf"
        className="w-full h-screen border-0"
        title="Currículum Vitae de Jose Maria Lopez Villena"
      />
    </div>
  )
}
