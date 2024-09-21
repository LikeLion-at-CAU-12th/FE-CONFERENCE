import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import sky from '../assets/sky.jpg';
import star from '../assets/star2.jpg'; 

function Page() {
  const cloudVisible = useScrollFadeIn(0); //페이지최상단(하늘)위치
  const starVisible = useScrollFadeIn(1); // 밤에서 별이 보이도록 

  return (
    <div>
      <div className="page sky">
        <img 
          src={sky} 
          className={`fade-in ${cloudVisible ? 'visible' : ''}`} // 구름 이미지가 보이도록
          style={{ width: '40%' }}
        />
      </div>
      <div className="page navy">
        <img 
          src={star} 
          className={`fade-in ${starVisible ? 'visible' : ''}`} // 별 이미지가 보이도록
          style={{ width: '50%' }}
        />
      </div>
    </div>
  );
}

export default Page;
