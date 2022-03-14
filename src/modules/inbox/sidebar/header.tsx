import { CalendarOutlined, SearchOutlined } from "@ant-design/icons";
import { ReactComponent as MessagesIcon } from "../../../assets/images/icons/messages.svg";
import { Badge, Button, Space, Typography } from "antd";

export default function InboxSidebarHeader() {
  return (
    <div className="flex items-center p-5 leading-0 h-6 box-content">
      <MessagesIcon className="text-2xl" />
      <Typography.Text className="text-inherit font-bold ml-2.5">
        Inbox
      </Typography.Text>
      <Space size={20} className="ml-auto">
        <Button
          icon={<SearchOutlined />}
          type="text"
          className="text-inherit p-0 w-auto"
        />
        <Badge
          dot
          offset={[-2, 10]}
          className="text-inherit"
          style={{ boxShadow: "none", width: 8, height: 8 }}
        >
          <Button
            icon={<CalendarOutlined />}
            type="text"
            className="text-inherit p-0 w-auto"
          />
        </Badge>
      </Space>
    </div>
  );
}
