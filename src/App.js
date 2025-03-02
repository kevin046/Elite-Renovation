import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data, error } = await supabase
          .from('todos')
          .select('*')
          
        if (error) throw error
        setTodos(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTodos()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  )
}

export default App 