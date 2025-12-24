import { error } from "node:console";
import { reed_file, write_file } from "../fileHandle.js";
import { deleteReport } from "./reportsF.js";

export async function creatAgent(name, nickname, password) {
  // console.log('start');

  let agents = await reed_file("data/agents.json");
  const agent = {
    id: agents.length + 1,
    name,
    nickname,
    password,
    reportsCount: 0,
  };
  const nameCheck = agents.find((a) => a.name == name);
  if (nameCheck) {
    throw new Error({ msg: "user all redy exsist", status: 401 });
    // res.status(401).send();
    // return false;
  }
  agents.push(agent);
  await write_file(agents, "data/agents.json");
  return agent;
}

async function reedAllAgents() {
  return await reed_file("data/agents.json");
}

async function reedAgent(id) {
  const agents = await reed_file("data/agents.json");
  const agent = agents.find((a) => a.id == id);
  if (!agent) {
    return "no agent have this id";
  }
  return agent;
}
async function update(id, key, value) {
  const agents = await reed_file("data/agents.json");
  const agent = agents.find((a) => a.id == id);
  if (!agent) {
    return false;
  }
  if (key == "id" || key == "name") {
    console.log("error");

    throw new Error({ msg: "cont change this key", status: 301 });
  }
  if (agent[key]) {
    agent[key] = value;
  }
  await write_file(agents, "data/agents.json");
  return agent;
}

// To Do -- delete report of delete agent
async function deleteAgent(id) {
  const agents = await reed_file("data/agents.json");
  const reports = await reed_file("data/reports.json");
  const agentReport = reports.filter((report) => report.agentId == id);
  console.log(agentReport);
  
  agentReport.forEach((report) => {
    console.log();
    
    deleteReport(report.id);
  });
  const agent = agents.find((a) => a.id == id);
  const agentIndex = agents.indexOf(agent);
  agents.splice(agentIndex, 1);
  await write_file(agents, "data/agents.json");
}
export { reedAllAgents, reedAgent, update, deleteAgent };
