function TodoList(props) {
    const renderFunction = props.render || props.children
    return (
        <section className="TodoList-Container">
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(props.totalTodos && !props.searchedTodos.length) && props.onEmptySearch(props.searchText)}

            {props.searchedTodos.map((renderFunction))}
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }