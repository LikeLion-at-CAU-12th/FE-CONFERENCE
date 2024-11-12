import GuestBook from "../models/guestbook.model.js";

export const getAllEntries = async (req,res) => {
    try{
        const entries = await GuestBook.find();
        // res.status(200).json(entries);
        res.render("guestbook",{ entries });
    }catch(error){
        res.status(500).json({message:"조회 과정에서 에러 발생",error});
    }
};
export const getEntriesById = async (req,res) => {
    const {id} = req.params;
    try{
        const entry = await GuestBook.findById(id);
        if(!entry){
            res.status(404).json({message:"해당하는 데이터가 없숨다"});
        }
        res.status(200).json({message:"특정 방명록 조회 성공"});
    }catch(error){
        res.status(500).json({message:"조회 과정에서 에러 발생",error});
    }
};
export const createEntry = async (req,res) => {
    const {author, message }= req.body;
    try{
        const newEntry = new GuestBook({author,message });
        await newEntry.save();
        // res.status(201).json({message:"방명록 생성 성공"});
        res.ridirect("/guestbook");
    }catch(error){
        res.status(500).json({message:"조회 과정에서 에러 발생",error});
    }
};

export const deleteEntryByID = async (req, res) => {
    const {id} = req.params;

    try{
        const result = await GuestBook.findByIdAndDelete(id);
        if (!result) { //id가 없다면
            return res.status(404).json({ message: "해당하는 데이터가 없숨다" });
        }
        res.status(200).json({ message: "삭제 성공하였습니다" });
        res.ridirect("/guestbook");
    } catch(error) {
        res.status(500).json({message: "삭제 과정에서 에러 발생", error});
    }
};