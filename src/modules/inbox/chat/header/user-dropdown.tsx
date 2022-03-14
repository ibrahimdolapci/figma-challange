import { Avatar, Dropdown, Menu, Tooltip } from "antd";
import { userList } from "../../data";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { UserAvatar } from "../../../../core/components/user-avatar";

const userMenu = (
  <Menu>
    {userList.map((user) => (
      <Menu.Item key={user.id}>{user.name}</Menu.Item>
    ))}
  </Menu>
);

export function UserDropdown() {
  return (
    <Dropdown trigger={["click"]} overlay={userMenu}>
      <div className="flex justify-center items-center w-[120px] border border-black/20 rounded drop-shadow-sm h-10 padding">
        <Avatar.Group maxCount={3}>
          {userList.slice(3).map((user) => (
            <Tooltip key={user.id} title={user.name} placement="bottom">
              <UserAvatar {...user} size={26} />
            </Tooltip>
          ))}
        </Avatar.Group>
        <DownOutlined className="text-xs ml-2.5" />
      </div>
    </Dropdown>
  );
}
