import { useNavigate, useParams } from "react-router-dom";

const DynamiceLaptop = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const CardLaptop = user.find((i) => i.id === parseInt(id));
  return (
    <div>
      <div className="w-full bg-neutral-500 min-h-screen  flex items-center justify-center p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-10 right-9 md:top-20  md:right-65 text-gray-700 text-3xl hover:text-gray-900 transition"
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="bg-white shadow-lg h-auto rounded-xl max-w-5xl w-full grid md:grid-cols-2 gap-6 overflow-hidden">
          {/* Image Section */}
          <div className="flex items-center justify-center bg-gray-200">
            <img
              className="object-contain bg-gray-900 w-full h-full p-4 transition-transform duration-300 hover:scale-105"
              src={CardLaptop.image}
              alt={CardLaptop.brand}
            />
          </div>

          {/* Details Section */}
          <div className="p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                {CardLaptop.brand}
              </h2>
              <p className="text-xl text-gray-600">
                Price:{" "}
                <span className="font-semibold text-green-600">
                  {CardLaptop.Price}
                </span>
              </p>
              <p className="text-lg text-gray-600">CPU : {CardLaptop.CPU}"</p>
              <p className="text-lg text-gray-600">Rem : {CardLaptop.REM}"</p>
              <p className="text-lg text-gray-600">
                Storage : {CardLaptop.Storage}"
              </p>
              <p className="text-lg text-gray-600">
                Display: {CardLaptop.Display}"
              </p>
              <p className="text-lg text-gray-600">
                Storage : {CardLaptop.Storage}"
              </p>
              <p className="text-lg text-gray-600">OS : {CardLaptop.OS}"</p>
              <p className="text-lg text-gray-600">
                Battery : {CardLaptop.Battery}"
              </p>
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

export default DynamiceLaptop;
