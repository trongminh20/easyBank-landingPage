import { Component } from "react";

export default class Column extends Component {
    constructor(props) {
        super(props);
        this._classname = this.props._classname;
        this._imgUrl = this.props._imgUrl;
        this._subheader = this.props._subheader;
        this._title = this.props._title;
        this._content = this.props._content;
    }

    render() {
        return (
            <div className={this._classname}>
                <div className="col--img">
                    <img src={this._imgUrl} alt="" />
                </div>
                <div className="col--info">
                    <p className="col--subheader">{this._subheader}</p>
                    <h2 className="col--title"><a href="#">{this._title}</a></h2>
                    <p className="col--content" >{this._content}</p>
                </div>
            </div>
        )
    }
}