import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? " var(--mainGreen)" : "var(--lightBlue)"};
  color: ${(prop) => (prop.cart ? " var(--mainGreen)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(prop) =>
      prop.cart ? " var(--mainGreen)" : "var(--lightBlue)"};
    color: var(--white);
  }
  &:focus {
    outline: none;
  }
`;
export const ButtonContainer2 = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.navcart ? " var(--white)" : "var(--lightBlue)"};
  color: ${(prop) => (prop.navcart ? " var(--white)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(prop) =>
      prop.navcart ? " var(--white)" : "var(--lightBlue)"};
    color: var(--dark);
  }
  &:focus {
    outline: none;
  }
`;
