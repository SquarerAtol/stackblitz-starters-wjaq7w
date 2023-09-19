import React from 'react';

export default function AppBasic04() {
  const time = new Date().toString(); //toString 써야됨, int같은 primitive type 표현 가능

  return <div>현재 시간 : {time}</div>; // {}없이 객체 삽입시 오류
}
