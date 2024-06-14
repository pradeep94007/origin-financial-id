import Image from "next/image";

type NameComponentPropsTypes = {
  name: string;
  sub_name: string;
  icon: string;
};

export default function NameComponent({
  name,
  sub_name,
  icon,
}: NameComponentPropsTypes) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-9 aspect-square inline-block rounded-full">
        <Image src={icon} width={36} height={36} alt="icon" className="rounded-full aspect-square"/>
      </span>
      <span className="flex flex-col">
        <h4 className="text-base font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{sub_name}</p>
      </span>
    </div>
  );
}
