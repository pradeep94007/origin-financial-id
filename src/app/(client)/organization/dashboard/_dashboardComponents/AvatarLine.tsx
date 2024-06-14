import Image from "next/image";

export default function AvatarLine({
  avatarNumbers,
  totalMembers,
}: {
  avatarNumbers: number;
  totalMembers: number;
}) {
  if (avatarNumbers > 5) {
    return (
      <div className="flex items-center">
        {[...new Array(avatarNumbers)].splice(0, 5).map((_, index) => {
          let margin;
          if (index !== 0) {
            margin = 5;
          }
          return (
            <span
              key={index}
              style={{ marginLeft: margin ? `-${margin}px` : "0px" }}
              className="inline-block w-8 rounded-full border-white border-2 aspect-square"
            >
              <Image
                src={"https://picsum.photos/24"}
                width={36}
                height={36}
                alt="icon"
                className="rounded-full aspect-square"
              />
            </span>
          );
        })}
        <span>+ {avatarNumbers - 5}</span>
      </div>
    );
  }
  return (
    <div>
      {[...new Array(avatarNumbers)].map((_, index) => {
        let margin;
        if (index !== 0) {
          margin = 5;
        }
        return (
          <span
            key={index}
            style={{ marginLeft: margin ? `-${margin}px` : "0px" }}
            className="inline-block w-8 rounded-full border-white border-2 aspect-square"
          >
            <Image
              src={"https://picsum.photos/24"}
              width={36}
              height={36}
              alt="icon"
              className="rounded-full aspect-square"
            />
          </span>
        );
      })}
    </div>
  );
}
