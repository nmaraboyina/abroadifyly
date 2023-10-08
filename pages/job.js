import Navbar from "../components/navbar"
import { useState } from "react"
import axios from "axios"
import Link from "next/link"
import countries from "../data/countries.json"

const Job = () => {
    const [country, setCountry] = useState("")
    const [profession, setProfession] = useState("")
    const [jobs, setJobs] = useState([])
    const [selectedCountry, setSelectedCountry] = useState("us")

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value)
    }

    const fetchJobs = async () => {
        try {
            const response = await axios.get(
                `/api/jobs?country=${country}&profession=${profession}&location=${selectedCountry}`
            )
            setJobs(response.data.jobs)
            console.log("res", response.data.jobs)
        } catch (error) {
            console.error(error)
        }
    }

    console.log("jobd", jobs)
    return (
        <div
            className={`bg-violet-100 ${
                jobs.length === 0 ? "h-screen" : "h-full"
            }`}
        >
            <Navbar />
            <div className="px-5 font-heading">
                <h1 className="text-3xl my-7  text-violet-950 font-bold">
                    Job Posting API
                </h1>

                <h2 className="text-xl text-violet-700 my-5">
                    {" "}
                    Step 1: Select your dream country!
                </h2>
                <select
                    className="text-black border-2 border-violet-700 rounded w-1/2 h-10"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    {countries.map((item) => (
                        <option
                            key={item.abbreviation}
                            value={item.abbreviation}
                        >
                            {item.country}
                        </option>
                    ))}
                </select>

                <h2 className="text-xl text-violet-700 my-5">
                    {" "}
                    Step 2: Add a specific location! (Optional){" "}
                </h2>
                <input
                    className="text-black border-2 border-violet-700 rounded  w-1/2 h-10"
                    type="text"
                    placeholder="Specific Location"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />

                <h2 className="text-xl text-violet-700 my-5">
                    {" "}
                    Step 3: Add Job Descriptors (Optional){" "}
                </h2>
                <input
                    className="text-black border-2 border-violet-700 rounded  w-1/2 h-10"
                    type="text"
                    placeholder="Profession"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                />

                <h2 className="text-xl text-violet-700 my-5">
                    {" "}
                    Step 4: Find Jobs!{" "}
                </h2>
                <button
                    onClick={fetchJobs}
                    className="text-white bg-violet-900 hover:bg-white hover:text-violet-900  px-4 h-10 rounded transition duration-300 ease-in-out font-heading font-bold  drop-shadow-xl"
                >
                    Search Jobs
                </button>

                <div className="grid grid-cols-3 gap-2 mt-4 h-full p-2 bg-violet-100">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white space-y-4 h-full p-3  drop-shadow-xl rounded-md"
                        >
                            <h2 className="text-2xl font-bold text-violet-950">
                                {job.title}
                            </h2>
                            <p className="text-sm text-violet-700">
                                {job.description}
                            </p>
                            <div className="flex w-full justify-end">
                                <Link
                                    href={job.redirect_url}
                                    className="px-4 py-2 bg-violet-900 hover:bg-white hover:text-violet-900 text-white rounded-md"
                                >
                                    Apply
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Job
