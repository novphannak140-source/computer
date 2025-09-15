import img1 from "../Headphone - remore/w-6-removebg-preview.png";
import img2 from "../Headphone - remore/w-4-removebg-preview.png";
import img3 from "../Headphone - remore/w-12-removebg-preview.png";
import img4 from "../Headphone - remore/w-2-removebg-preview.png";
const CardProductHeadphone = () => {
  const data = [img1, img2, img3, img4];

  return (
    <>
      <div>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4 px-7 ">
          {data.map((item, index) => (
            <div
              key={index}
              className=" bg-gray-900 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-800 hover:scale-101"
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
    </>
  );
};

export default CardProductHeadphone;
