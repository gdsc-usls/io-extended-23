import rainbow from "./assets/rainbow.svg";
import ioLogo from "./assets/google-io-logo.svg";

function App() {
  return (
    <section className="bg-[#202124] text-white h-screen grid place-items-center">
      <div className="border-2 border-[#FEFEFE] rounded-2xl overflow-hidden">
        <div>
          <img src={ioLogo} alt="Google I/O Logo" />
          <h1 className="font-medium text-6xl">Extended Bacolod 2023</h1>
          <div>
            <input type="text" />
            <button>Get Certificate</button>
          </div>
        </div>
        <img src={rainbow} alt="Rainbow" className="scale-105" />
      </div>
    </section>
  );
}

export default App;
