// @ts-nocheck
import React, { useState } from 'react';

const Input = () => {

  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input
        type = "text"
        placeholder = "Enter Some Text"
        onChange={e => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
      /> <br />
      {inputText}

      <hr /> <br />

      <ul>
        {historyList.map(item => {
          return (
            <li>{item}</li>
          )
        })}
      </ul>
    </div>

  )
};

export default Input;