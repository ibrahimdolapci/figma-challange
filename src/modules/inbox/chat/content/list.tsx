import { Divider, Space, Typography } from "antd";
import React, { useMemo } from "react";
import { chats, IChat } from "./data";
import moment from "moment";
import { userList } from "../../data";
import { UserAvatar } from "../../../../core/components/user-avatar";

const user = userList[0];

function Chat({ chat }: { chat: IChat }) {
  const isMe = useMemo(() => chat.user.id === user.id, [chat.user.id]);

  return (
    <Space
      align="start"
      key={chat.id}
      className={`w-full ${isMe ? "flex-row" : "flex-row-reverse ml-auto"}`}
      size={18}
    >
      <UserAvatar {...chat.user} size={34} />
      <div className="flex flex-col">
        <div
          className={`rounded p-4 max-w-lg ${
            isMe ? "bg-rose" : "bg-primary/[.15]"
          }`}
        >
          {chat.message}
        </div>
        <Space className={`text-2xs mt-1 ${isMe ? "mr-auto" : "ml-auto"}`}>
          <Typography.Text type="secondary">
            {chat.isSeen && "Seen"}
          </Typography.Text>
          <Typography.Text type="secondary">
            {moment().diff(chat.date, "m")}m
          </Typography.Text>
        </Space>
      </div>
    </Space>
  );
}

export default function ChatList() {
  const chatGroup = useMemo(
    () =>
      chats.reduce((acc, curr) => {
        const day = moment(curr.date).format("MMMM Do YYYY");
        acc[day] = acc[day] || [];
        acc[day].push(curr);
        return acc;
      }, {} as { [day: string]: typeof chats }),
    []
  );

  return (
    <div className="flex-auto p-4">
      {Object.entries(chatGroup).map(([day, list]) => (
        <Space direction="vertical" size={20} className="w-full">
          {list.map((chat) => (
            <Chat chat={chat} />
          ))}
          <Divider className="text-2xs opacity-60">{day}</Divider>
        </Space>
      ))}
    </div>
  );
}
