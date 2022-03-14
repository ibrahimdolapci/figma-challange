import { Layout } from "antd";
import ChatInput from "./input";
import ChatList from "./list";

export default function ChatContent() {
  return (
    <Layout.Content className="flex flex-col h-full">
      <ChatList />
      <ChatInput />
    </Layout.Content>
  );
}
