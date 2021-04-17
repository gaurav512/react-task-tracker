import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Task one',
		    day: 'Feb 5',
        reminder: true
    },
    {
        id: 2,
        text: 'Task two',
		    day: 'Feb 11',
        reminder: true
    },
    {
        id: 3,
        text: 'Task three',
		    day: 'Feb 16',
        reminder: false
    }
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No tasks to show')}
    </div>
  );
}

export default App;
