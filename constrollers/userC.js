import {
  reedAllUsers,
  reedUser,
  creatUser,
  userUpdate,
  deleteUser,
} from "../functions/usersF.js";

export const getAllU = async (req, res) => {
  try {
    const users = await reedAllUsers();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};
export const creatU = async (req, res) => {
  try {
    const body = req.body;
    if (body.username && body.password) {
      const users = await creatUser(body.username, body.password);
      res.send(users);

      return;
    }
    res.status(404).send("post most have username and password ");
  } catch (error) {
    console.log(error);
  }
};

export const updateU = async (req, res) => {
  try {
    const body = req.body;
    const username = req.params.username;
    if (body.key && body.value) {
      const result = await userUpdate(username, body.key, body.value);
      res.send(result);
    }
    res.status(404).send("post most have key and value ");
  } catch (error) {
    res.send(error);
  }
};

export const deleteU = async (req, res) => {
  try {
    const username = req.params.username;
    const result = await deleteUser(username);

    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

export const getOneU = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await reedUser(id);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
