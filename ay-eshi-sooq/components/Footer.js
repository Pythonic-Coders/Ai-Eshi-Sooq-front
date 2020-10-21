import styles from '../styles/Styles.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerImgLink}>
                    <Link href="/">
                        <a>
                            <img src="https://www.freelogodesign.org/file/app/client/thumb/5c9c1437-f18a-4c54-a3db-c9bdf801b09d_200x200.png?1603095724391" className={styles.footerImg} />
                        </a>
                    </Link>
                </div>

                {/* <div className={styles.footerDiv}></div> */}
                <nav className={styles.footerNav}>
                    <h4 className={styles.footerTitle}>Categories</h4>
                    <Link href="/cars">
                        <a className={styles.footerLink}>Cars</a>
                    </Link>
                    <Link href="/ComputersAndLaptops">
                        <a className={styles.footerLink}>Computers and laptops</a>
                    </Link>
                    <Link href="/electronics">
                        <a className={styles.footerLink}>Electronics</a>
                    </Link>
                    <Link href="/Furniture">
                        <a className={styles.footerLink}>Furniture</a>
                    </Link>
                    <Link href={{
                        pathname: '/[productListPage]',
                        query: { productListPage: 'Houses' }
                    }}>
                        <a className={styles.footerLink}>Houses</a>
                    </Link>
                    <Link href="/HouseTools">
                        <a className={styles.footerLink}>House Tools</a>
                    </Link>
                </nav>
                <nav className={styles.footerNav}>
                    <h4 className={styles.footerTitle}>Contact Us</h4>
                    <div className={styles.footerContactInfo}>
                        <img src="https://icon-library.com/images/phone-icon-white-png/phone-icon-white-png-17.jpg" className={styles.footerContactImg} />
                        <h5 className={styles.footerInfo}>+926779102229</h5>
                    </div>
                    <div className={styles.footerContactInfo}>
                        <img src="https://vectorified.com/images/email-icon-white-11.png" className={styles.footerContactImg1} />
                        <h5 className={styles.footerInfo}>aieshisooq@info.com</h5>
                    </div>
                    <h4 className={styles.footerTitle}>Know more</h4>
                    <Link href="/about">
                        <a className={styles.footerLink}>About us</a>
                    </Link>
                </nav>
                <div className={styles.footerSocialPart}>
                    <nav className={styles.footerNav}>
                        <h4 className={styles.footerTitle}>Follow Us Through</h4>
                        <div className={styles.footerSocialIcons}>
                            <Link href="https://facebook.com">
                                <a target="_blank">
                                    <img src="https://toppng.com/public/uploads/thumbnail/facebook-button-circle-fb-icon-white-115629275500ovp1ilugo.png" className={styles.footerSocialIcon} />
                                </a>
                            </Link>
                            <Link href="https://twitter.com">
                                <a target="_blank">
                                    <img src="https://icon-library.com/images/twitter_icon_white_png_1432104.png" className={styles.footerSocialIcon} />
                                </a>
                            </Link>
                            <Link href="https://instagram.com">
                                <a target="_blank">
                                    <img src="https://toppng.com/public/uploads/thumbnail/instagram-logo-white-circle-11549680078dhuqximjb0.png" className={styles.footerSocialIcon} />
                                </a>
                            </Link>
                            <Link href="https://snapchat.com">
                                <a target="_blank">
                                    <img src="https://www.pinclipart.com/picdir/big/369-3695192_if-you-wanna-get-to-know-me-even.png" className={styles.footerSocialIcon} />
                                </a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={styles.footerDiv}></div>
            <p className={styles.footerPara}>Ai Eshi Sooq &sdot; All copyrights are reserved &copy; 2020</p>
        </footer>
    )
}