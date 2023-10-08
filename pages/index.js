// pages/index.js
import Link from "next/link"
import Cloud from "../components/cloud"

export default function Home() {
    return (
        <div className="bg-violet-100 h-screen relative">
            <Cloud className="z-0 absolute top-0 left-0 " />
            <div className="flex justify-center flex-wrap items-center space-x-4 h-full z-40">
                <div>
                    <h1 className="text-8xl text-violet-900 font-heading my-5 text-center">
                        Abroadify
                    </h1>
                    <h3 className="text-3xl text-violet-950 font-heading my-5">
                        Your dream job, at your dream location, made easier
                    </h3>

                    <div className="flex items-center justify-center w-full h-24">
                        <Link
                            href="/resume"
                            className="text-white bg-violet-900 hover:bg-white hover:text-violet-900 py-2 px-4 rounded transition duration-300 ease-in-out font-heading font-bold my-5 mx-5  drop-shadow-xl"
                        >
                            GET RESUME HELP
                        </Link>

                        <Link
                            href="/job"
                            className="text-white bg-violet-900 hover:bg-white hover:text-violet-900 py-2 px-4 rounded transition duration-300 ease-in-out font-heading font-bold my-5 mx-5  drop-shadow-xl"
                        >
                            FIND JOBS
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
