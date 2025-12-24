import { reed_file } from "../fileHandle.js";

export default async function aoth(req, res, next) {
  const username = req.headers["x-username"];
  const password = req.headers["x-password"];
  const users = await reed_file("./data/users.json");

  const myUser = users.find(
    (user) => user.username == username && user.password == password
  );
  console.log("myUser: ", myUser);
  if (!myUser) {
    next({ msg: "Unauthorized", status: 401 });
  }
  next();
}
