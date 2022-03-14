import { Layout } from "antd";
import Content from "./content";
import Header from "./header";

export default function Chat() {
  return (
    <Layout.Content className="flex flex-col bg-white">
      <Header />
      <Content />
    </Layout.Content>
  );
}
