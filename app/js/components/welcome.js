import React from "react";

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1 className="intro">
                    Hello, <span style={{color : this.props.color}}>{this.props.message}</span>.
                </h1>
            </div>
        );
    }
}

Welcome.propTypes = {
    message : React.PropTypes.string.isRequired,
    color   : React.PropTypes.oneOf(["red", "orange", "yellow", "green", "blue", "purple"])
};