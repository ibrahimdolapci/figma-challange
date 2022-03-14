import { Sidebar } from "./sidebar";
import { Content } from "./content";

export function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Content />
    </div>
  );
}
