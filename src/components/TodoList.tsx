import React, { useEffect } from 'react'
import { UserAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'

const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit } = useTypedSelector(state => state.todo)
    const {fetchTodo, SetTodoPage} = UserAction()
    const pages = [1, 2, 3, 4, 5];
    useEffect(() => { 
        fetchTodo(page, limit)
      }, [page])

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
        <div style={{display: 'flex' }}>
            {pages.map(p => 
                <div 
                    key={p}
                    onClick={() => SetTodoPage(p)}
                    style={{border: p === page ? '1px solid grey' : 'none', padding: 5}}>
                    {p}
                </div>
            )}
        </div>
    </div>
  )
}

export default TodoList;