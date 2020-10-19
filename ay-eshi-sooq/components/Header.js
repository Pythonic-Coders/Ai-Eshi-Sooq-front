import styles from '../styles/Styles.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerLogoLink}>
                    <Link href="/">
                        <a>
                            <img src="https://www.freelogodesign.org/file/app/client/thumb/60d768a5-2396-4083-a549-3de683eaf622_200x200.png?1602766316569" className={styles.headerLogo} />
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


                            <Link href="/ComputersAndLaptops"  >
                                <a className={styles.headerLink1}>Computers and laptops</a>
                            </Link>

                            <Link href="/Cars" >
                                <a className={styles.headerLink1}>Cars</a>
                            </Link>
                            
                            <Link href="/Electronics">
                                <a className={styles.headerLink1}>Electronics</a>
                            </Link>
                            <Link href={{
                                pathname: '/[productListPage]',
                                query: { productListPage: 'Houses' }
                            }}>
                                <a className={styles.headerLink1}>Houses</a>
                            </Link>
                            <Link href="/HouseTools">
                                <a className={styles.headerLink1}>House Tools</a>
                            </Link>
                            <Link href="/Furniture">
                                <a className={styles.headerLink1}>Furniture</a>
                            </Link>
                        </div>
                    </div>
                    <Link href="/login">
                        <a className={styles.headerLink}>Login</a>
                    </Link>
                    <Link href="/signup">
                        <a className={styles.headerLink}>Signup</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}