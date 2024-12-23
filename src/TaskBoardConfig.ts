import { BryntumTaskBoard, BryntumTaskBoardProps } from '@bryntum/taskboard-react';
import { ColumnModel } from '@bryntum/taskboard';

export const initTaskboardProps: (taskBoardRef: React.RefObject<BryntumTaskBoard>) => BryntumTaskBoardProps = (taskBoardRef) => {
    return {
        project: {
            transport: {
                load: {
                    url: 'data.json'
                }
            },
            autoLoad: true
        },
        // Field used to pair a task to a column
        columnField: 'status',
        columns: [
            { id: 'todo', text: 'Todo', color: 'orange' },
            { id: 'doing', text: 'Doing', color: 'blue', tooltip: 'Items that are currently in progress' },
            { id: 'done', text: 'Done' }
        ],
        tbar: {
            items: [
                {
                    type: 'button',
                    text: 'My button'
                }
            ]
        },
        taskDragFeature: true,
        onTaskDrop: (event) => {
            console.log("event", event)
        },
        columnDragFeature: true,
        onColumnDragStart() {
            const doneColumn = taskBoardRef.current!.instance.columns.getById("done") as ColumnModel;
            doneColumn.text = "DRAGGING THE DONE COLUMN";
        },
    }
};
