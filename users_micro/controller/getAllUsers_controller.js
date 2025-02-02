import { getUsers } from "../models/getAllUsers.js";
import { getParticularUser } from "../models/getAllUsers.js";
import authenticate from "../authenticateToken.js";
import express from "express";
const app = express();
app.use(authenticate);
export function getAllUsers(req, res) {
  // console.log("inside here")
  getUsers()
    .then((data) => {
      if (data.error != undefined) {
        res.status(500).json({ error: "internal server error" });
      }
      if (data.result) {
        res.status(200).json({ data: data.result });
      }
    })
    .catch((exc) => {
      res.status(500).json({ error: "some error occured" });
    });
}

export function getPartiuser(req, res) {
  const data = req.params;

  getParticularUser(data)
    .then((data) => {
      if (data.error) {
        res.status(500).json({ error: "internal server error" });
      }
      if (data.result) {
        res.status(200).json({ result: data.result });
      }
    })
    .catch((ex) => {
      res.status(500).json({ error: "some internal error occured" });
    });
}
