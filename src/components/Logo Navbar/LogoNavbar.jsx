import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './LogoNavbar.module.css';

function LogoNavbar() {
    return (
        <Link to="/">
            <img src="./logo/logo-Photoroom.png-Photoroom.png" alt="" className={styles.logo} />
        </Link>
    );
}

export default LogoNavbar;
