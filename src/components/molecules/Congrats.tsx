// src/app/congratulations.tsx
const Congrats = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-semibold text-green-500">Congratulations MSF!</h1>
          <p className="mt-4 text-lg">You have successfully completed the task.</p>
          <button
           
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Close
          </button>
        </div>
    </div>
  );
};

export default Congrats;
