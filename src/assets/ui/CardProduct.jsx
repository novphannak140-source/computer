import img1 from "../Monitor -remoe/ROG-11-removebg-preview.png";
import img2 from "../Mouse remore/MOUSE-ZIYOULANG-2-removebg-preview.png";
import img3 from "../Leptop remore/LAPTOP-ROG-8-removebg-preview.png";
import img4 from "../Teble -remore/ALPLUS-TABLE-GAMING-11-removebg-preview (1).png";
import img5 from "../Desk top -reome/cas-6-removebg-preview.png";
import img6 from "../Headphone - remore/w-2-removebg-preview.png";
import img7 from "../Rtx-remore/RTX--TUF-4-removebg-preview.png";
import img8 from "../Mouse remore/MOUSE-ZIYOULANG-6-removebg-preview.png";
import img9 from "../Desk top -reome/cas-34-removebg-preview.png";
import img10 from "../keyboark  Bran Akko/AKKO-KEYBOARD-19-removebg-preview.png";

const CardProduct = () => {
  const item = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <>
      <div className="bg-[radial-gradient(circle,black,#1A120B,black,#1A120B,black,#3C2A21,black)]">
        <div className="w-full my-5 ">
          <div className="w-full max-w-8xl  mx-auto px-7 ">
            <div className="flex overflow-x-auto   snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {item.map((src, index) => (
                <div
                  key={index}
                  className=" flex-shrink-0    rounded-2xl bg-gray-900 flex items-center justify-centers w-80 h-50 md:h-70  lg:w-90 lg:h-90 mx-2 my-3 snap-center  snap-always transition-all duration-300 hover:scale-102"
                >
                  <img
                    src={src}
                    alt={`Scenery ${index}`}
                    className="w-full h-full object-cover  "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
