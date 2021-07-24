import React from 'react';
import { iTask } from '../Interfaces';

interface Props {
    task: iTask;
}
const TodoTask = ({task}: Props) => {

    return (
        <div>
            <p>{task.taskName}</p>
            <p>{task.deadline}</p>
        </div>
    );
};

export default TodoTask;