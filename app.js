new Vue({
    el: "#app",
    data: {
        currentTask: '',
        editValue: '',
        tasks: [
            {
                text: "Subscribe",
                isComplited: true,
                isEditing: false
            },
            {
                text: "Like",
                isComplited: true,
                isEditing: false
            },
            {
                text: "Learn",
                isComplited: false,
                isEditing: false
            }

        ]
    },
    methods: {
        addTask: function(){
            this.tasks.push({
                text: this.currentTask,
                isComplited: false,
                isEditing: false
            });
            this.currentTask = '';
        },
        removeTask: function(taskText){
            this.tasks = this.tasks.filter(task => {
                return task.text !== taskText;
            })
        },
        changeEditing: function(taskText) {
            this.editValue = taskText;
            this.tasks = this.tasks.map(task => {
                if (task.text === taskText) {
                    task.isEditing = !task.isEditing;
                }
                return task;
            })
        },
        editTask: function(taskText){
            this.tasks = this.tasks.map(task => {
                if (task.text === taskText) {
                    task.isEditing = !task.isEditing;
                    task.text = this.editValue;
                }
                return task;
            })

        },        
        
    }
})