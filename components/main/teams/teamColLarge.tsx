import Link from 'next/link';
import React from 'react';

const TeamColLarge = () => {
  // Array of image URLs
  const teamImages = [
    "/assets/team/Amit.jpg",
    "/assets/team/Saurav.jpg",
    "/assets/team/Piyush.jpg",
    "/assets/team/Anuj.jpg",
    "/assets/team/Abhishek.jpg",
    "/assets/team/Amit.jpg",
  ];

  return (
    <section className="py-24 bg-light flex justify-between items-center gap-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div className="w-full lg:w-1/2">
            <h2 className="font-manrope text-5xl text-[#02077d] font-bold leading-[4rem] mb-7 text-center lg:text-left">
              Our leading, strong & creative team
            </h2>
            <p className="text-lg text-gray-900 mb-6 text-center lg:text-left">
              These people work on making our product best.
            </p>
            <Link href="/career">
            <button className="relative inline-flex items-center justify-center px-7 py-2 overflow-hidden tracking-tighter text-black bg-white rounded-lg border border-violet-400 group transition-all duration-300 ease-in-out">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-medium-light rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto h-full opacity-100 object-stretch"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="object-cover w-full h-full"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  ></path>
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200 group-hover:bg-medium-light transition-all duration-300 ease-in-out"></span>
              <span className="relative text-base text-center font-medium group-hover:text-white transition-colors duration-300 ease-in-out">
               Join our team
              </span>
            </button>
          </Link>
          </div>
          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl ">
            <div className="grid grid-cols-3 gap-8 ">
              {teamImages.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Team member ${index + 1}`}
                  className="w-44 md:h-52 rounded-2xl object-cover mx-auto hover:to-black hover:opacity-5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center text-center flex-col lg:flex-row mx-10">
  <div className="flex-1 p-4 lg:border-r mt-20 lg:border-gray-300 justify-center text-center items-center">
    <h1 className='text-4xl mb-4 flex font-bold text-center'></h1>
    <h1 className='text-3xl italic mb-4 flex  flex-col text-center '>
      <span className='font-bold mb-5 text-4xl'>Innovative custom solutions</span>
      We build custom applications for startups, enterprises, B2B, and B2C to meet your goals and exceed your expectations for success.
    </h1>
  </div>

  <div className="flex-1 p-4 bottom-0">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="relative col-span-1">
        <div className="group relative block rounded-xl overflow-hidden focus:outline-none">
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 group-focus:scale-105 w-full transition-transform duration-500 ease-in-out rounded-xl object-cover" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3481&q=80" alt="Image Description"/>
          </div>
          <div className="absolute bottom-0 left-0 right-0 transform p-2">
            <div className="font-semibold flex justify-center text-center items-center text-gray-800 rounded-lg bg-white p-2 dark:bg-neutral-800 dark:text-neutral-200">
              <p>Workplace personalities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-10">
        <div className="group relative block rounded-xl overflow-hidden focus:outline-none">
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description"/>
          </div>
          <div className="absolute bottom-0 left-0 right-0 transform p-2">
            <div className="font-semibold text-gray-800 rounded-lg bg-white p-3 dark:bg-neutral-800 dark:text-neutral-200">
              Women in engineering
            </div>
          </div>
        </div>
      </div>

      <div className="relative col-span-1">
        <a className="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2">
            <div className="font-semibold text-gray-800 rounded-lg bg-white p-3 dark:bg-neutral-800 dark:text-neutral-200">
              Pride 2021
            </div>
          </div>
        </a>
      </div>

      <div className="relative col-span-1 -mt-10">
        <a className="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration ```javascript
            -500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Image Description"/>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2">
            <div className="font-semibold text-gray-800 rounded-lg bg-white p-3 dark:bg-neutral-800 dark:text-neutral-200">
              Data at Preline
            </div>
          </div>
        </a>
      </div>
      <div className="relative col-span-1">
        <div className="group relative block rounded-xl overflow-hidden focus:outline-none">
          <div className=" sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-cover" src="https://www.freedomiseverything.com/wp-content/uploads/2022/01/best-laptop-for-working-from-home.jpg " alt="Image Description"/>
          </div>
          <div className="absolute bottom-0 left-0 right-0 transform p-2">
            <div className="font-semibold flex justify-center text-center items-center text-gray-800 rounded-lg bg-white p-2 dark:bg-neutral-800 dark:text-neutral-200">
              <p>Visionary Leadership</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative col-span-1">
        <a className="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
          <div className=" sm:aspect-none rounded-xl overflow-hidden">
            <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/10/full/1591778382-7632.jpg?im=FeatureCrop,size=(400,465)" alt="Image Description"/>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2">
            <div className="font-semibold text-gray-800 rounded-lg bg-white p-3 dark:bg-neutral-800 dark:text-neutral-200">
              Empowered management
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div> */}


    </section>
  );
};

export default TeamColLarge;
