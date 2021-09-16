import { Component } from "react";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav--ico">
                    <img id="navbar--logo" src={this.props.navIconUrl} alt="" />
                </div>
                <div className="nav--menu">
                    <ul>
                        {
                            this.props.navItems.map(item =>
                                <li className="nav__link"><a href="#">{item}</a></li>
                            )
                        }
                    </ul>
                </div>
                <div className="nav--btn">
                    <button className="invite--btn">Request Invite</button>
                </div>
            </nav>
        )
    }
}
