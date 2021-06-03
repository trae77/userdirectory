

function SearchForm(props) {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.handleSearch} />
            </form>
        </>
    );
}

export default SearchForm;
