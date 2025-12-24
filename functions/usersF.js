import { reed_file, write_file } from "../fileHandle.js";

export async function creatUser(username, password) {
  let users = await reed_file("data/users.json");
  const user = users.find((a) => a.username == username);
  const userObj = {
    username,
    password,
  };
  if (user) {
    console.log("there no agent with this id");
    return false;
  }
  users.push(userObj);
  await write_file(users, "data/users.json");
  return users;
}

export async function reedAllUsers() {
  let reports = await reed_file("data/users.json");
  return reports;
}

export async function reedUser(username) {
  let users = await reed_file("data/users.json");
  const user = users.find((r) => r.username == username);
  return user ? user : "no user with this username";
}

export async function userUpdate(username, key, value) {
  let users = await reed_file("data/users.json");
  const user = users.find((a) => a.username == username);
  if (!user) {
    return false;
  }
  if (key == "username") {
    console.log("error");

    throw new Error({ msg: "cont change this key", status: 301 });
  }
  if (user[key]) {
    user[key] = value;
  }
  await write_file(users, "data/users.json");
  return users;
}

export async function deleteUser(username) {
  let users = await reed_file("data/users.json");
  const user = users.find((a) => a.username == username);
  const userIndex = users.indexOf(user);
  users.splice(userIndex, 1);
  await write_file(users, "data/users.json");
  return users;
}
