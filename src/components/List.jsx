import React, { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Context } from "../Context";
import styled from "styled-components";

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
  background-color: #4fb0c6;
  border: 1px solid #fff;
  border-radius: 5px;
  width: 400px;
  height: 60px;
  padding: 5px;
  margin-bottom: 10px;
`;

const UnorderedList = styled.ul`
  list-style: none;
`;
const OrderedList = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  letter-spacing: -0.2px;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  color: #fff;
  background: #000;
  border-radius: 75px;
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

const List = () => {
  const [data, setData] = useContext(Context);

  const deleteItem = (id) => {
    setData(data.filter((x) => x.id !== id));
  };

  const handleEnd = (result) => {
    console.log(result);
    const items = Array.from(data);
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
                          {index + 1}.{"  "}
                          {item.name}
                        </OrderedList>
                        <Button onClick={() => deleteItem(item.id)}>
                          Delete
                        </Button>
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
