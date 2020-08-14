import React from "react";
const styles = {
    flexContainer: {
        display: "flex",
        justifyContent: "center"
    }
}
function Container(props) {
    return <div className={` flex-container container${props.fluid ? "-fluid" : ""}`} {...props} style={styles.flexContainer} />;
}

export default Container;






