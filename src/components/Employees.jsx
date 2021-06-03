function Employees(props) {
    return (
        <>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th> First name
                            <button onClick={props.sortName}>sort</button>
                            </th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Cell Phone</th>
                    </tr>
                </thead>
                {props.employeesArrayFiltered.map((each, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>
                                    <img
                                        src={each.picture.thumbnail}
                                        alt={"thumbnail of employee"}
                                    />
                                </td>
                                <td>{each.name.first}</td>
                                <td>{each.name.last}</td>
                                <td>{each.email}</td>
                                <td>{each.cell}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </>
    );
}

export default Employees;
