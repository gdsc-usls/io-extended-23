import rainbow from "/images/rainbow.svg";
import ioLogo from "/images/google-io-logo.svg";

function App() {
  return (
    <section className="bg-[#202124] text-white h-screen grid place-items-center p-20">
      <div className="p-20 border-2 border-[#FEFEFE] rounded-2xl overflow-hidden relative w-full h-full">
        <div className="space-y-10">
          <div>
            <img src={ioLogo} alt="Google I/O Logo" />
            <h1 className="font-medium text-6xl">Extended Bacolod 2023</h1>
          </div>
          <p className="text-2xl text-gray-400 w-1/2">
            Lorem ipsum dolor sit amet consectetur. Porttitor felis neque mollis
            vel diam non massa. Diam elementum lectus.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              className="bg-[#1F1F1F] border-2 border-[#5D5D5D] py-3 px-7 rounded-md text-xl"
              placeholder="Enter Email"
            />
            <button className="text-xl bg-[#428EFF] py-3 px-10 rounded-md font-google-mid">
              Get Certificate
            </button>
          </div>
        </div>
        <img
          src={rainbow}
          alt="Rainbow"
          className="absolute left-0 bottom-0 scale-105 w-full pointer-events-none"
        />
      </div>
    </section>
  );
}

export default App;
