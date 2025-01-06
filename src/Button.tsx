type ButtonProps = {
    title: string
    onClickHandler?: () => void
}

export const Button = (props: ButtonProps) => {
    return (
            <button onClick={props.onClickHandler}>{props.title}</button>
    )
}