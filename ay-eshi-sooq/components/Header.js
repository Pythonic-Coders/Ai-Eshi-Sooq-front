import styles from '../styles/Styles.module.css'
import Link from 'next/link'

export default function Header() {
    let isLoggedIn = false;
    let username = ''
    if (process.browser){
        isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
        username = JSON.parse(localStorage.getItem('username'));
    }
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerLogoLink}>
                    <Link href="/">
                        <a>
                            <img src="https://www.freelogodesign.org/file/app/client/thumb/5c9c1437-f18a-4c54-a3db-c9bdf801b09d_200x200.png?1603095724391" className={styles.headerLogo} />
                        </a>
                    </Link>
                </div>
                <nav className={styles.headerNav}>
                    <Link href="/">
                        <a className={styles.headerLink}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className={styles.headerLink}>About</a>
                    </Link>
                    <div className={styles.dropdown}>
                        <a className={styles.headerLink1}>Categories</a>
                        <div className={styles.dropdownContent}>
                            <Link href="/accessories">
                                <a className={styles.headerLink1}>Accessories</a>
                            </Link>
                            <Link href="/cars">
                                <a className={styles.headerLink1}>Cars</a>
                            </Link>
                            <Link href="/clothes">
                                <a className={styles.headerLink1}>Clothes</a>
                            </Link>
                            <Link href="/electronics">
                                <a className={styles.headerLink1}>Electronics</a>
                            </Link>
                            <Link href={{
                                pathname: '/[productListPage]',
                                query: { productListPage: 'Houses' }
                            }}>
                                <a className={styles.headerLink1}>Houses</a>
                            </Link>
                            <Link href="/shoes">
                                <a className={styles.headerLink1}>Shoes</a>
                            </Link>
                            {/* <Link href="/watches">
                                <a className={styles.headerLink1}>Watches</a>
                            </Link> */}
                        </div>
                    </div>
                    
                    {(() => {
                        if (isLoggedIn) {
                        return (
                            <Link href="/user-profile">
                                <a className={styles.headerLink}>{username}</a>
                            </Link>
                        )
                        }else {
                            return (
                                <>
                                    <Link href="/login">
                                        <a className={styles.headerLink}>Login</a>
                                    </Link>
                                    <Link href="/signup">
                                        <a className={styles.headerLink}>Signup</a>
                                    </Link>
                                </>
                            )
                          }
                        })()}
                    
                    
                </nav>
            </div>
        </header>
    )
}