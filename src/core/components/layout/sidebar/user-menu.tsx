import Icon from "@ant-design/icons";
import { Avatar, Badge, Menu } from "antd";
import { ReactComponent as SwitchIcon } from "../../../../assets/images/icons/switch.svg";
import userImageUrl from "../../../../assets/images/user2.png";

export function UserMenu() {
  return (
    <Menu
      theme="dark"
      mode="inline"
      className="bg-transparent absolute bottom-6 w-full"
    >
      <Menu.Item
        className="mb-4 px-4 bg-transparent"
        icon={<Icon className="text-2xl leading-0" component={SwitchIcon} />}
      >
        Switch Account
      </Menu.Item>
      <Menu.Item
        className="px-4 bg-transparent"
        icon={
          <Badge dot status="success" offset={[-5.5, 30]}>
            <Avatar src={userImageUrl} size={27} />
          </Badge>
        }
      />
    </Menu>
  );
}
