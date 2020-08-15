import React from "react";

const styles = {
    Title: {
        fontSize: "60px",
        backgroundColor: "#0077b6",
        marginTop: 0,
        marginBottom: 30,
        height: "100px",
        display: "flex",
        justifyContent: "center",

    },
    head: {
        backgroundColor: "#023e8a",
        margin: 0,


    }

}

function Title() {
    return (

        <div className="card mt-4 head fluid" style={styles.head}>
            <h2 className="Title fluid" style={styles.Title}>Employee Directory</h2>
        </div>
    )
}
export default Title;