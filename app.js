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
            editTodos: [],
            isEdit: false
        }
    },
    methods: {
        // タスクを登録する
        createTodo: function() {
            this.todos.push({
                id: 'todo-' + Date.now(),
                title: this.todoTitle,
                dateTime: formattedDate()
            })
            this.todoTitle = ""
        },
        // 登録したタスクを削除する
        deleteTodo: function(todo) {
            const todoIndex = this.todos.indexOf(todo)
            if(todoIndex !== -1) {
                this.todos.splice(todoIndex, 1)
            }
        },
        // 編集対象の要素を登録
        edit: function(todo) {
            if(this.todos.indexOf(todo) !== -1) {
                this.editTodos.push({
                    id: todo.id,
                    title: todo.title,
                    dateTime: formattedDate()
                })
            }
            this.isEdit = true
        },
        // 編集対象の要素を更新
        updateTodo: function(editTodos) {
            const editIndex = this.todos.indexOf(editTodos[0])
            if(editIndex) {
                this.todos.splice(editIndex, 1, editTodos[0])
            }
            this.isEdit = false
        }
    }
})

app.mount('#app')