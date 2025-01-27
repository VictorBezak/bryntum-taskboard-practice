import { BryntumGantt } from '@bryntum/gantt-react';
import { initGanttProps } from './GanttConfig.ts';
import './App.scss';
import { useRef } from 'react';
import React from 'react';


function App() {
    const ganttRef = useRef<BryntumGantt>(null);
    (window as any).ganttRef = ganttRef;

    const props = initGanttProps(ganttRef);

    return (
        <BryntumGantt {...props} ref={ganttRef} />
    );
}

export default App;
