import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <main className="font-google-reg">
      <Outlet />
    </main>
  );
};
