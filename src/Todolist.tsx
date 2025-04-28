  import {Button} from './Button.tsx';
import {FilterValueType} from './App.tsx';
import {ChangeEvent, useState} from 'react';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistItemPropsType = {
    title: string
    tasks: TaskType[]
    filter: FilterValueType
    deleteTask: (taskId: string) => void
    createTask: (title: string) => void
    changeTaskStatus: (taskId: string, newStatus: boolean) => void
    changeFilter: (filter: FilterValueType) => void
}

export function Todolist(props: TodolistItemPropsType) {

    const [taskTitle, setTaskTitle] = useState<string>('')

    const [error, setError] = useState<string | null>(null)

    function createTaskHandler() {
        const trimmedTitle = taskTitle.trim()
        if (trimmedTitle !== '') {
            props.createTask(trimmedTitle)
            setTaskTitle('')
        } else {
            setError('Title is required')
        }
    }

    const tasksList = (props.tasks.length === 0)
            ? <span>Your list is empty</span>
            : <ul>
                {props.tasks.map((t: TaskType) => {
                    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked)
                    return (
                            <li key={t.id}>
                                <input type="checkbox"
                                       onChange={changeTaskStatusHandler}
                                       checked={t.isDone}/>
                                <span className={t.isDone ? 'task-done' : 'task'}>{t.title}</span>
                                <Button title={'x'} onClickHandler={() => props.deleteTask(t.id)}/>
                            </li>
                    )
                })}
            </ul>

    const createOnClickHandler = (filter: FilterValueType) => () => props.changeFilter(filter)
//одна функция возвращает вторую функцию хитрая весч 
// // function createOnClickHandler(filter: FilterValueType) {
//     return function() {
//       props.changeFilter(filter);
//   };
// }


    const maxTitleLengthError = taskTitle.length > 10

    const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(null)
        setTaskTitle(e.currentTarget.value)
    }

    return (
            <div className="todolist">
                <div>
                    <h3>{props.title}</h3>
                    <div>
                        <input
                                className={error ? 'taskInputError' : ''}
                                value={taskTitle}
                                onChange={setTitleHandler}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && (taskTitle && !maxTitleLengthError)) {
                                        createTaskHandler()
                                    }
                                }}
                        />
                        <Button title="+" onClickHandler={createTaskHandler}
                                disabled={!taskTitle.length || maxTitleLengthError}/>
                    </div>

                    {error && <div style={{color: 'red'}}>{error}</div>}
                    {!taskTitle && <div>Enter title, please</div>}
                    {(taskTitle && !maxTitleLengthError && !error) && <div>Max title length is 10 characters</div>}
                    {maxTitleLengthError && <div style={{color: 'red'}}>Your title is too long</div>}

                    {tasksList}

                    <div>
                        <Button className={props.filter === 'all' ? 'filterBtn-active' : ''} title="Аll"
                                onClickHandler={createOnClickHandler('all')}/>
                        <Button className={props.filter === 'active' ? 'filterBtn-active' : ''} title="Аctive"
                                onClickHandler={createOnClickHandler('active')}/>
                        <Button className={props.filter === 'completed' ? 'filterBtn-active' : ''} title="Сompleted"
                                onClickHandler={() => props.changeFilter('completed')}/>
                    </div>
                </div>
            </div>
    );
}
