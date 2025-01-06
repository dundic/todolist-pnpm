import './App.css'
import {TaskType, Todolist} from './Todolist.tsx'

// Create
// Read(view mode, sort, filter, search)
// Update
// Delete

function App() {

    const todolistTitle: string = 'What to learn'

    const todolistTasks: Array<TaskType> = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS/TS', isDone: false},
        {id: 3, title: 'REACT', isDone: false},
        {id: 4, title: 'REDUX', isDone: false},
        {id: 5, title: 'REST API', isDone: false}
    ]

    return (
            <div className={'app'}>
                <Todolist title={todolistTitle} tasks={todolistTasks} />
            </div>
    )
}

export default App
