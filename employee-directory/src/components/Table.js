import React from "react";

function Table(props) {
    // console.log(props.employeeList);
    return (
        <div className="card-body table employee-table">
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employeeList.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.name}</td>
                            <td>{employee.dob}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Table;