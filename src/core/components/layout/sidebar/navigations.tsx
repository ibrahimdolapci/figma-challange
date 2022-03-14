import { Badge, Menu } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as MessagesIcon } from "../../../../assets/images/icons/messages.svg";
import { ReactComponent as UsersIcon } from "../../../../assets/images/icons/user-book.svg";
import { ReactComponent as UserGroupsIcon } from "../../../../assets/images/icons/users.svg";
import { ReactComponent as BotIcon } from "../../../../assets/images/icons/bot.svg";
import { ReactComponent as DiagramIcon } from "../../../../assets/images/icons/diagram.svg";
import { ReactComponent as AnalysisIcon } from "../../../../assets/images/icons/analysis.svg";
import { ReactComponent as SettingsIcon } from "../../../../assets/images/icons/settings.svg";

const navigations = [
  {
    id: "inbox",
    title: "Inbox",
    icon: MessagesIcon,
    badge: 20,
  },
  {
    id: "users",
    title: "Users",
    icon: UsersIcon,
  },
  {
    id: "user-groups",
    title: "User Groups",
    icon: UserGroupsIcon,
  },
  {
    id: "bot",
    title: "Bot",
    icon: BotIcon,
  },
  {
    id: "diagram",
    title: "Diagram",
    icon: DiagramIcon,
  },
  {
    id: "analysis",
    title: "Analysis",
    icon: AnalysisIcon,
  },
  {
    id: "settings",
    title: "Settings",
    icon: SettingsIcon,
  },
];

export function Navigations() {
  return (
    <Menu theme="dark" mode="inline" className="bg-transparent mt-10">
      {navigations.map((item) => (
        <Menu.Item
          className="mb-4 px-4 bg-transparent"
          key={item.id}
          icon={
            <Badge
              count={item.badge}
              offset={[0, 10]}
              style={{ borderRadius: 5, boxShadow: "none" }}
            >
              <Icon className="text-2xl leading-0" component={item.icon} />
            </Badge>
          }
        >
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );
}
