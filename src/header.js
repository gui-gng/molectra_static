
const Link = window.ReactRouterDOM.Link;

export default function Header() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="nav-link" to='/' activeClassName="active">
                <img src="./images/logo.gif" width="88" height="32" alt="">
                </img>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link" to='/' activeClassName="active">Home</Link>
                    <Link class="nav-link" to='/profile' activeClassName="active">Profile</Link>
                    <Link class="nav-link" to='/products' activeClassName="active">Products</Link>
                    <Link class="nav-link" to='/technology' activeClassName="active">Technology</Link>
                    <Link class="nav-link" to='/gallery' activeClassName="active">Gallery</Link>
                    <Link class="nav-link" to='/downloads' activeClassName="active">Downloads</Link>
                    <Link class="nav-link" to='/FAQ' activeClassName="active">FAQ</Link>
                    <Link class="nav-link" to='/contact' activeClassName="active">Contact Us</Link>
                </div>
            </div>
        </nav>
    )
}