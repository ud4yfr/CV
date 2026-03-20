import type { UserData } from "~/types";

const base = import.meta.env.BASE_URL;

const user: UserData = {
  name: "Uday",
  avatar: `${base}img/ui/ps2-pfp.jpg`,
  password: ""
};

export default user;
