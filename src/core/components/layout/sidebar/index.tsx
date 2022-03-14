import logoUrl from "../../../../assets/logo.png";
import { Layout } from "antd";
import { Navigations } from "./navigations";
import { UserMenu } from "./user-menu";

const { Sider } = Layout;

function Logo() {
  return (
    <img className="mx-auto" src={logoUrl} alt="logo" style={{ height: 35 }} />
  );
}

export function Sidebar() {
  return (
    <Sider
      collapsible
      collapsed
      className="bg-black py-6 relative"
      collapsedWidth={60}
      trigger={null}
    >
      <Logo />
      <Navigations />
      <UserMenu />
    </Sider>
  );
}
