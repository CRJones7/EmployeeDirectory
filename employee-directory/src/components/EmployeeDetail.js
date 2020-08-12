import React from "react";

function EmployeeDetail(props) {
    return (
        <table className="text-center">
            <tr>
                <th>PICTURE</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>PHONE</th>
            </tr>
            <tr>
                <td>{props.picture.thumbnail}</td>
                <td>{props.name}</td>
                <td>{props.dob.age}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
            </tr>
        </table>
    );
}

export default EmployeeDetail;