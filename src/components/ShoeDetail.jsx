import nike1 from "../assets/n1-min.png";

const ShoeDetail = () => {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row-reverse">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="h-full flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={nike1} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
        <div className="font-medium md:text-xl">
          The Nike Air Max 270 is a life style shoe that's sure to turn head
          with its vibrant color gradient.
        </div>
        <div className="font-extrabold text-3xl md:text-6xl">$100</div>
        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add to Bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
