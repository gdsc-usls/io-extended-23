import { useState } from "react";
import { useNavigate } from "react-router-dom";
import rainbow from "/images/rainbow.svg";
// import ioLogo from "/images/google-io-logo.svg";
import ioLogo from "/images/io-logo.svg";

function App() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  return (
    <section className="bg-[#202124] text-white h-screen grid place-items-center xl:px-20 py-5 px-5 sm:px-10 md:px-14">
      <div className="xl:p-20 p-10 md:p-14 pt-20 border-2 border-[#FEFEFE] rounded-2xl overflow-hidden relative w-full h-full">
        <div className="space-y-10 z-20 relative">
          <img
            src={ioLogo}
            alt="Google I/O Logo"
            className="mx-auto md:mr-auto h-[100px] lg:h-[80px] md:mx-0"
          />

          <p className="text-3xl font-google-mid whitespace-nowrap xl:text-6xl text-center lg:text-5xl sm:text-4xl md:text-left">
            Google I/O Extended <br /> Bacolod 2023
          </p>

          <p className="xl:text-2xl md:text-left text-xl text-gray-400 xl:w-1/2 md:w-3/4 lg:w-1/2 lg:text- w-full text-center xl:text-left font-google-reg">
            A series of community led tech meetups, that bring the knowledge and
            excitement of Google I/O to developers on a city level, all around
            the globe.
          </p>
          <div className="flex gap-3 md:justify-start justify-center">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="bg-[#1F1F1F] sm:max-w-[300px] font-google-reg w-full border-2 border-[#5D5D5D] py-3 px-7 rounded-md text-lg lg:text-xl"
              placeholder="Enter Code"
            />
            <button
              type="button"
              onClick={() => navigate(`certificate/${code}`)}
              className="hidden md:block text-lg  lg:text-xl transition-colors bg-[#428EFF] py-3 px-5 border-2 border-black hover:bg-[#8ab4f8]  text-black rounded-lg font-google-mid"
            >
              Get Certificate
            </button>

            <button
              onClick={() => navigate(`certificate/${code}`)}
              className="block md:hidden text-xl bg-[#428EFF] text-black border-2 border-black  py-3 px-5 rounded-lg font-google-mid"
            >
              &rarr;
            </button>
          </div>
        </div>
        <img
          src={rainbow}
          alt="Rainbow"
          className="absolute left-0 bottom-0 xl:scale-105 w-full pointer-events-none"
        />
      </div>
    </section>
  );
}

export default App;
