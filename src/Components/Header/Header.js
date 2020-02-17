import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      toggleMenu: true
    };
  }

  toggleMenuFunc() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  render() {
    return (
      <div>
        <header>
          <img
            className="logo"
            src="https://cdn.shopify.com/s/files/1/0118/0844/0386/products/29_78177709-5414-4ef1-9512-683bedc87274.jpg?v=1577068105"
            alt="frozen"
          />
          <h1>FrozenHeart.com</h1>
          <nav className="not-mobile navigation">
            <a href="#">Shop</a>
            <a href="#">FanFiction</a>
            <a href="#">Let It Go</a>
          </nav>
          <img
            className="hamburger"
            alt="hammy"
            src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
            onClick={() => this.toggleMenuFunc()}
          />
        </header>
          <nav className={this.state.toggleMenu ? "mobile-menu-show" : "mobile-menu-hide"}>
            <a href="#">Shop</a>
            <a href="#">FanFiction</a>
            <a href="#">Let It Go</a>
          </nav>
      </div>
    );
  }
}
