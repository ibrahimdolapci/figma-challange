import { Button, Layout, Tooltip, Typography } from "antd";
import moment from "moment";
import { MoreOutlined } from "@ant-design/icons";
import React from "react";
import { userList } from "../../data";
import { UserDropdown } from "./user-dropdown";
import { AIBot } from "./ai-bot";
import { UserAvatar } from "../../../../core/components/user-avatar";

const user = userList[0];

export default function ChatHeader() {
  return (
    <Layout.Header className="flex justify-between px-[18px] py-4 w-full bg-white h-auto border-b">
      <div className="flex items-center">
        <UserAvatar {...user} />
        <div className="flex flex-col ml-2.5 leading-none">
          <Typography.Text strong>{user.name}</Typography.Text>
          <Typography.Text type="secondary" className="text-2xs mt-2">
            {user.location} - {moment().diff(user.date, "m")}m
          </Typography.Text>
        </div>
      </div>
      <div className="flex items-center">
        <Tooltip title="More">
          <Button
            className="mr-2"
            shape="circle"
            icon={<MoreOutlined className="text-xl" />}
            size="large"
            type="text"
          />
        </Tooltip>
        <UserDropdown />
        <AIBot />
      </div>
    </Layout.Header>
  );
}
