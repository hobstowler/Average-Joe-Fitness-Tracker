import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to='/'>Home Page</Link>
            <Link to='/create-exercise'>Create Exercise</Link>
            <Link to='/fived'>The 5 D's</Link>
        </nav>
    )
}

export default Navigation