import {
  creatAgent,
  deleteAgent,
  reedAgent,
  reedAllAgents,
  update,
} from "../functions/agentF.js";

export const getAllA = async (req, res) => {
  const agents = await reedAllAgents();
  res.send(agents);
};

export const getAgent = async (req, res) => {
  const id = req.params.id;
  const agent = await reedAgent(id);
  res.send(agent);
};

export const creatA = async (req, res) => {
  try {
    const agentData = req.body;
    if (!agentData.name || !agentData.nickname || !agentData.password) {
      res.send("agent most have name nickname and password");
      return;
    }
    const agent = await creatAgent(
      agentData.name,
      agentData.nickname,
      agentData.password
    );
    console.log(agent);
    res.send(agent);
  } catch (error) {
    res.status(401).send("user all redy exsist");
  }
};

export const updateA = async (req, res) => {
  try {
    console.log("aaa");

    const id = req.params.id;
    const agentData = req.body;
    const result = await update(id, agentData.key, agentData.value);
    res.send(result);
  } catch (error) {
    console.log();

    res.status(401).send(error.msg || "update error");
  }
};

export const deleteA = async (req, res) => {
  try {
    console.log('sss');
    
    const id = req.params.id;
    await deleteAgent(id);
    res.send(true);
  } catch (error) {
    console.log();

    res.status(401).send(error.msg || "no agent have this id");
  }
};
