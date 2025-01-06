import {Button} from './Button.tsx';
import {FilterValueType} from './App.tsx';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistItemPropsType = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId: number) => void
    changeFilter: (filter: FilterValueType) => void
}

export function Todolist(props: TodolistItemPropsType) {

    const tasksList = (props.tasks.length === 0)
            ? <span>Your list is empty</span>
            : <ul>
                {props.tasks.map((t: TaskType) => {
                    return (
                            <li>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                                <Button title={'x'} onClickHandler={() => props.deleteTask(t.id)}/>
                            </li>
                    )
                })}
            </ul>

    const createOnClickHandler = (filter: FilterValueType) => () => props.changeFilter(filter)
//одна функция возвращает вторую функцию


    return (
            <div className="todolist">
                <div>
                    <h3>{props.title}</h3>
                    <div>
                        <input/>
                        <Button title={'+'}/>
                    </div>
                    {tasksList}
                    <div>
                        <Button title={'Аll'} onClickHandler={createOnClickHandler('all')}/>
                        <Button title={'Аctive'} onClickHandler={()=>props.changeFilter('active')}/>
                        <Button title={'Сompleted'} onClickHandler={()=>props.changeFilter('completed')}/>
                    </div>
                </div>
            </div>
    );
}
