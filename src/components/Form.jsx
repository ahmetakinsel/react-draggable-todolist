import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../Context";
import { nanoid } from "nanoid";
import styled from "styled-components";

const styles = {
  form: { display: "flex", alignItems: "center" },
  input: {
    width: "200px",
    height: "40px",
    borderRadius: "5px",
    border: "1px solid gray",
  },
};

const Container = styled.div`
  display: "flex";
  justify-content: center;
`;

const Header = styled.h2``;

const Label = styled.label`
  font-size: 18px;
`;
const Input = styled.input`
  margin-left: 10px;
  margin-right: 10px;
`;

const Button = styled.button`
  width: "410px";
  height: "40px";
  color: red;
`;

const Form = () => {
  const [data, setData] = useContext(Context);

  const { register, handleSubmit } = useForm();

  const onSubmit = (input) => {
    const id = nanoid();
    setData([...data, { id, name: input.name }]);
  };
  return (
    <Container>
      <Header>My Draggable List</Header>
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>
            Name:
            <Input style={styles.input} type="text" {...register("name")} />
          </Label>
        </div>
        <div>
          <Button type="submit" value="Add">
            Add
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Form;
