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
        onColumnDragStart() {
            const doneColumn = taskBoardRef.current!.instance.columns.getById("done") as ColumnModel;
            doneColumn.text = "DRAGGING THE DONE COLUMN";
        },
        onColumnDrop: () => {
            const doneColumn = taskBoardRef.current!.instance.columns.getById("done") as ColumnModel;
            // Using 'as any' here because the Bryntum type doesn't know about the 'originalData' property. Using it in some situations is
            // fine. Here we are using it to restore the done column's text to its initial value before we changed it with onColumnDragStart.
            doneColumn.text = (doneColumn as any).originalData.text
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
