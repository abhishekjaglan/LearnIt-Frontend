import { Card } from "@material-tailwind/react"

function WelcomeBar() {
  return (
    <div className=" p-3 pt-2 pb-2 rounded-lg">
        <div className="rounded-lg w-full border-4 border-black ">
            
              <Card className="bg-white shadow-xl text-5xl font-bold p-2 pt-2 shadow-blue-gray-900/5">
                {/* <div className="text-black text-5xl font-bold p-2 pt-2"> */}
                    Welcome Abhishek
                {/* </div> */}
              </Card>

            
        </div>
    </div>
  )
}

export default WelcomeBar