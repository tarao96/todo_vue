function formattedDate() {
    const date = new Date()
    const formatDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    return formatDate
}

const app = Vue.createApp({
    data: function() {
        return {
            todos: [],
            todoTitle: "",
            editTitle: "",
            isEdit: false
        }
    },
    methods: {
        createTodo: function() {
            this.todos.push({
                id: 'todo-' + Date.now(),
                title: this.todoTitle,
                dateTime: formattedDate()
            })
            this.todoTitle = ""
        },
        deleteTodo: function(todoId) {
            const index = this.todos.indexOf(todoId)
            this.todos.splice(todo, 1)
        },
        editTodo: function(todo) {
            if(this.todos.indexOf(todo) !== -1) {
                this.editTitle = todo.title
            }

            this.isEdit = true
        }
    }
})

app.mount('#app')