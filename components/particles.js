import React, { useEffect } from "react"
import Particles from "react-tsparticles"

const ParticlesBackground = () => {
    useEffect(() => {
        // Customize the tsParticles configuration here
        const particlesConfig = {
            particles: {
                number: {
                    value: 50, // Number of particles
                },
                size: {
                    value: 3, // Size of particles
                },
                move: {
                    speed: 0.5, // Speed of particle movement
                },
            },
        }

        // Initialize tsParticles
        tsParticles.load("particles-container", particlesConfig)
    }, [])

    return (
        <div
            id="particles-container"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }}
        ></div>
    )
}

export default ParticlesBackground
