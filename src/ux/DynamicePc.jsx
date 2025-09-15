import { useNavigate, useParams } from "react-router-dom";

const DynamicePc = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const CardPC = user.find((i) => i.id === parseInt(id));
  return (
    <div>
      <div className="w-full bg-neutral-500 min-h-screen  flex items-center justify-center p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-10 right-9 md:top-85 lg:top-35 lg:right-65    md:right-10 text-gray-700 text-3xl hover:text-gray-900 transition"
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="bg-white shadow-lg rounded-xl max-w-5xl w-full grid md:grid-cols-2 gap-6 overflow-hidden">
          {/* Image Section */}
          <div className="flex items-center justify-center bg-gray-200">
            <img
              className="object-contain bg-gray-900 w-full h-full p-4 transition-transform duration-300 hover:scale-105"
              src={CardPC.image}
              alt={CardPC.brand}
            />
          </div>

          {/* Details Section */}
          <div className="p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                {CardPC.brand}
              </h2>
              <p className="text-xl text-gray-600">
                Price:{" "}
                <span className="font-semibold text-green-600">
                  {CardPC.price}
                </span>
              </p>
              <p className="text-lg text-gray-600"> {CardPC.AMD}"</p>
              <p className="text-lg text-gray-600"> {CardPC.RTX}</p>
              <p className="text-lg text-gray-600"> {CardPC.SKILL}</p>
              <p className="text-lg text-gray-600"> {CardPC.CRUCLAL}</p>
              <p className="text-lg text-gray-600"> {CardPC.THERMALRIGHT}</p>
              <p className="text-lg text-gray-600"> {CardPC.CORSAIR}</p>
            </div>

            <button className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicePc;
