import classes from "./RoundedCornerButton.module.css";

type Props = {
    title: String
    className?: string
};

const RoundedCornerButton: React.FC<Props> = (props) => {
    return(
        <button className={[props.className, classes.button, classes.outlinePrimary].join(' ')}>
            {props.title}
        </button>
    )
}

export default RoundedCornerButton;