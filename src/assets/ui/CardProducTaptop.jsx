import img1 from "../Leptop remore/LAPTOP-TUF-6-removebg-preview.png";
import img2 from "../Leptop remore/LAPTOP-ROG-3-removebg-preview.png";
import img3 from "../Leptop remore/LEPTOP-ACER-3-removebg-preview.png";
import img4 from "../Leptop remore/LAPTOP-ROG-13-removebg-preview.png";
const CardProducTaptop = () => {
  const data = [img1, img2, img3, img4];

  return (
    <>
      <div className="bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black)]">
        <div>
          <div className="grid grid-cols-2  md:grid-cols-4 gap-4 px-7 ">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-800 hover:scale-101"
              >
                <img
                  src={item}
                  alt="Product"
                  className=" :w-100 w-full h-auto "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProducTaptop;
