import React,{useState} from 'react';
import { todoListState } from './store'
import {useSetRecoilState} from 'recoil'
import { uuid } from './tools';

export function Todo() {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  }

  const addItem = () => {
    if (inputValue) {
      setTodoList((oldValue) => [
        ...oldValue,
        {
          id: uuid(),
          from: 'React',
          value: inputValue
        }
      ]);
      setInputValue('')
    }
  }

  return (
    <section className="input-area_section">
      <div className="input-area_input">
        <input type="text" value={inputValue} onChange={onChange}/>
      </div>
      <div className="input-area-btn_div">
        <button onClick={addItem}>添加</button>
        <button>发送到 Vue</button>
        <button>发送到 Ng</button>
      </div>
    </section>
  )
}