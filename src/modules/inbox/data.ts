import userImageUrl1 from "../../assets/images/user1.png";
import moment from "moment";
import userImageUrl2 from "../../assets/images/user2.png";
import userImageUrl3 from "../../assets/images/user3.png";
import userImageUrl4 from "../../assets/images/user4.png";

enum MessageProvider {
  Default,
  Sms,
  Whatsapp,
  Instagram,
  Messenger,
}

export interface IUser {
  id: number;
  image?: string;
  name: string;
  location: string;
  date: string;
  provider: MessageProvider;
}

export const userList: IUser[] = [
  {
    id: 1,
    image: userImageUrl1,
    name: "Chelsea Wheeler",
    location: "Paris France",
    date: moment(new Date()).subtract(10, "m").toISOString(),
    provider: MessageProvider.Default,
  },
  {
    id: 2,
    image: userImageUrl2,
    name: "Jon Lin",
    location: "Paris France",
    date: moment(new Date()).subtract(20, "m").toISOString(),
    provider: MessageProvider.Sms,
  },
  {
    id: 3,
    image: userImageUrl3,
    name: "Elijah Neal",
    location: "Paris France",
    date: moment(new Date()).subtract(28, "m").toISOString(),
    provider: MessageProvider.Whatsapp,
  },
  {
    id: 4,
    image: userImageUrl4,
    name: "Nyah Wall",
    location: "İzmir, Turkey",
    date: moment(new Date()).subtract(4, "m").toISOString(),
    provider: MessageProvider.Instagram,
  },
  {
    id: 5,
    name: "Laurel Watts",
    location: "Paris France",
    date: moment(new Date()).subtract(8, "m").toISOString(),
    provider: MessageProvider.Messenger,
  },
  {
    id: 6,
    image: userImageUrl1,
    name: "Rudra Armstrong",
    location: "İzmir, Turkey",
    date: moment(new Date()).subtract(4, "m").toISOString(),
    provider: MessageProvider.Default,
  },
];
