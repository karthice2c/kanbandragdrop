import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import { Droppable, Draggable } from 'react-beautiful-dnd'
const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width:220px;
    display:flex;
    flex-direction: column;
    background-color:white;
`;
const Title = styled.h3`
    padding: 8px;
    text-align: center;
    background: lightblue;
    margin: 5px;
`;
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isdraggingover ? 'skyblue' : 'inherit')};
    min-height:200px;
`;

function Column(props) {
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}>
                    <Title {...provided.dragHandleProps}>{props.column.title}</Title>
                    <Droppable droppableId={props.column.id} type='task'>
                        {(provided1, snapshot) => (
                            <TaskList
                                ref={provided1.innerRef}
                                {...provided1.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                {provided1.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>

            )}
        </Draggable>
    )
}

export default Column