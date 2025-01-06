type ButtonProps = {
    title: string
}

export const Button = (props: ButtonProps) => {
    return (
            <button>{props.title}</button>
    )
}