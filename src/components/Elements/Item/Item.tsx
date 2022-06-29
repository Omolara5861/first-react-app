interface ItemProps {
    completed: boolean;
    title: string;
    content: string;
}

export const Item = (props: ItemProps) => {
    const { completed, title, content } = props;
    
    return (
        <div>
            <div>{title}</div>
            <input type="checkbox" checked={completed} />
            <div>{content}</div>
        </div>
    );
};
