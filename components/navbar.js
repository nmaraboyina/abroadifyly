// components/Navbar.js
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-violet-800 py-2 h-20 flex items-center justify-between drop-shadow-xl">
            <div className="left-icon mx-5 k">
                <Link href="/">
                    <svg
                        width="77"
                        height="50"
                        viewBox="0 0 77 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50ZM30 44.375C33.8735 43.3715 37.3569 41.2292 40 38.225V22.5C38.6739 22.5 37.4021 21.9732 36.4645 21.0355C35.5268 20.0979 35 18.8261 35 17.5V7.675C32.6926 6.34784 30.1422 5.4977 27.5 5.175V7.5C27.5 8.82608 26.9732 10.0979 26.0355 11.0355C25.0979 11.9732 23.8261 12.5 22.5 12.5V15C22.5 16.3261 21.9732 17.5979 21.0355 18.5355C20.0979 19.4732 18.8261 20 17.5 20V25H25C26.3261 25 27.5979 25.5268 28.5355 26.4645C29.4732 27.4021 30 28.6739 30 30V44.375ZM20 44.375V37.5C18.6739 37.5 17.4021 36.9732 16.4645 36.0355C15.5268 35.0979 15 33.8261 15 32.5V30H13.75C12.7554 30 11.8016 29.6049 11.0983 28.9017C10.3951 28.1984 10 27.2446 10 26.25V20H5.625C4.30313 25.1384 5.07449 30.5913 7.7697 35.1615C10.4649 39.7316 14.8636 43.0453 20 44.375Z"
                            fill="white"
                        />
                        <mask id="path-2-inside-1_0_1" fill="white">
                            <path d="M25 0H77V50H25V0Z" />
                        </mask>
                        <path
                            d="M77 0H82V-5H77V0ZM77 50V55H82V50H77ZM25 5H77V-5H25V5ZM72 0V50H82V0H72ZM77 45H25V55H77V45Z"
                            fill="white"
                            mask="url(#path-2-inside-1_0_1)"
                        />
                        <rect
                            x="44"
                            y="10"
                            width="15"
                            height="6"
                            fill="white"
                        />
                        <rect
                            x="44"
                            y="34"
                            width="22"
                            height="6"
                            fill="white"
                        />
                        <rect
                            x="44"
                            y="22"
                            width="22"
                            height="6"
                            fill="white"
                        />
                    </svg>
                </Link>
            </div>
            <ul className="flex justify-center items-center space-x-4 h-full mx-10">
                <li className="group relative">
                    <Link
                        href="/resume"
                        className="text-white hover:bg-white hover:text-violet-800 py-2 px-4 rounded transition duration-300 ease-in-out font-heading font-bold"
                    >
                        Resume Checker
                    </Link>
                </li>
                <li className="group relative">
                    <Link
                        href="/job"
                        className="text-white hover:bg-white hover:text-violet-800 py-2 px-4 rounded transition duration-300 ease-in-out font-heading font-bold"
                    >
                        Job Search
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
