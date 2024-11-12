import express from "express"; // Import express
import guestbookRouter from "./routes/guestbook.route.js"; // Import the guestbook router
import mongoose from "mongoose"; // Import mongoose
import dotenv from "dotenv"; // Import dotenv
import path from "path";

dotenv.config(); // Configure dotenv

const app = express(); // Create an express app
const PORT = process.env.PORT; // Set the PORT
const MONGODB_URI = process.env.MONGODB_URI; // Set the MongoDB URI

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB 연결 성공"))
  .catch((err) => console.error("MongoDB 연결 오류:", err));

// app.listen() 메소드를 사용하여 서버를 실행할 수 있습니다.
app.listen(PORT,()=>{
    console.log(`서버가 ${PORT}번 포트에서 실행중입니다.`);
});

//미들웨어
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(process.cwd(), "public")));

app.use('/guestbook', guestbookRouter); // 라우터를 사용할 수 있도록 설정
//요청을 json으로 변환, body도 json으로 볼 수 있음.

//위치가 중요함. 라우터 설정 전에 위치해야함.