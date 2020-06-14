import { CreateStore } from 'redux'

const initialState = {
    toDo: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_DO':
            return {
                ...state, toDo: [...toDo, {
                    id: action.id,
                    task: action.task,
                    deadline: action.deadline,
                    completed: false
                }]
            }
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                action.paylod.complete
            }
        default: return state
    }
}

let store = CreateStore(reducer)

