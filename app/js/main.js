import React from "react";
import Welcome from "./components/welcome";

setTimeout(function() {
    React.render(<Welcome message="World" color="purple" />, document.getElementById("app"));
}, 0);