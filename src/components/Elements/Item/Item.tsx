import styled from 'styled-components';
import { List } from '../../../App';

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`

interface ItemProps {
    completed: boolean;
    title: string;
    content?: string;
    todoList: List[];
    setTodoList: React.Dispatch<React.SetStateAction<List[]>>;
}



export const Item = (props: ItemProps) => {
    const {todoList, setTodoList, completed, title, content } = props;
    let itemContent = null;

    if (content) {
        itemContent = <div>{content}</div>;
    }

    const handleClick = () => {
        const newTodoList = todoList.map((item: List) => {
            if (item.title === title) {
                item.completed = !item.completed;
            }
            return item;
        });
        setTodoList(newTodoList);
    }


    return (
        <div>
            <input type="checkbox" checked={completed} 
            onClick={handleClick}/>
            <Title>{title}</Title>
            {itemContent}
        </div>
    );
};
