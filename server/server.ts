import express from 'express';
import contentRoutes from "./routes/productsRoutes"

const app = express();
app.use(express.json());

app.use("/api/content", contentRoutes);

app.listen(5000, () => console.log("Server started on port 5000"));