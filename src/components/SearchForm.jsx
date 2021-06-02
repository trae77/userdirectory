

function SearchForm(props) {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.handleNameSearch} />
            </form>
        </>
    );
}

export default SearchForm;
