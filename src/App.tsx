import { BryntumTaskBoard } from '@bryntum/taskboard-react';
import { taskboardProps } from './TaskBoardConfig.ts';
import './App.scss';
import { useRef } from 'react';
import { TaskBoard } from '@bryntum/taskboard';
import React from 'react';

function App() {
    const taskBoardRef = useRef<BryntumTaskBoard>(null);
    const taskBoardInstance = () => taskBoardRef.current?.instance as TaskBoard;
    (window as any).taskBoardInstance = taskBoardInstance;
    
    return (
        <BryntumTaskBoard {...taskboardProps} ref={taskBoardRef} />
    );
}

export default App;
