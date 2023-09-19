import React from 'react';

export default function AppBasic03() {
  const msg = '안녕'; // var(x), let, const
  const title = '강남영화마을'; //jsx = HTML + { } 표현식

  return (
    <div>
      Hello React !! {msg}
      <h1>
        {title} {3 + 4} {'helllo'}
      </h1>
    </div>
  );
}
