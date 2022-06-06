import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../Context";
import { nanoid } from "nanoid";
import styled from "styled-components";

const styles = {
  form: { display: "flex", alignItems: "center" },
  input: {
    width: "200px",
    height: "30px",
    borderRadius: "5px",
    border: "1px solid #cecece",
    marginLeft: "10px",
    marginRight: "10px",
  },
};

const Wrapper = styled.div``;

const Header = styled.h2`
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.2px;
`;

const Label = styled.label`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.2px;
`;

const Button = styled.button`
  width: 85px;
  height: 35px;
  color: #ffffff;
  background: #000000;
  border-radius: 75px;
  border: none;
  font-style: normal;
  font-weight: 600;
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

  const { register, handleSubmit } = useForm();

  const onSubmit = (input) => {
    const id = nanoid();
    setData([...data, { id, name: input.name }]);
  };
  return (
    <>
      <div>
        <Header>My Draggable List</Header>
        <div>
          <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Wrapper>
              <Label>
                Name:
                <input style={styles.input} type="text" {...register("name")} />
              </Label>
            </Wrapper>
            <Wrapper>
              <Button type="submit">Add</Button>
            </Wrapper>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
