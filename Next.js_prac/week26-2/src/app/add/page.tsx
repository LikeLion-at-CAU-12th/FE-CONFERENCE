"use client"; // Next.js는 기본적으로 서버 컴포넌트로 처리함. 따라서 이 코드를 통해 클라이언트 컴포넌트로 처리하고 그래야 react hook 사용 가능
import { useState } from "react";

export default function AddPage() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleAddNote = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (response.ok) {
                alert("추가되었습니다.");
                setTitle("");
                setContent("");
            } else {
                alert("실패하였습니다. 다시 시도해주세요");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Add Note</h1>
            <form onSubmit={handleAddNote}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required // 필수 입력 필드임을 나타내는 것
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
}