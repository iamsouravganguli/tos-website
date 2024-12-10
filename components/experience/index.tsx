import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';

export const Experience = () => {
    const totalDuration = 3;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 px-4 md:px-10 lg:px-20 pb-10">
            <div className="text-center flex flex-col items-center">
                <Image src="/assets/experience/experience.png" alt="" width={150} height={200} />
                <h1 className="text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold">
                    <CountUp start={1} end={12} duration={totalDuration}/>+
                </h1>
                <p className="text-sm md:text-base text-gray-500 mt-2">Years of Experience</p>
            </div>
            <div className="text-center flex flex-col items-center">
                <Image src="/assets/experience/projects.png" alt="" width={100} height={200} />
                <h1 className="text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold">
                    <CountUp start={1} end={350} duration={totalDuration}/>+
                </h1>
                <p className="text-sm md:text-base text-gray-500 mt-2">Project Portfolio</p>
            </div>
            <div className="text-center flex flex-col items-center">
                <Image src="/assets/experience/brand.png" alt="" width={100} height={200} />
                <h1 className="text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold">
                    <CountUp start={1} end={155} duration={totalDuration}/>+
                </h1>
                <p className="text-sm md:text-base text-gray-500 mt-2">Branding Creations</p>
            </div>
            <div className="text-center flex flex-col items-center">
                <Image src="/assets/experience/digital.png" alt="" width={150} height={200} />
                <h1 className="text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold">
                    <CountUp start={1} end={125} duration={totalDuration} />+
                </h1>
                <p className="text-sm md:text-base text-gray-500 mt-2">Digital Assets</p>
            </div>
        </div>
    );
};
