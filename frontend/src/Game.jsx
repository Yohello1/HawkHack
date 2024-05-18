import Monument from "./assets/monument1.jpg"

function Game({setView}) {
  return (
    <div className="bg-slate-800 bg-cover flex flex-col items-center justify-center h-[calc(100vh-5rem)] pb-10 lg:h-auto lg:justify-normal lg:pt-10">
        <div className="text-4xl font-bold text-white">Current Target</div>
        <div className="text-xl pt-2 font-bold text-white">3 km · NE</div>
        <div className="w-9/12 pt-4 flex">
            <img src={Monument} className="pt-4 w-full"/>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-9/12 h-12 relative">
            <input
                type="file"
                name="myImage"
                className="text-center opacity-0 absolute top-0 bottom-0 left-0 right-0 m-auto z-50"
                accept="image/*"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                }}
            />
            <div className="flex flex-col justify-center itemes-center absolute top-0 bottom-0 left-0 right-0 m-auto text-white" >
                <div>Submit Image</div>
            </div>
        </button>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-9/12 h-12 lg:mb-20">
            Hint
        </button>
    </div>
  )
}

export default Game
