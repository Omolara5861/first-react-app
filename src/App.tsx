import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Subtitle = styled(Title)`
  color: darkgreen;
`;

export const App = () => {
  return (
    <div>
     <Title>Hello React!!! Day 2</Title>
     <Subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, provident. Et eveniet aperiam deleniti! Dicta ad ea atque odio provident.</Subtitle>
    </div>
  );
}
