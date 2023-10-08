// pages/question.js
import { useState } from "react"
import axios from "axios"
//import pdfjsLib from 'pdfjs-dist/webpack';
import Navbar from "../components/navbar"
//const pdfjsLib = require('pdfjs-dist/webpack');

const Question = () => {
    const [question, setQuestion] = useState("")
    const [response, setResponse] = useState("")
    const [pdfUrl, setPdfUrl] = useState("")
    const [pdfText, setPdfText] = useState("")

    //pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const apiKey = `${process.env.NEXT_PUBLIC_OPEN_AI_KEY}`
            const response = await axios.post(
                "https://api.openai.com/v1/engines/text-davinci-002/completions",
                {
                    prompt: `Review the following resume and provide recommendations. It should be fitted for more global and international jobs. Write at least 250 words. \n${question}`,
                    max_tokens: 1600, // You can adjust the response length as needed
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            )

            console.log(response.data.choices)
            setResponse(response.data.choices[0].text)
        } catch (error) {
            console.error("Error:", error)
        }
    }

    return (
        <div className="overflow-hidden  h-screen">
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen bg-violet-100 ">
                <h2 className="text-violet-950 mx-5 text-xl mb-5 font-heading">
                    Input your resume text here and get real AI generated
                    responses to craft the perfect global resume!
                </h2>
                <div className="flex w-full h-[90%]">
                    <div className="w-1/2 h-[90%] pr-2">
                        <textarea
                            type="text"
                            placeholder="Input Resume Text Here!"
                            value={question}
                            onChange={handleQuestionChange}
                            className="w-[100%] h-[90%] px-2 py-1 mx-5  text-black border-2 border-violet-700 rounded-lg"
                        />
                        <button
                            onClick={handleSubmit}
                            className="bg-violet-900 w-[100%] text-white rounded px-4 py-2 mx-5  hover:bg-white hover:text-violet-900 font-heading font-bold"
                        >
                            Submit
                        </button>
                    </div>
                    {response && (
                        <div className="w-1/2  mx-5 bg-violet-300 px-5 py-3">
                            <h2 className="text-2xl text-violet-950 font-heading">
                                Response:
                            </h2>
                            <p className="text-violet-900 font-heading">{response}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Question
