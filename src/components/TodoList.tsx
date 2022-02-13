import React, { useEffect } from 'react'
import { UserAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'

const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit } = useTypedSelector(state => state.todo)
    const {fetchTodo} = UserAction()
    
    useEffect(() => {
        fetchTodo(page, limit)
      }, [])

    if(loading) {
        return <h1>Идет загрузка... </h1>
      }
  
    if(error) {
    return <h1>{error}</h1>
    }

  return (
    <div>
        {todos.map(todo => (
          <div key={todo.id}>{todo.id} - {todo.title}</div>)
        )}
    </div>
  )
}

export default TodoList;