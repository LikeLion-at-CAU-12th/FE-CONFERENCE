"use client"; // 클라이언트 컴포넌트로 설정

import Link from "next/link";
import { useState } from "react";

async function getNotes() {
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await response.json();
  return data?.items as any[];
}

export default async function NotesPages() {
  const notes = await getNotes();
  // console.log(notes);

  const handleSubmit = async (e: React.FormEvent) => {
    const title = e.currentTarget.title.value; // 'name' 속성이 'title'인 입력 필드의 값
    const content = e.currentTarget.content.value; // 'name' 속성이 'content'인 textarea의 값

    console.log(title);
    console.log(content);
    try {
      const response = await fetch(
        "http://127.0.0.1:8090/api/collections/notes/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create note");
      }

      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  };

  return (
    <div>
      <title>Notes List</title>
      <h1>명단</h1>
      <div id="listBox">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <h1>흑백요리사 참가</h1>
        <input
          type="text"
          name="title" // name 속성을 통해 이벤트 객체에서 접근
          placeholder="이름"
        />
        <textarea
          name="content" // name 속성을 통해 이벤트 객체에서 접근
          placeholder="소개"
          rows={5}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
