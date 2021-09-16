import { Component } from "react";
import Navbar from "./Components/Navbar";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    menu = ["Home", "About", "Contact", "Blog", "Careers"];

    render() {
        return (
            <div>
                <Navbar navItems={this.menu} />
            </div>
        )
    }
}