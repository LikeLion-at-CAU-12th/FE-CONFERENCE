import express from 'express';
import { getAllEntries, getEntryById, createEntry, deleteEntry, updateEntry } from '../controllers/guestbook.controller.js';

const router = express.Router();  // 라우터 생성

router.get('/', getAllEntries);
router.get('/:id', getEntryById);
router.post('/', createEntry);
router.delete('/:id', deleteEntry);
router.put('/:id', updateEntry);

export default router; // 라우터 내보내기