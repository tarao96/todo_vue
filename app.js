import { axios } from 'axios';

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
                id: 'todo-' + formattedDate(),
                title: this.todoTitle,
                dateTime: formattedDate()
            })
            this.todoTitle = ""
        },
        // 登録したタスクを削除する
        deleteTodo: function(todo) {
            const todoIndex = this.todos.indexOf(todo)
            const todoTitle = todo.title
            const result = window.confirm(todoTitle + 'のタスクを削除しますか？')

            if(todoIndex !== -1 && result) {
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
        },
        // jsonデータからタスクを取得
        fetchTodo: function() {
            const self = this
            axios.get("./todo.json").then((res) => {
                self.todos = res.data
            })
        }
    },
    mounted: function() {
        // 取得しておいたjsonデータを表示
        this.fetchTodo()
    }
})

app.mount('#app')