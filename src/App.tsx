import { useState } from 'react';
import styled from 'styled-components';
import { Item } from './components/Elements';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Subtitle = styled(Title)`
    color: darkgreen;
`;

export interface List {
    completed: boolean;
    title: string;
    content?: string;
}

const list: List[]  = [
    {
        completed: false,
        title: 'Learn React',
        content: 'Learning React from Professor Brighten',
    },
    { 
        completed: false,
        title: 'Learn TypeScript',
    },
    {
        completed: false,
        title: 'Learn Styled Components',
    },
];

export const App = () => {

    const [todoList, setTodoList] = useState(list);
    return (
        <div>
            <Title>Todo List</Title>

            {todoList.map((item: List) => {
                return (
                    <Item
                        todoList={todoList}
                        setTodoList={setTodoList}
                        completed={item.completed}
                        title={item.title}
                        content={item.content}
                    />
                );
            })}
        </div>
    );
};
