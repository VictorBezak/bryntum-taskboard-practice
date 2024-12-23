import { BryntumTaskBoardProps } from '@bryntum/taskboard-react';

const taskboardProps: BryntumTaskBoardProps = {
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
    onColumnDrag(event) {
        console.log("event", event)
        event.columnRecord.text = "DRAGGING"
    },
};

export { taskboardProps };
