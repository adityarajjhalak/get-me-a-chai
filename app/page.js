import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center gap-3 flex-col text-white h-[40vh]">
      <div className="font-bold text-4xl flex justify-center items-center gap-2">Buy Me A Chai <span><img src="/source.gif" width={88}alt=""></img></span>
      </div>
      <p>
        A crowdfunding platform for creator. Get funded by your fans and followers. Start now!
      </p>
      <div>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-4 py-2.5 text-center leading-5">start here</button> 
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-4 py-2.5 text-center leading-5">Read More</button> 
      </div>
    </div>
      <div className="bg-amber-50 h-1 opacity-10">ff</div>
      <div className="text-white">
        <h1>Your fans can buy you a chai</h1>
        <div className="flex gap-5">
          <div className="">
            <img src="/wired-lineal-187-suitcase-hover-pinch.svg" width={65} alt=""></img>
            <p>Fund Yourself</p>
          </div>
        </div>
      </div>
    </>
  );
}
