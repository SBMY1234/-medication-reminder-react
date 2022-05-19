import { Link } from 'react-router-dom';
export const Nav = () => {
    return (
        <div class="topnav">
            <Link to="/HomePage" class="topnava">דף הבית</Link>
            <Link to="/Login" class="topnava">התחברות</Link>
            <Link to="/HomePage" class="topnava">אודות</Link>
            <Link to="/HomePage" class="topnava">צור קשר</Link>
        </div>
    );
}