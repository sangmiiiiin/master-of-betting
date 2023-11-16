import React from 'react';
import '../../scss/header.scss';

export const Header = () => {
  return (
    <div className='headerContainer'>
      <header>
        <div className="background">
          <h1>내기의 달인</h1>
          <p>
            간단한 게임으로 복불복!<br />
            승자와 패자를 결정해보세요!
          </p>
        </div>
      </header>
    </div>
  )
}