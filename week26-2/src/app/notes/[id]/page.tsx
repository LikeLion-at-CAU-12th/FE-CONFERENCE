async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  //server 컴포넌트
  const note = await getNote(params.id);

  return (
    <div>
      <title>Note Detail</title>
      <div>
        <h2>이름 : {note.title}</h2>
        <h3>소개 : {note.content}</h3>
        <h5>참가날짜 : {note.created}</h5>
      </div>
    </div>
  );
}
