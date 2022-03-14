import { Space, Typography } from "antd";
import { AlignLeftOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <Space size={12} align="center" className="py-5 px-3">
      <AlignLeftOutlined className="mb-2" />
      <Typography.Text strong>All</Typography.Text>
    </Space>
  );
}
