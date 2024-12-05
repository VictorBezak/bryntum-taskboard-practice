import { BryntumTaskBoard } from '@bryntum/taskboard-react';
import { taskboardProps } from './TaskBoardConfig';
import './App.scss';

function App() {
    return (
        <BryntumTaskBoard {...taskboardProps} />
    );
}

export default App;
