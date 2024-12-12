// src/app/congratulations.tsx
const Congrats = () => {
  return (
    <div className="container flex items-center rounded-lg shadow-lg bg-beige bg-cover justify-center">
      <div className="p-8  text-center">
           <h1 className="mt-4 text-lg">You have successfully completed the task.</h1>
          <button
           
            className="mt-6 px-6 py-2 bg-vineopink text-white rounded-lg hover:bg-red-400 focus:outline-none"
          >
            Register
          </button>
        </div>
    </div>
  );
};

export default Congrats;
