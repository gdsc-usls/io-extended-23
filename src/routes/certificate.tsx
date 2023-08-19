import Tilt from "react-parallax-tilt";

export const Certificate = () => {
  return (
    <section className="bg-[#202124] min-h-screen text-white grid place-items-center">
      <Tilt gyroscope className="max-w-[900px] mx-auto">
        <div className="w-full relative rounded-lg grid place-items-center overflow-hidden">
          <p className="absolute font-google-reg uppercase md:left-24">
            Josh Daniel Bañares
          </p>
          <img
            className="w-full pointer-events-none h-full object-cover"
            src="/images/participation.png"
            alt="PowerOn Certificate"
          />
        </div>
      </Tilt>
    </section>
  );
};
