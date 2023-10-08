// pages/api/jobs.js
import axios from "axios"

export default async function handler(req, res) {
    const { country, profession, location } = req.query
    const apiKey = "8849adf85bef32425b587c66b2d4da67" // Replace with your Adzuna API key

    try {
        const response = await axios.get(
            `https://api.adzuna.com/v1/api/jobs/${location}/search/1`,
            {
                params: {
                    app_id: "2eeebfde",
                    app_key: apiKey,
                    where: country,
                },
            }
        )

        const jobs = response.data.results

        // console.log(jobs);

        //search by title and check if it contains the title
        if (profession) {
            const filteredJobs = jobs.filter((job) => {
                return job.description
                    .toLowerCase()
                    .includes(profession.toLowerCase())
            })
            console.log(filteredJobs)
            res.status(200).json({ jobs: filteredJobs })
            EnglanSydn
            return
            Londo
        }
        console.log(jobs)

        res.status(200).json({ jobs })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "An error occurred while fetching jobs.",
        })
    }
}
