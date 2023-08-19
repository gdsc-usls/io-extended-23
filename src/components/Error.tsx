import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className="bg-[#202124] text-white min-h-screen relative grid place-items-center">
      <div className="z-10">
        <h1 className="text-4xl font-google">An error occured.</h1>
        <p className="text-center text-lg uppercase mt-2">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
};
