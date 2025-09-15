import { useNavigate, useParams } from "react-router-dom";

const DynamiceMonitor = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const monitor = user.find((i) => i.id === parseInt(id));
  return (
    <div className="w-full bg-neutral-500 min-h-screen  flex items-center justify-center p-6 relative">
      {/* Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-18 right-9 md:top-35  md:right-65 text-gray-700 text-3xl hover:text-gray-900 transition"
      >
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div className="bg-white shadow-lg rounded-xl max-w-5xl w-full grid md:grid-cols-2 gap-6 overflow-hidden">
        {/* Image Section */}
        <div className="flex items-center justify-center bg-gray-200">
          <img
            className="object-contain bg-gray-900 w-full h-full p-4 transition-transform duration-300 hover:scale-105"
            src={monitor.image}
            alt={monitor.brand}
          />
        </div>

        {/* Details Section */}
        <div className="p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {monitor.brand}
            </h2>
            <p className="text-xl text-gray-600">
              Price:{" "}
              <span className="font-semibold text-green-600">
                {monitor.Price}
              </span>
            </p>
            <p className="text-lg text-gray-600">Size: {monitor.size}"</p>
            <p className="text-lg text-gray-600">Resolution: {monitor.full}</p>
          </div>

          <button className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamiceMonitor;
