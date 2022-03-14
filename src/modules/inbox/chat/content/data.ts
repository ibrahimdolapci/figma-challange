import { IUser, userList } from "../../data";
import moment from "moment";

export interface IChat {
  id: number;
  user: IUser;
  message: string;
  date: string;
  isSeen: boolean;
}

export const chats: IChat[] = [
  {
    id: 1,
    user: userList[0],
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu senectus non non at mauris fusce nascetur. Id ipsum a, augue amet. Elementum sit enim ut dui nisl ac. Ultrices consequat ut.",
    date: moment(new Date()).subtract(3, "m").toISOString(),
    isSeen: true,
  },
  {
    id: 2,
    user: userList[1],
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: moment(new Date()).subtract(1, "m").toISOString(),
    isSeen: true,
  },
];
