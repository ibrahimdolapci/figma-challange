import { Layout } from "antd";
import Sidebar from "./sidebar";
import List from "./list";
import Chat from "./chat";

export default function Inbox() {
  return (
    <Layout className="flex-auto h-full">
      <Sidebar />
      <List />
      <Chat />
    </Layout>
  );
}
