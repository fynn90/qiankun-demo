import React from 'react'
import { useRecoilState } from "recoil";
import {todoListState} from './store'

export function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const deleteItem = (id) => {
    const newList = todoList.filter((v) => v.id !== id);
    setTodoList(newList)
  }
  return (
    <section className="todoList_section">
      {
        todoList.map((item) => (
          <div className="todoList-item_div" key={item.id}>
            <div className="todoList-item-value_div">{item.value}</div>
            <div className="todoList-item-rm_div">
              <span onClick={deleteItem.bind(null,item.id)}>移除</span>
            </div>
          </div>
        ))
      }
    </section>
  )
}