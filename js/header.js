
var Link = window.ReactRouterDOM.Link;

export default function Header() {
    return React.createElement(
        "nav",
        { "class": "navbar navbar-expand-lg navbar-light bg-light" },
        React.createElement(
            Link,
            { "class": "nav-link", to: "/", activeClassName: "active" },
            React.createElement("img", { src: "./images/logo.gif", width: "88", height: "32", alt: "" })
        ),
        React.createElement(
            "button",
            { "class": "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNavAltMarkup", "aria-controls": "navbarNavAltMarkup", "aria-expanded": "false", "aria-label": "Toggle navigation" },
            React.createElement("span", { "class": "navbar-toggler-icon" })
        ),
        React.createElement(
            "div",
            { "class": "collapse navbar-collapse", id: "navbarNavAltMarkup" },
            React.createElement(
                "div",
                { "class": "navbar-nav" },
                React.createElement(
                    Link,
                    { "class": "nav-link", to: "/", activeClassName: "active" },
                    "Home"
                ),
                React.createElement(
                    Link,
                    { "class": "nav-link", to: "/profile", activeClassName: "active" },
                    "Profile"
                ),
                React.createElement(
                    Link,
                    { "class": "nav-link", to: "/products", activeClassName: "active" },
                    "Products"
                ),
                React.createElement(
                    Link,
                    { "class": "nav-link", to: "/technology", activeClassName: "active" },
                    "Technology"
                ),
                React.createElement(
                    Link,
                    { "class": "nav-link", to: "/gallery", activeClassName: "active" },
                    "Gallery"
                ),
                React.createElement(
                    Link,
                    { "class": "nav-link", to: "/downloads", activeClassName: "active" },
                    "Downloads"
                ),
                React.createElement(
                    Link,
                    { "class": "nav-link", to: "/FAQ", activeClassName: "active" },
                    "FAQ"
                ),
                React.createElement(
                    Link,
                    { "class": "nav-link", to: "/contact", activeClassName: "active" },
                    "Contact Us"
                )
            )
        )
    );
}