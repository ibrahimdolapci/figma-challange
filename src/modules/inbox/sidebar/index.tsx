import { Layout } from "antd";
import Header from "./header";
import Conversations from "./conversations";

export default function InboxSidebar() {
  return (
    <Layout.Sider className="bg-secondary py-[5px] text-white">
      <Header />
      <Conversations />
    </Layout.Sider>
  );
}
