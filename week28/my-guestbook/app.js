import express from "express";
import mongoose from "mongoose";
import guestbookRouter from "./routes/guestbook.route.js";
import dotenv from "dotenv"
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB 연결 성공"))
  .catch((err) => console.error("MongoDB 연결 오류:", err));

// //미들웨어
// app.use((req,res,next)=>{
//     console.log(`요청이 온 시간 : ${new Date().toISOString()}`);
//     next(); // 뒤에 미들웨어가 라우터 작업으로 넘겨줘야함
// });
// //요청을 json으로 바꾸준다. body도 json처럼 볼 수 있음
// app.use(express.json());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(process.cwd(), "public")));

app.use('/guestbook',guestbookRouter)

//라우터
app.get("/",(req,res)=>{
    res.send("루트 경로입니닷");
});

app.get("/guestbook",(req,res)=>{
    //전체 방명록 조회
});

app.get("/guestbook/:id",(req,res)=>{
    //특정 방명록 조회
});

app.post("/guestbook/:id",(req,res)=>{
    //특정 방명록 생성
});
app.post("/guestbook",(req,res)=>{
    // 방명록 생성
});

app.delete("/guestbook/:id",(req,res)=>{
    //특정 방명록 삭제
});

app.patch("/guestbook/:id",(req,res)=>{
    //특정 방명록 수정
});

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("post입니닷");
});

app.get("/mypage",(req,res)=>{
    res.send("마이페이지 경로입니닷");
});

//서버 실행
app.listen(8080,() => {
    console.log(`${PORT} 실행`);
});