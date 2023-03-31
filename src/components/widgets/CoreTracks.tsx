import Wrapper from "../shared/Wrapper"
import Button from "../shared/Button"
import QuarterBox from "../shared/QuarterBox"
//Images



const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1
  },
  {
    header: "Quarter II",
    description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and API's using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2
  },
  {
    header: "Quarter III",
    description: "$-101: Doller MakingBootcamp, Full-Stack Template and API Product Development",
    number: 3
  }
]


const CoreTracks = () => {
  const header = `Core Courses \n (Common in All Specializations):`

  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-md">
          {/* content */}
          <h4 className="text-teal-700 font-semibold text-xl mt-4">Program of Studies</h4>
          <h2 className="text-5xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 text-xl text-slate-600">
            Every participant of the program will start by completing the following three core courses.
          </p>
          <div className="mt-5">
            <Button text="Learn More" />
          </div>
        </div>
        {/* Boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">
          {
            CoreTrackData.map((item, i) => (
              <QuarterBox
                key={item.number}
                description={item.description}
                header={item.header}
                number={item.number}
              />

            )
            )
          }
        </div>
      </Wrapper>
    </section>
  )
}

export default CoreTracks