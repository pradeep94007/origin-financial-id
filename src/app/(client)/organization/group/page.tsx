import Header from "@/components/Header";
import Image from "next/image";

export default function page() {
  const avatars = [...new Array(6)];
  return (
    <section>
      <Header />
      <div className="w-11/12 lg:w-4/5 mx-auto p-2 py-[70px]">
        <div className="bg-slate-400 w-full h-[370px] rounded-md">
          <Image
            src={"/Assets/sneakers-image.webp"}
            alt="sneaker"
            width={1200}
            height={350}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex mt-8 align-center justify-between flex-col items-start gap-5 sm:flex-row">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Luna Sneakers Group
          </h1>
          <button className="bg-blue-500 text-white p-2 rounded-lg pt-[10px] px-4 text-sm sm:text-base">
            Join Now
          </button>
        </div>
        <p className="text-slate-700 mt-3">Public group - 2 members</p>
        <div className="flex mt-5">
          {avatars.map((_, index) => {
            let margin;
            if (index !== 0) {
              margin = 10;
            }
            return (
              <span
                key={index}
                style={{ marginLeft: margin ? `-${margin}px` : "0px" }}
                className="inline-block w-10 aspect-square rounded-full bg-slate-500 border-2"
              >
                <Image
                  src={"/Assets/avatar.webp"}
                  alt="avatar"
                  width={40}
                  height={40}
                />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
