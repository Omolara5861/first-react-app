import styled from "styled-components";
import { Item } from "./components/Elements";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Subtitle = styled(Title)`
  color: darkgreen;
`;

const lists = [{
  completed: false,
  title: 'Learn React',
  content: 'Lerning React from Professor Brighten'
}]

export const App = () => {
  return (
    <div>
     <Title>Todo List</Title>
   
      {lists.map((item) => {
        return <Item completed={item.completed} title={item.title} content={item.content}/>
      })}

    </div>
  );
}
