export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center border border-gray-200">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          My Introduction
        </h1>

        {/* Intro Details */}
        <div className="text-left space-y-2">
          <p className="text-lg">
            <span className="font-semibold">Name:</span> Saurav Kumar Sah
          </p>
          <p className="text-lg">
            <span className="font-semibold">Roll No.:</span> 220101120062
          </p>
          <p className="text-lg">
            <span className="font-semibold">Age:</span> 20
          </p>
          <p className="text-lg">
            <span className="font-semibold">Gender:</span> Male
          </p>
        </div>

        {/* Button */}
        <button className="mt-6 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
          Know More
        </button>
      </div>
    </div>
  );
}
