import {
  creatRport,
  deleteReport,
  reedAllReports,
  reedReport,
  reportUpdate,
} from "../functions/reportsF.js";

export const creatR = async (req, res) => {
  try {
    const body = req.body;
    if (body.content && body.agentId) {
      const reports = await creatRport(body.content, body.agentId);
      res.send(reports);

      return;
    }
    res.status(404).send("post most have content and agentId ");
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const reports = await reedAllReports();
    res.send(reports);
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await reedReport(id);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateR = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    if (body.key && body.value) {
      const result = await reportUpdate(id, body.key, body.value);
      res.send(result);

      return;
    }
    res.status(404).send("post most have content and agentId ");
  } catch (error) {
    res.send(error);
  }
};
export const deleteR = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteReport(id);

    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
