import React from "react";

function Table(props) {
    return (
        <div className="card-body table employee-table">
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <td>{props.picture}</td>
                    <td>{props.name}</td>
                    <td>{props.dob}</td>
                    <td>{props.email}</td>
                    <td>{props.phone}</td>
                </tr>
            </table>

        </div>
    )
}

export default Table;