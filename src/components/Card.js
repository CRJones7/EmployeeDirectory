import React from "react";

const styles = {
    card: {
        marginBottom: 30,
        display: "flex",
        justifyContent: "center",
        maxHeight: "700px",
        overflow: "scroll"

    },
    heading: {
        background: "#9a74db",
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: 80,
        color: "white",
        padding: "0 20px"
    }
};

function Card(props) {
    return (
        <div className="card text-center" style={styles.card}>
            <div className="card-header">
                <h2>{props.heading}</h2>
            </div>
            <div className="card-body">{props.children}</div>
        </div>
    );
}

export default Card;