import { BryntumTaskBoard } from '@bryntum/taskboard-react';
import { initTaskboardProps } from './TaskBoardConfig.ts';
import './App.scss';
import { useRef } from 'react';
import { ColumnModel, TaskBoard } from '@bryntum/taskboard';
import React from 'react';


function App() {
    const taskBoardRef = useRef<BryntumTaskBoard>(null);
    (window as any).taskBoardRef = taskBoardRef;

    const props = initTaskboardProps(taskBoardRef);

    return (
        <BryntumTaskBoard {...props} ref={taskBoardRef} />
    );
}

export default App;
