import { Badge, Button, Space, Typography } from "antd";
import { FolderOpenOutlined } from "@ant-design/icons";
import { ReactComponent as PlusCircleIcon } from "../../../assets/images/icons/plus-circle.svg";
import { conversations, IConversation } from "./data";
import { useState } from "react";

export default function Conversations() {
  const [selected, setSelected] = useState<IConversation>(conversations[3]);

  return (
    <>
      <div className="font-semibold">
        <Typography.Text className="text-inherit ml-5">
          Conversations
        </Typography.Text>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`flex m-0 px-5 items-center h-10 cursor-pointer ${
              selected?.id === conversation.id ? "bg-white text-secondary" : ""
            }`}
            onClick={() => setSelected(conversation)}
          >
            <div className="flex items-center">
              <div className="w-5 flex justify-end text-lg">
                {conversation.icon}
              </div>
              <span className="mx-2.5 leading-none">{conversation.title}</span>
              {!conversation.acknowledged && (
                <Badge
                  dot
                  style={{
                    boxShadow: "none",
                    width: 8,
                    height: 8,
                    transform: "none",
                  }}
                />
              )}
            </div>
            {!!conversation.count && (
              <span className="ml-auto text-xs">20</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex m-0 px-5 font-medium items-center h-10">
        <Space size={10} align="center" className="leading-0">
          <div className="w-5 mb-1 flex justify-end">
            <PlusCircleIcon />
          </div>
          <span>Create view</span>
        </Space>
      </div>
      <div className="flex m-0 px-5 font-medium items-center justify-between h-10">
        <Button
          type="text"
          className="p-0 font-medium text-white opacity-30 text-xs"
          size="small"
        >
          See 10 more
        </Button>
        <Button
          type="text"
          className="p-0 font-medium text-white opacity-30 text-xs"
          size="small"
        >
          Edit
        </Button>
      </div>
      <div className="flex m-0 px-5 font-medium items-center h-10 mt-[5px] text-white opacity-30">
        <Space size={10} align="center" className="leading-0">
          <div className="w-5 mb-1 flex justify-end">
            <FolderOpenOutlined />
          </div>
          <span>Archive</span>
        </Space>
        <span className="ml-auto text-xs">100</span>
      </div>
    </>
  );
}
