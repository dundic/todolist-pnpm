type ButtonProps = {
    title: string
    onClickHandler: () => void
    disabled?: boolean
    className?: string
}

export const Button = (props: ButtonProps) => {
    return (
            <button
                    disabled={props.disabled}
                    className={props.className}
                    onClick={props.onClickHandler}>
                {props.title}
            </button>
    )
}