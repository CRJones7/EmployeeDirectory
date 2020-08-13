import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Table from "../../components/Table";
import API from "../utils/API";

function Search() {
    const [userSearch, setUserSearch] = useState();




    return (

        <div>
            <div className="mt-4">
                <h2>Employee Directory</h2>
            </div>

            <Container className="mt-3 px-5">
                <Row className="form-group">
                    <Col size="12">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search Employee By Name"
                            name="employeeSearch"
                            onChange={e => setUserSearch(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Table




                    />
                </Row>
            </Container>

        </div>

    )
}

export default Search;