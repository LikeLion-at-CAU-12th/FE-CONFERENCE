document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.entry').forEach(entry => {
    const author = entry.querySelector('.author').innerText;
    const message = entry.querySelector('.message').innerText;

    const editButton = document.createElement('button');
    editButton.innerText = '수정';
    editButton.addEventListener('click', () => {
      const newMessage = prompt('새 메세지를 입력하세요:', message);
      if (newMessage) {
        fetch(`/guestbook/${id}`, {  // ID를 URL에 추가
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ author, message: newMessage })
        }).then(response => {
          if (response.ok) {
            entry.querySelector('.message').innerText = newMessage;
          } else {
            alert('메세지 수정에 실패했습니다.');
          }
        });
      }
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.addEventListener('click', () => {
      if (confirm('정말 삭제하시겠습니까?')) {
        fetch(`/guestbook/${id}`, {  // ID를 URL에 추가
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ author, message })
        }).then(response => {
          if (response.ok) {
            entry.remove();
          } else {
            alert('메세지 삭제에 실패했습니다.');
          }
        });
      }
    });

    entry.appendChild(editButton);
    entry.appendChild(deleteButton);
  });
});
