import img1 from "../Monitor -remoe/ROG-9-removebg-preview.png";
import img2 from "../Monitor -remoe/ROG-6-removebg-preview.png";
import img3 from "../Monitor -remoe/TUF-3-removebg-preview.png";
import img4 from "../Monitor -remoe/TUF-9-removebg-preview.png";
const CardProductMnitor = () => {
  const data = [img1, img2, img3, img4];

  return (
    <>
      <div>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4 px-7  ">
          {data.map((item, index) => (
            <div key={index} className=" bg-gray-900 rounded-2xl">
              <img
                src={item}
                alt="Product"
                className=" :w-100 w-full h-auto rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-800 hover:scale-101"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardProductMnitor;
