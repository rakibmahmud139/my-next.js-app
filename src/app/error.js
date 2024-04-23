"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-center text-4xl text-red-500">
        Something went wrong!!!
      </h1>
      <h1 className="text-center text-2xl text-red-500">{error.message}</h1>
      <div className="text-center">
        <button
          onClick={() => reset()}
          className="btn btn-outline btn-error mt-5"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
