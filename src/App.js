import { Component } from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Column from "./Components/Column";
import Footer from "./Components/Footer";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    menu = ["Home", "About", "Contact", "Blog", "Careers"];
    services = [
        {
            id: "online--banking",
            imgUrl: "./images/icon-online.svg",
            title: "Online Banking",
            content: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            id: "simple--budget",
            imgUrl: "./images/icon-budgeting.svg",
            title: "Simple Budgeting",
            content: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
        },
        {
            id: "fast-onboarding",
            imgUrl: "./images/icon-onboarding.svg",
            title: "Fast Onboarding",
            content: "We don't do branches.Open your account in minutes online and start taking control of your finances right away."
        },
        {
            id: "open--api",
            imgUrl: "./images/icon-api.svg",
            title: "Open API",
            content: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        }
    ];
    articles = [
        {
            id: "currency",
            imgUrl: "./images/image-currency.jpg",
            subheader: "by claire robinson",
            title: "Receive money in any currency with no fees",
            content: "The wold is getting smaller and we're becom ing more mobile. So why should you be forced to only receive money in a single ..."
        },
        {
            id: "restaurant",
            imgUrl: "./images/image-restaurant.jpg",
            subheader: "by wilson Hutton",
            title: "Treat yourself without worrying about money",
            content: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you ..."
        },
        {
            id: "plane",
            imgUrl: "./images/image-plane.jpg",
            subheader: "by wilson hutton",
            title: "Take your Easybank card wherever you go",
            content: "We want you to enjoy travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
        },
        {
            id: "confetti",
            imgUrl: './images/image-confetti.jpg',
            subheader: "by claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            content: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
        }
    ];

    render() {
        return (
            <div id="wrapper">
                <Navbar navItems={this.menu}
                    navIconUrl={"./images/logo.svg"} />

                <Slider _introTitle={"Next generation digital banking"}
                    _introduction={"Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, bidgeting, investing, and much more."}
                    _imgUrl={"./images/image-mockups.png"} />

                <div className="services">
                    <div className="services--intro">
                        <h1>Why Choose Easybank</h1>
                        <p>We leverage Open Banking to turn your bank account account into your financial hub. Control your finances like never before. </p>
                    </div>
                    <div className="services--detail">
                        {
                            this.services.map(sv =>
                                <Column id={sv.id} _classname={"services--col"} _imgUrl={sv.imgUrl} _title={sv.title} _content={sv.content} />
                            )
                        }
                    </div>
                </div>
                <div className="articles">
                    <div className="articles--intro">
                        <h1>Latest Articles</h1>
                    </div>
                    <div className="articles--list">
                        {
                            this.articles.map(
                                art => <Column _classname="art--col" _imgUrl={art.imgUrl} _subheader={art.subheader} _title={art.title} _content={art.content} />
                            )
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}