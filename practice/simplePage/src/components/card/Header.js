import 'src/css/Header.css';

function Header(props) {
    return (
        <div className="Header">
            <div>{props.title}</div>
        </div>
    );
}

export default Header;
