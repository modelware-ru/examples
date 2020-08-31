import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
import makeGetVisibleTodos from '../selectors/todoSelectors'
// import {getVisibleTodos} from '../selectors'
// import { VisibilityFilters } from '../actions'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(t => t.completed)
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(t => !t.completed)
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// }

const makeMapStateToProps = () => {
    const getVisibleTodos = makeGetVisibleTodos()
    return (state, props) => ({
        // todos: getVisibleTodos(state.todos, state.visibilityFilter)
        todos: getVisibleTodos(state, props)
    })
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    makeMapStateToProps,
    mapDispatchToProps
)(TodoList)
