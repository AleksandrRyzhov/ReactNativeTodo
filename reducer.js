export const ADD_TODOLIST = 'src/Todolist/ADD-TODOLIST'
export const ADD_TASK = 'src/Todolist/ADD-TASK'
export const DEL_TODOLIST = 'src/Todolist/DEL-TODOLIST'
export const DEL_TASK = 'src/Todolist/DEL-TASK'
export const CHANGE_TASK = 'src/Todolist/CHANGE-TASK'
// export const SET_TODOLISTS = "TodoList/Reducer/SET_TODOLISTS";


const initialState = {
    todolists: [
        {"id": 0, "title": "React", tasks: [{id: 0, title: 'Axios', isDone: false, priority: "high"}]},

    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            return {
                ...state, todolists: [...state.todolists, action.newTodolist]
            }
        case ADD_TASK:
            return {
                ...state, todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl, tasks: [...tl.tasks, action.newTask]
                        }
                    } else {
                        return tl
                    }
                })
            }
        case DEL_TODOLIST:
            return {
                ...state, todolists: state.todolists.filter(tl => tl.id !== action.todolistId)
            }
        // case SET_TODOLISTS:
        //     return {
        //         ...state,
        //         todolists: action.todolists.map(tl => ({...tl, tasks: []}))
        //     }
        case DEL_TASK:
            return {
                ...state, todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl, tasks: tl.tasks.filter(t => t.id !== action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            }
        case CHANGE_TASK:
            return {
                ...state, todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl, tasks: tl.tasks.map(t => {
                                    if (t.id !== action.taskId) {
                                        return t
                                    } else {
                                        return {...t, ...action.obj}
                                    }
                                }
                            )
                            }
                        }
                    else
                        {
                            return tl
                        }
                    }
                )
            }

    }

    return state;
}

export const addTodolistAC = (newTodolist) => {
    return {type: ADD_TODOLIST, newTodolist}
}
export const delTodolistAC = (todolistId) => {
    return {type: DEL_TODOLIST, todolistId}
}
export const addTaskAC = (todolistId, newTask) => {
    return {type: ADD_TASK, todolistId, newTask}
}
export const delTaskAC = (todolistId, taskId) => {
    return {type: DEL_TASK, todolistId, taskId}
}
export const changeTaskAC = (taskId, obj, todolistId) => {
    return {type: CHANGE_TASK, taskId, obj, todolistId}
}
// export const setTodolistsAC = (todolists) => {
//     return {
//         type: SET_TODOLISTS,
//         todolists: todolists
//     }
// }
export default reducer



