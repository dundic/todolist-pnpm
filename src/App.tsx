  import './App.css'
import {TaskType, Todolist} from './Todolist.tsx'
import {useState} from 'react';
import {v1} from 'uuid';
// Create
// Read(view mode, sort, filter, search)
// Delete
// Update
export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
// Data/state => state managers => useState function

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS/TS', isDone: false},
        {id: v1(), title: 'REACT', isDone: false},
        {id: v1(), title: 'REDUX', isDone: false},
        {id: v1(), title: 'REST API', isDone: false}
    ])

    function deleteTask(taskId: string) {
        const nextRender = tasks.filter((t => t.id !== taskId))
        setTasks(nextRender)
        // setTasks(todolistTasks.filter(t => t.id !== taskId))лаконичность кода убрать переменную nextState еще вариант setTasks(prev => prev.filter(t=>t.id !== taskId))
    }

    function createTask(title: string) {
        setTasks([...tasks, {id: v1(), title, isDone: false}])
    }

    function changeTaskStatus(taskId: string, newStatus: boolean) {
        const nextState: TaskType[] = tasks.map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
        setTasks(nextState)
    }

    function getFilteredTasks(tasks: TaskType[], filterValue: FilterValueType): Array<TaskType> {
        switch (filterValue) {
            case 'active':
                return tasks.filter(t => !t.isDone)
            case 'completed':
                return tasks.filter(t => t.isDone)
            default:
                return tasks;
        }
    }

    const [filter, setFilter] = useState<FilterValueType>('all')

    function changeFilter(filter: FilterValueType) {
        setFilter(filter)
    }

    const filteredTasks: TaskType[] = getFilteredTasks(tasks, filter)

// UI
    return (
            <div className={'app'}>
                <Todolist
                        title="What to learn"
                        tasks={filteredTasks}
                        filter={filter}
                        deleteTask={deleteTask}
                        createTask={createTask}
                        changeTaskStatus={changeTaskStatus}
                        changeFilter={changeFilter}
                />
            </div>
    )
}

export default App
