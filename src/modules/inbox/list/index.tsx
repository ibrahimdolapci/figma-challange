import { Layout, List, Typography } from "antd";
import { IUser, userList } from "../data";
import moment from "moment";
import Header from "./header";
import SubHeader from "./sub-header";
import { UserAvatar } from "../../../core/components/user-avatar";
import { useMemo } from "react";

const user = userList[4];

function InboxItem({ item }: { item: IUser }) {
  const isSelected = useMemo(() => user?.id === item.id, [item.id]);

  return (
    <List.Item
      className={`px-[15px] py-3 cursor-pointer ${
        isSelected ? "bg-secondary" : ""
      }`}
    >
      <List.Item.Meta
        className="items-center"
        avatar={<UserAvatar {...item} />}
        title={
          <Typography.Text
            className={isSelected ? "text-white" : "text-inherit"}
          >
            {item.name}
          </Typography.Text>
        }
        description={
          <Typography.Text
            className={`text-xs ${
              isSelected ? "text-white/60" : "text-inherit"
            }`}
            type="secondary"
          >
            {item.location} - {moment().diff(item.date, "m")}m
          </Typography.Text>
        }
      />
    </List.Item>
  );
}

export default function InboxList() {
  return (
    <Layout.Sider className="bg-white py-[5px] border-r" width={230}>
      <div className="flex flex-col">
        <Header />
        <SubHeader />
        <List
          itemLayout="horizontal"
          dataSource={userList}
          renderItem={(item) => <InboxItem item={item} />}
        />
      </div>
    </Layout.Sider>
  );
}
