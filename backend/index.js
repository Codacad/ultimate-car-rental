import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})