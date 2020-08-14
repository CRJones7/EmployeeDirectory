import React from "react";

const styles = {
    tableHead: {
        backgroundColor: "#0077b6"
    },
    tableHeaders: {
        fontSize: "25px"
    },
    tableBody: {
        overflowX: "auto",
        justifyContent: "center",
        textAlign: "center",
        maxHeight: "500px",
        overflow: "scroll"
    },
    tableData: {
        paddingLeft: 15,
        paddingRight: 15,
        border: "1px solid #0077b6",
        borderCollapse: "collapse"

    },

}

function Table({ employeeList }) {
    console.log(employeeList);

    return (

        <div className="card-body table employee-table" >
            {console.log("here second")}
            {employeeList[0] ?
                <table>
                    <thead className="tableHead" style={styles.tableHead}>
                        <tr>
                            <th className="tableHeaders" style={styles.tableHeaders}> Picture </th>
                            <th className="tableHeaders" style={styles.tableHeaders}> Name </th>
                            <th className="tableHeaders" style={styles.tableHeaders}> Email </th>
                            <th className="tableHeaders" style={styles.tableHeaders}> Phone </th>
                            <th className="tableHeaders" style={styles.tableHeaders}> Region </th>
                        </tr>
                    </thead>
                    <tbody className="tableBody" style={styles.tableBody}>
                        {console.log(employeeList)}
                        {
                            employeeList.map((employee, i) => (
                                <tr key={i}>
                                    {console.log(employee)}
                                    <td className="tableData" style={styles.tableData}><img src={employee.picture.thumbnail} alt={`${employee.name.first} ${employee.name.last}`} /></td>
                                    <td className="tableData" style={styles.tableData}>{`${employee.name.first} ${employee.name.last}`}</td>
                                    <td className="tableData" style={styles.tableData}>{employee.email}</td>
                                    <td className="tableData" style={styles.tableData}>{employee.phone}</td>
                                    <td className="tableData" style={styles.tableData}>{employee.location.timezone.description}</td>
                                </tr>
                            ))}
                    </tbody>
                </table> :
                <div>
                    <p>Waiting for data to load</p> {console.log("its here")}</div>
            }

        </div>
    )
}

export default Table;