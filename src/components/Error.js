import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-600">
      <h1 className="text-5xl font-bold">Oops!!!!</h1>
      <h2 className="text-2xl mt-2">Something Went Wrong</h2>
      <h3 className="text-lg mt-1">{err.status} : {err.statusText}</h3>
    </div>
  );
};

export default Error;