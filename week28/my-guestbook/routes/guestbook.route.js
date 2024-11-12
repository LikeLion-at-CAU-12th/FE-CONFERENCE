import express from "express";
import { createEntry, deleteEntryByID, getAllEntries, getEntriesById } from "../controllers/guestbook.controller.js";
const router = express.Router();

router.get("/",getAllEntries);

router.get("/:id",getEntriesById);

router.post("/",createEntry);

router.post("/",(req,res)=>{
    // 방명록 생성
});

router.delete('/:id', deleteEntryByID); //방명록 삭제

router.patch("/:id",(req,res)=>{
    //특정 방명록 수정
});

export default router;