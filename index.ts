import express from "express";
import dotenv from "dotenv";
import lostItemRouter from "./routes/lostItemRoute.ts";
import foundItemRouter from "./routes/foundItemRoute.ts";
import matchItemRouter from "./routes/matchItemRoute.ts"

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT_NO || 3000;

app.get("/", (req, res) => {
    res.send({
        message: "Hello World"
    })
})

app.use("/lost-items", lostItemRouter);
app.use("/found-items", foundItemRouter);
app.use("/match-items", matchItemRouter)


app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})