import Tilt from "react-parallax-tilt";
import { useParams, useNavigate } from "react-router-dom";
import { useDoc } from "../hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../config/firebase";

interface Member {
  code: string;
  email: string;
  firstName: string;
  lastName: string;
  timestamp: any;
}

export const Certificate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data] = useDoc<Member>(
    doc(db, `certificates/io/members/${params.code}`)
  );

  return (
    <section className="bg-[#202124] flex flex-col justify-center items-center min-h-screen text-white py-24">
      <Tilt gyroscope className="max-w-[900px] mx-auto">
        <div className="w-full relative rounded-lg grid place-items-center overflow-hidden">
          <p className="absolute font-google-reg text-gray-300 left-16 sm:left-24 md:left-28 lg:left-36 [font-size:clamp(14px,3vw,24px)] mb-1">
            {data.firstName} {data.lastName}
          </p>
          <img
            className="w-full pointer-events-none h-full object-cover"
            src="/images/participation.png"
            alt="PowerOn Certificate"
          />
        </div>
      </Tilt>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="h-[40px] w-[40px] text-2xl rounded-full border-2 border-white mt-8"
      >
        &larr;
      </button>
    </section>
  );
};
