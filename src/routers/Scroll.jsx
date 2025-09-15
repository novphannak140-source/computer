const Scroll = () => {
  return (
    <div className="w-full ">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {item.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 h-56 mx-2 snap-center"
            >
              <img
                src={src}
                alt={`Scenery ${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
