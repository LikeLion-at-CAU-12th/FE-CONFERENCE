"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import Head from 'next/head';

export default function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
      });
      
      if (response.ok) {
        setTitle('');
        setContent('');
        alert('노트가 성공적으로 업로드되었습니다!');
        router.push('/notes');  
      } else {
        alert('노트 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error uploading note:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };

  return (
    <>
     < Head>
        <title>Notes App</title>
        <meta name="description" content="나 교수인데..듣고싶은 말을 적어보세요." />
        <meta name="keywords" content="Next.js, PocketBase, SEO" />
        <meta property="og:title" content="Notes App" />
        <meta property="og:description" content="나 교수인데..듣고싶은 말을 적어보세요." />
        <meta property="og:type" content="website" />
      </Head>
    <div>
      <h1>나 교수인데 Notes봐라</h1>
      <p>week26 - next.js 13 실습하기</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">노트 업로드</button>
      </form>
    </div>
    </>
  );
}
