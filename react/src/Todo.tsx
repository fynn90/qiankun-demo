import React,{useState} from 'react';
import { todoListState } from './store'
import {useSetRecoilState} from 'recoil'
import { uuid } from './tools';
import {MicroAppStateActions} from './store'

export function Todo() {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)
  const MicroAppStateInstance = MicroAppStateActions.getInstance()
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  }
  if (MicroAppStateInstance) {
    MicroAppStateInstance.onGlobalStateChange((newGlobalState) => {
      if (newGlobalState['react-app'].length) {
        for (const item of newGlobalState['react-app']) {
            setTodoList((oldValue) => [
              ...oldValue,
              {...item}
            ]);
        }
        MicroAppStateInstance.setGlobalState({
          'react-app': []
        });
      }
    })
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

  const sendOtherService = (serviceKey:string) => {
    if (MicroAppStateInstance.setGlobalState) {
      MicroAppStateInstance.setGlobalState({
        [serviceKey]: [{
          id: uuid(),
          from: 'React',
          value: inputValue
        }]
      });
      setInputValue('')
    }
  }

  return (
    <section className="input-area_section">
      <div className="input-area_input">
        <input type="text" placeholder="添加 TODO 项" value={inputValue} onChange={onChange}/>
      </div>
      <div className="input-area-btn_div">
        <button onClick={addItem}>添加</button>
        <button onClick={sendOtherService.bind(null,'vue-app')}>发送到 Vue</button>
        <button onClick={sendOtherService.bind(null,'ng-app')}>发送到 Ng</button>
      </div>
    </section>
  )
}