import { Avatar } from "antd";

export function UserAvatar({
  name,
  image,
  size = 35,
}: {
  name: string;
  image?: string;
  size?: number;
}) {
  return (
    <Avatar className="bg-black" size={size} src={image}>
      {name.match(/\b(\w)/g)?.join("")}
    </Avatar>
  );
}
