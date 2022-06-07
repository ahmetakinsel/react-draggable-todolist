import React, { useContext, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Context } from "../Context";
import styled, { css } from "styled-components";
import { palette } from "./Theme/index";
import { AiFillDelete } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  justify-content: center;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.secondary.light.color};
  border: 1px solid #fff;
  border-radius: 5px;
  width: 500px;
  height: 60px;
  padding: 6px;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  ${(props) =>
    props.checked &&
    css`
      margin-left: 10px;
      text-decoration: line-through;
    `}
`;

const UnorderedList = styled.ul`
  list-style: none;
`;
const OrderedList = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-weight: 600;
  color: ${palette.primary.color};
  font-size: 16px;
  letter-spacing: -0.2px;
`;

const List = () => {
  const [data, setData] = useContext(Context);
  const [checked, setChecked] = useState(false);

  const deleteItem = (id) => {
    setData(data.filter((x) => x.id !== id));
  };
  const handleChecked = (item, index) => {
    if (item.index) {
      setChecked(!checked);
    } else {
      console.log("?");
    }
  };

  const handleEnd = (result) => {
    console.log(result);
    const items = [...data];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);

    if (!result.destination) {
      return;
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="to-dos">
          {(provided) => (
            <Wrapper>
              <UnorderedList
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {data.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <ListWrapper
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        key={item.id}
                      >
                        <OrderedList>
                          <Checkbox
                            checked={item.checked}
                            type="checkbox"
                            value={item.checked}
                            onChange={() => handleChecked(item.id)}
                          />
                          {index + 1}.{"  "}
                          {item.name}
                        </OrderedList>
                        <AiFillDelete
                          style={{
                            width: "30px",
                            height: "18px",
                            cursor: "pointer",
                            color: "#8bc34a",
                          }}
                          onClick={() => deleteItem(item.id)}
                        />
                      </ListWrapper>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </UnorderedList>
            </Wrapper>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default List;
