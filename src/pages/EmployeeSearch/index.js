import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Card from "../../components/Card";
import Row from "../../components/Row";
import Table from "../../components/Table";
import API from "../../utils/API";
import Title from "../../components/Title"

function Search() {

    const [userSearch, setUserSearch] = useState();
    const [employeeList, setEmployeeList] = useState([]);

    //compomentWillMount componentDiMount componentWillUnMount comoponentUnmounted
    useEffect(() => {
        employeeSearch();

    }, [])

    function employeeSearch() {

        if (employeeList.length === 0) {
            API.search()
                .then(res => res.data.results
                ).then(response =>
                    setEmployeeList(response)
                )
        }
    }

    function employeeSearches(e) {
        setUserSearch(e);
        filterEmployee(userSearch, employeeList);
    }

    function filterEmployee(e, list) {

        const filteredList = list.filter(employee => employee.name.first.includes(e));

        if (filteredList.length > 0) {
            setEmployeeList(filteredList);

        }

    }

    return (

        <div>

            <Title />


            <Row className="form-group">
                <Col size="12">
                    <Card>
                        <h2>Search for an employee:</h2>
                        <input
                            style={{ height: "20%", width: "100%", textAlign: "center", marginBottom: "20px" }}
                            className="form-control"
                            type="text"
                            placeholder="Enter Name"
                            name="employeeSearch"
                            onChange={e => employeeSearches(e.target.value)}
                        />
                    </Card>
                </Col>
            </Row>
            <Container className="mt-3 px-5" >
                <Row>
                    <Card>
                        {!employeeList.length === 0 ? <h4>Waiting for Data to load</h4> :
                            <Table
                                employeeList={employeeList} />
                        }


                    </Card>
                </Row>
            </Container>

        </div>

    )
}

export default Search;