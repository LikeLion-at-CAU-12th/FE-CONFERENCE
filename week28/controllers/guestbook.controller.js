import GuestBook from "../models/guestbook.model.js";

export const getAllEntries = async (req, res) => {
    try {
        const entries = await GuestBook.find();
        //res.status(200).json(entries);
        res.render("guestbook", {entries});
    } catch (error) {
        res.status(500).json({ message: "에러 발생", error });
    }
}
export const getEntryById = async (req, res) => {
    const { id } = req.params;
    try {
        const entry = await GuestBook.findById(id);
        if(!entry){
            res.status(404).json({message: "방명록이 존재하지 않습니다."});
        }
        res.status(200).json({message: "특정 방명록 조회 성공"});
    } catch (error) {
        res.status(500).json({ message: "에러 발생", error });
    }
}
export const createEntry = async (req, res) => {
    const { author, message } = req.body;
    try {
        const newEntry = new GuestBook({ author, message });
        await newEntry.save();
        //res.status(201).json({message: "방명록 추가 성공"});
        res.redirect("/guestbook");
    } catch (error) {
        res.status(500).json({ message: "에러 발생", error });
    }
}
export const deleteEntry = async (req, res) => {
    const { id } = req.params;  // URL에서 ID 가져오기
  
    try {
      const result = await GuestBook.findByIdAndDelete(id);  // 해당 ID의 항목 삭제
      if (!result) {
        return res.status(404).json({ error: 'Message not found' });
      }
      res.status(200).json({ success: true, message: 'Message deleted successfully' });
    } catch (error) {
      console.error('Error deleting message:', error);
      res.status(500).json({ error: 'Failed to delete message' });
    }
  };
  

// 수정된 데이터 처리
export const updateEntry = async (req, res) => {
    const { id } = req.params;
    const { author, message } = req.body;
    try {
        await GuestBook.findByIdAndUpdate(id, { author, message });
        res.status(200).json({ message: "방명록 수정 성공" });
        res.redirect('/guestbook');  // 수정 후 방명록 페이지로 리다이렉트
    } catch (error) {
        res.status(500).json({ message: "에러 발생", error });
    }
}
