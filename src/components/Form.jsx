import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { palette } from "./Theme/index";

const styles = {
  form: { display: "flex", alignItems: "center" },
  input: {
    width: "350px",
    height: "30px",
    borderRadius: "5px",
    border: "1px solid #cecece",
    marginLeft: "10px",
    marginRight: "10px",
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
`;
const FormWrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  margin-left: 40px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.2px;
  color: ${palette.primary.color};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 35px;
  color: #ffffff;
  background: ${palette.primary.color};
  border-radius: 5px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.2px;

  :hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
    cursor: pointer;
  }
`;

const Form = () => {
  const [data, setData] = useContext(Context);
  const [todoTextInput, setTodoTextInput] = useState("");

  const onSubmit = () => {
    const id = nanoid();
    setData([...data, { id, name: todoTextInput }]);
    setTodoTextInput("");
  };

  return (
    <>
      <Container>
        <FormWrapper>
          <Wrapper>
            <Label>
              Name:
              <input
                style={styles.input}
                type="text"
                value={todoTextInput}
                onChange={(event) => setTodoTextInput(event.target.value)}
                placeholder="Enter your task"
              />
            </Label>
          </Wrapper>
          <Wrapper>
            <Button type="submit" onClick={onSubmit}>
              Add
            </Button>
          </Wrapper>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Form;
