export const Choice = (props: any) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.num}
        </button>
    );
};
