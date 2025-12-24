import { reed_file, write_file } from "../fileHandle.js";

export async function creatRport(content, agentId) {
  let reports = await reed_file("data/reports.json");
  let agents = await reed_file("data/agents.json");
  const agent = agents.find((a) => a.id == agentId);
  const report = {
    id: reports.length + 1,
    date: new Date().toISOString(),
    content,
    agentId,
  };
  if (!agent) {
    console.log("there no agent with this id");
    return false;
  }
  reports.push(report);
  await write_file(reports, "data/reports.json");
  return reports;
}

export async function reedAllReports() {
  let reports = await reed_file("data/reports.json");
  return reports;
}

export async function reedReport(id) {
  let reports = await reed_file("data/reports.json");
  const report = reports.find((r) => r.id == id);
  return report ? report : "no report with this id";
}

export async function reportUpdate(id, key, value) {
  const reports = await reed_file("data/reports.json");
  const report = reports.find((r) => r.id == id);
        console.log(report);

  if (!report) {
    return false;
  }
  if (key == "id" || key == "agentId") {
    console.log("error");

    throw new Error({ msg: "cont change this key", status: 301 });
  }
  if (report[key]) {
    report[key] = value;
  }
  await write_file(reports, "data/reports.json");
  return report;
}

export async function deleteReport(id) {
  
  let reports = await reed_file("data/reports.json");
  const report = reports.find((r) => r.id == id);
  console.log(report);
  const reportIndex = reports.indexOf(report);
  reports.splice(reportIndex, 1);
  await write_file(reports, "data/reports.json");
  return reports
}
