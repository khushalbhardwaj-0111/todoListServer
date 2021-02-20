import express from "express";
import path from "path";
import cors from "cors";

const app = express();

const port = process.env.PORT || 9000;

app.use(cors());

// TODO: fix this __dirname unexpected token error
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req,res) => {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
