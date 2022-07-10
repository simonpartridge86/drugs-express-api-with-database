import express from "express";
import {
  addDrug,
  getAllDrugs,
  deleteDrug,
  replaceDrug,
  updateDrug,
} from "../models/drugs.js";

export const router = express.Router();

router.get("/", async function (req, res) {
  let result = await getAllDrugs();
  res.json(result);
});

router.post("/", async function (req, res) {
  let result = await addDrug(req.body);
  res.json(result);
});

router.delete("/:id", async function (req, res) {
  let searchedId = req.params.id;
  let result = await deleteDrug(searchedId);
  res.json(result);
});

router.put("/:id", async function (req, res) {
  let searchedId = req.params.id;
  let result = await replaceDrug(searchedId, req.body);
  res.json(result);
});

router.patch("/:id", async function (req, res) {
  let searchedId = req.params.id;
  let result = await updateDrug(searchedId, req.body);
  console.log(result, req.body);
  res.json(result);
});
