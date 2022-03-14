import { ReactComponent as PlusCircleIcon } from "../../../../assets/images/icons/plus-circle.svg";
import { ReactComponent as SmileIcon } from "../../../../assets/images/icons/smile.svg";
import { Divider, Input } from "antd";

export default function ChatInput() {
  return (
    <div className="h-12 border border-gray-light shadow-md rounded my-5 mx-3 flex items-center px-3">
      <PlusCircleIcon />
      <div className="py-1.5 h-full">
        <Divider type="vertical" className="h-full mx-4" />
      </div>
      <Input
        className="flex-auto p-0"
        placeholder="Reply to Rudra Armstrong"
        bordered={false}
        suffix={<SmileIcon />}
      />
    </div>
  );
}
