import './Header.css';

function Header(props) {


    let guestName;

    if (props.name) {
        guestName = props.name;
    }

    return (
        <div className="header-wrapper">
            <h1>{`Welcome to Travel Home Hotel ${guestName}`}</h1>
        </div>
    )

}

export default Header;