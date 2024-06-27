import { useCallback } from "react";

import { Typography } from "@mui/material";

import Typed from 'react-typed';

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { mouseAttraction } from "../../constants/particels";

const Home = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-sky-300">
            <Typography variant="h3" className="text-gray-900"> حسام الدین موحد</Typography>
            <div className="mt-6">
                <Typed
                    strings={["Front end developer ...", "and ", "raect developer ... ",]}
                    loop
                    typeSpeed={30}
                    className="text-xl text-gray-600 "
                />
            </div>
            {/* particles  */}
            <Particles id="tsparticles" options={mouseAttraction} init={particlesInit} loaded={particlesLoaded} />
        </div>
    );
}

export default Home;