import CoreTracks from "@/components/widgets/CoreTracks"
import Footer from "@/components/widgets/Footer"
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
        <Footer />

      </main>
    </>
  )
}