import Tilt from "react-parallax-tilt";
import { toPng } from "html-to-image";
import { useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { db } from "../config/firebase";
import { doc } from "firebase/firestore";
import { useDoc } from "../hooks/firestore";

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
  const [data] = useDoc<Omit<Member & { id: string }, "code">>(
    doc(db, `certificates/io/members/${params.code}`)
  );

  const cardRef = useRef<HTMLDivElement>(null);

  const saveImage = useCallback(() => {
    if (cardRef.current === null) {
      return;
    }

    toPng(cardRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${data?.id}_${data.firstName}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardRef, data]);

  return (
    <section className="bg-[#202124] flex flex-col justify-center items-center min-h-screen text-white py-24">
      {data.email ? (
        <div ref={cardRef}>
          <Tilt gyroscope className="max-w-[900px] mx-auto">
            <div className="w-full relative grid place-items-center overflow-hidden">
              <p className="absolute font-google-reg text-gray-300 left-16 sm:left-24 md:left-28 lg:left-36 [font-size:clamp(14px,3vw,24px)] mb-1">
                {data.firstName} {data.lastName}
              </p>
              <img
                className="w-full pointer-events-none h-full object-cover"
                src="/images/attendee.png"
                alt="PowerOn Certificate"
              />
            </div>
          </Tilt>
        </div>
      ) : (
        <h1>Certificate not found</h1>
      )}
      <div className="flex gap-x-2 text-sm font-google-mid mt-12">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="border border-secondary-200 rounded-l-full px-8 py-3 hover:scale-105 transform transition-all duration-200 bg-secondary-300 bg-opacity-60"
        >
          &larr; &nbsp; Back
        </button>
        <button
          type="button"
          onClick={saveImage}
          className="border border-secondary-200 rounded-r-full px-8 py-3 hover:scale-105 transform transition-all duration-200 bg-secondary-300 bg-opacity-60"
        >
          Save
        </button>
      </div>
    </section>
  );
};
