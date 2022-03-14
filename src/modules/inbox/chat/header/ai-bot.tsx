import { Dropdown, Menu, Typography } from "antd";
import { ReactComponent as BotIcon } from "../../../../assets/images/icons/ai-bot.svg";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { userList } from "../../data";

const userMenu = (
  <Menu>
    {userList.map((user) => (
      <Menu.Item key={user.id}>{user.name}</Menu.Item>
    ))}
  </Menu>
);

export function AIBot() {
  return (
    <Dropdown overlay={userMenu}>
      <div className="flex items-center w-[120px] bg-primary h-10 rounded px-4 ml-4">
        <BotIcon color="#28B6FF" className="mb-1" />
        <Typography.Text className="text-xs text-white ml-2.5 whitespace-nowrap">
          AI Bot
        </Typography.Text>
        <DownOutlined className="text-xs ml-2.5 text-white" />
      </div>
    </Dropdown>
  );
}
