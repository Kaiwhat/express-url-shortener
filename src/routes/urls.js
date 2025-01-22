import express from "express";
import UrlsModel from "../models/urls.js";
import db from "../database/connection.js";
import { urls } from "../database/schema.js";
import Response from "../response.js";

const router = express.Router();
const urlsmodel = new UrlsModel(db, urls);

router.post("/urls/", async (req, res) => {
	const { origin } = req.body;
	const url = await urlsmodel.create(origin);
	res.status(201).json(
		new Response({
			msg: "create url short success!",
			data: url,
		}),
	);
});

router.get("/:short", async (req, res) => {
	const short = req.params.short;
	const url = await urlsmodel.getOriginFromShort(short);
	res.redirect(url.origin);
});

export default router;
