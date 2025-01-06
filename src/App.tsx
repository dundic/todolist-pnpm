import './App.css'
import {TaskType, Todolist} from './Todolist.tsx'
import {useState} from 'react';


// Create
// Read(view mode, sort, filter, search)
// Update
// Delete

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
// Data/state => state managers => useState function
    const todolistTitle: string = 'What to learn'

    // const todolistTasks: Array<TaskType> = [
    //     {id: 1, title: 'HTML&CSS', isDone: true},
    //     {id: 2, title: 'JS/TS', isDone: false},
    //     {id: 3, title: 'REACT', isDone: false},
    //     {id: 4, title: 'REDUX', isDone: false},
    //     {id: 5, title: 'REST API', isDone: false}
    // ]

   const [todolistTasks, setTodolistTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS/TS', isDone: false},
        {id: 3, title: 'REACT', isDone: false},
        {id: 4, title: 'REDUX', isDone: false},
        {id: 5, title: 'REST API', isDone: false}
    ])

   const [filter, setFilter] = useState<FilterValueType>('all')

    // const result = useState<TaskType[]>(initialTasks)//функция возвращает массив из двух эл.(массив, функция)
    // const todolistTasks = result[0] так изначально выглядит результат вызова функции useState
    // const settodolistTasks = result[1]

    function deleteTask(taskId: number) {
        const nextRender = todolistTasks.filter((t => t.id !== taskId))
        setTodolistTasks(nextRender)
         // setTodolistTasks(todolistTasks.filter(t => t.id !== taskId))лаконичность кода убрать переменную nextState еще вариант setTodolistTasks(prev => prev.filter(t=>t.id !== taskId))
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

    function changeFilter(filter: FilterValueType) {
        setFilter(filter)
    }

    const filteredTasks: Array<TaskType> = getFilteredTasks(todolistTasks, filter)


// UI
    return (
            <div className={'app'}>
                <Todolist
                        title={todolistTitle}
                        // tasks={getFilteredTasks(todolistTasks, filter)}
                        tasks={filteredTasks}
                        deleteTask={deleteTask}
                        changeFilter={changeFilter}
                />
            </div>
    )
}

export default App
