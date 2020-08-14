import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Card from "../../components/Card";
import Row from "../../components/Row";
import Table from "../../components/Table";
import API from "../../utils/API";

function Search() {
    const [userSearch, setUserSearch] = useState();
    const [employeeList, setEmployeeList] = useState([]);

    const [example, setExample] = useState([1, 2, 3, 4, 5]);
    const [example2, setExample2] = useState([]);

    useEffect(() => {
        employeeSearch();
        setExample2([...example2, example]);
        console.log(example2)
        employeeSearches();

    }, [])

    function employeeSearch() {
        API.search()
            .then(res => {
                setEmployeeList([...employeeList, res.data.results]);
                // return res.data.results;
                console.log(res.data.results);
                console.log(employeeList);

            })
    }

    function employeeSearches(e) {
        setUserSearch(e)
        console.log(userSearch)
    }
    return (

        <div>
            <Card>
                <div className="mt-4">
                    <h2>Employee Directory</h2>
                </div>
            </Card>
            <Container className="mt-3 px-5">
                <Row className="form-group">
                    <Col size="12">
                        <Card>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search Employee By Name"
                                name="employeeSearch"
                                onChange={e => employeeSearches(e.target.value)}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Card>
                        {/* {!employeeList ? <h4>Waiting for Data to load</h4> :
                            <Table
                                employeeList={employeeList} />
                        } */}

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
                                    {employeeList.map((employee, index) => (
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
                    </Card>
                </Row>
            </Container>

        </div>

    )
}

export default Search;