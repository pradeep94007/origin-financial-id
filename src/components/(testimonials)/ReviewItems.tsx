import { FaStar } from "react-icons/fa";

export default function ReviewItems({ data }: any) {
  return (
    <div className="px-2 pt-8 pb-0">
      <div className="flex gap-1 text-xl">
        {Array(data?.rating)
          .fill(data?.rating)
          .map((i, idx) => {
            return <FaStar className="text-purple" />;
          })}
      </div>
      <p className="text-dark text-md mt-4 min-h-[140px]">
        {data?.description}
      </p>
      <h1 className="text-xl font-bold mt-6">{data?.name}</h1>
      <p className="text-dark text-sm">{data?.role}</p>
    </div>
  );
}
