import { BryntumTaskBoard, BryntumTaskBoardProps } from '@bryntum/taskboard-react';
import { ColumnModel } from '@bryntum/taskboard';

export const initTaskBoardProps: (taskBoardRef: React.RefObject<BryntumTaskBoard>) => BryntumTaskBoardProps = (taskBoardRef) => {
    const features: BryntumTaskBoardProps = {
        columnDragFeature: true,
        taskDragFeature: true,
    };

    const events: BryntumTaskBoardProps = {
        onColumnDrop: () => {
            const doneColumn = taskBoardRef.current!.instance.columns.getById("done") as ColumnModel;
            doneColumn.text = (doneColumn as any).originalData.text
        },
        onColumnDragStart() {
            const doneColumn = taskBoardRef.current!.instance.columns.getById("done") as ColumnModel;
            doneColumn.text = "DRAGGING THE DONE COLUMN";
        },
    };

    return {
        ...features,
        ...events,
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
    }
};
