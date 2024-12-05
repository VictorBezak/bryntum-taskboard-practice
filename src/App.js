import { BryntumTaskBoard } from '@bryntum/taskboard-react';
import { taskboardProps } from './TaskBoardConfig.ts';
import './App.scss';

function App() {
    return (
        <BryntumTaskBoard {...taskboardProps} />
    );
}

export default App;
