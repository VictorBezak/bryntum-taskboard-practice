const taskboardProps = {

   columns : [
       { id : 'todo', text : 'Todo', color : 'orange' },
       { id : 'doing', text : 'Doing', color : 'blue', tooltip : 'Items that are currently in progress' },
       { id : 'done', text : 'Done' }
   ],

   // Field used to pair a task to a column
   columnField : 'status',

   project : {
       transport : {
           load : {
               url : 'data.json'
           }
       },
       autoLoad : true
   }

};

export { taskboardProps };