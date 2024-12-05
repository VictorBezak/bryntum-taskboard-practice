import { BryntumTaskBoardProps } from '@bryntum/taskboard-react';

const taskboardProps: BryntumTaskBoardProps = {
   columns : [
       { id : 'todo', text : 'Todo', color : 'orange' },
       { id : 'doing', text : 'Doing', color : 'blue', tooltip : 'Items that are currently in progress' },
       { id : 'done', text : 'Done' }
   ],
    tbar : {
        items : [
            {
                type : 'button',
                text : 'My button'
            }
        ]
    },

   // Field used to pair a task to a column
   columnField : 'status',

   project : {
       transport : {
           load : {
               url : 'data.json'
           }
       },
       autoLoad : true
   },
   taskDragFeature: true,
   onTaskDrop: (event) => {
    console.log("event", event)
   }

};

export { taskboardProps };
