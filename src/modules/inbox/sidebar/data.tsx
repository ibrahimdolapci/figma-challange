import { UserAvatar } from "../../../core/components/user-avatar";
import { userList } from "../data";
import { TeamOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { ReactComponent as BotIcon } from "../../../assets/images/icons/ai-bot.svg";
import { ReactComponent as SeturIcon } from "../../../assets/images/icons/setur.svg";
import { ReactNode } from "react";

const user = userList[0];

export interface IConversation {
  id: string;
  title: string;
  count: number;
  icon: ReactNode;
  acknowledged: boolean;
}

export const conversations: IConversation[] = [
  {
    id: "my",
    title: "My",
    count: 20,
    icon: <UserAvatar {...user} size={18} />,
    acknowledged: false,
  },
  {
    id: "unassigned",
    title: "Unassigned",
    count: 50,
    icon: <UserDeleteOutlined />,
    acknowledged: false,
  },
  {
    id: "ai-bot",
    title: "AI Bot",
    count: 0,
    icon: <BotIcon color="#2D3B45" />,
    acknowledged: true,
  },
  {
    id: "all",
    title: "All",
    count: 18,
    icon: <TeamOutlined />,
    acknowledged: true,
  },
  {
    id: "setur-team",
    title: "Setur Takım",
    count: 0,
    icon: <SeturIcon className="text-lg" />,
    acknowledged: false,
  },
];
