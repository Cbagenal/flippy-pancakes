import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center h-screen ">
      <div className="w-full">


        <div className="h-[300px] bg-[#3B3B3B] rounded-b-md">

          <div className="pl-6 text-white">
            <p className="text-[32px] pt-4 text white">Flippy Pancakes</p>
            <p className="text-[24px]">Welcome, Callum</p>            
          </div>

          <div className="flex gap-8 justify-center mt-[102px] ">
            <div className="flex items-end justify-center bg-neutral-400 w-[150px] h-[150px] rounded-lg">
              <p className="text-[20px] pb-4">Takeaway</p>
            </div>

            <div className="flex items-end justify-center bg-neutral-400 w-[150px] h-[150px] rounded-lg">
              <p className="text-[20px] pb-4">Delivery</p>
            </div>

          </div>

            <div  className="flex justify-center px-7 pt-9">
              <div className="bg-neutral-400 w-full h-[100px] rounded-[10px] p-3">
                <p className="text-[20px]">Loyalty card</p>
                <p> Callum Bagenal</p>
                <p>Points: 1342</p>
              </div>
            </div>

            <div>
              <p className="pl-7 pt-6 mb-2 text-[24px]">Offers</p>
              <div className="flex flex-col justify-center gap-4 px-4">
                <div className="w-full h-[100px] bg-[#3B3B3B] rounded-[18px] p-3">
                  <p className="text-white text-[16px]">Example offer 1</p>
                  <p className="text-white opacity-50 text-[16px]">Description....</p>
                </div>

                <div className="w-full h-[100px] bg-[#3B3B3B] rounded-[18px] p-3">
                  <p className="text-white text-[16px]">Example offer 1</p>
                  <p className="text-white opacity-50 text-[16px]">Description....</p>
                </div>

                 <div className="w-full h-[100px] bg-[#3B3B3B] rounded-[18px] p-3">
                  <p className="text-white text-[16px]">Example offer 1</p>
                  <p className="text-white opacity-50 text-[16px]">Description....</p>
                </div>

                <div className="w-full h-[100px] bg-[#3B3B3B] rounded-[18px] p-3">
                  <p className="text-white text-[16px]">Example offer 1</p>
                  <p className="text-white opacity-50 text-[16px]">Description....</p>
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
