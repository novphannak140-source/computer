import img1 from "../Product/RTX ASUS 1.jpg";
import img2 from "../Product/RTX.jpg";
import img3 from "../Product/RTX ASUS 2.jpg";
import img4 from "../Product/RTX ASUS 3.jpg";
const CardpProudctRtx = () => {
  const data = [img1, img2, img3, img4];
  return (
    <>
      <div>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4 px-7 ">
          {data.map((item, index) => (
            <div key={index} className="bg-gray-900">
              <img
                src={item}
                alt="Product"
                className=" :w-100 w-full h-auto rounded-xl  transition-all duration-300 hover:shadow-xl hover:shadow-gray-900 hover:scale-101"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardpProudctRtx;
