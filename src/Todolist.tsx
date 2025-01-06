import {Button} from './Button.tsx';

type TodolistItemPropsType = {
    title: string
    tasks: TaskType[]
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist(props: TodolistItemPropsType) {

    const tasksList = (props.tasks.length === 0)
            ? <span>Your list is empty</span>
            : <ul>
                {props.tasks.map((task: TaskType) => {
                    return (
                            <li>
                                <input type="checkbox" checked={task.isDone}/><span>{task.title}</span>
                            </li>
                    )
                })}
            </ul>

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
                        <Button title={'all'}/>
                        <Button title={'active'}/>
                        <Button title={'completed'}/>
                    </div>
                </div>
            </div>
    );
}
