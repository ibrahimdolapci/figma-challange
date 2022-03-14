import { Outlet } from "react-router-dom";

export function Content() {
  return (
    <div className="h-full flex-auto">
      <Outlet />
    </div>
  );
}
