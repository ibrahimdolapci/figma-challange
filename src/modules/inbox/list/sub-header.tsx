import { Select, Typography } from "antd";
import { CaretDownOutlined, InboxOutlined } from "@ant-design/icons";

export default function SubHeader() {
  return (
    <div className="flex justify-between items-center mt-1 px-3">
      <Select
        bordered={false}
        suffixIcon={<CaretDownOutlined className="text-black" />}
        defaultValue="open"
        className="-mx-3"
      >
        <Select.Option value="open">
          <div className="flex items-center font-semibold text-xs h-full">
            <InboxOutlined className="text-lg mr-1.5" />
            <Typography.Text className="mt-0.5">Open 8</Typography.Text>
          </div>
        </Select.Option>
      </Select>
      <Select
        bordered={false}
        suffixIcon={<CaretDownOutlined className="text-black" />}
        defaultValue="newest"
        className="-mx-3"
      >
        <Select.Option value="newest">
          <div className="flex items-center font-semibold text-xs h-full">
            <Typography.Text className="mt-0.5">Newest</Typography.Text>
          </div>
        </Select.Option>
      </Select>
    </div>
  );
}
