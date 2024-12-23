import { BryntumTaskBoard, BryntumTaskBoardProps } from '@bryntum/taskboard-react';
import { ColumnModel } from '@bryntum/taskboard';

export const initTaskBoardProps: (taskBoardRef: React.RefObject<BryntumTaskBoard>) => BryntumTaskBoardProps = (taskBoardRef) => {
    const project: BryntumTaskBoardProps["project"] = {
        transport: {
            load: {
                url: 'data.json'
            }
        },
        autoLoad: true
    };

    // Put everything with suffix of "Feature" in the features object for organization
    const features: BryntumTaskBoardProps = {
        columnDragFeature: true,
        taskDragFeature: true,
    };

    // Put everything with prefix of "on" in the events object for organization
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
        project,
        ...features,
        ...events,
        columnField: 'status', // Field used to pair a task to a column
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
