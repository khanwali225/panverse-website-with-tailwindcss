import CoreTracks from "@/components/widgets/CoreTracks"
import Hero from "@/components/widgets/Hero"
import ProgramOutcome from "@/components/widgets/ProgramOutcome"
import SpecializedTracks from "@/components/widgets/SpecializedTracks"

export default function Home() {
  return (
    <>
      <main>

        <Hero />
        <CoreTracks />
        <SpecializedTracks />
        <ProgramOutcome />

      </main>
    </>
  )
}