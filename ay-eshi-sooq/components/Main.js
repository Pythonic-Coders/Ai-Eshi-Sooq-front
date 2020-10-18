import { mockData } from "../data.js"
import styles from '../styles/Styles.module.css'
import Link from 'next/link'

export default function Main(props) {
    return (
        <main>
            <section className={styles.mainHeroImgs}>
                <div className={styles.mainHeroContainer}>
                    <div className={styles.mainHeroTitle}></div>
                </div>
            </section>
            <div className={styles.mainDivTitle}>
                <h1 className={styles.mainTitle}>Products</h1>
            </div>
            <section className={styles.mainContents}>
                <div className={styles.mainDivContents}>
                    <div className={styles.mainCategories}>
                        <Link href="/Accessories">
                            <h1 className={styles.mainTitle1}>Accessories</h1>
                        </Link>
                    </div>
                    <div className={styles.mainCategories1}>
                        <Link href="/Cars">
                            <h1 className={styles.mainTitle1}>Cars</h1>
                        </Link>
                    </div>
                </div>
                <div className={styles.mainDivContents}>
                    <div className={styles.mainCategories2}>
                        <Link href="/Clothes">
                            <h1 className={styles.mainTitle1}>Clothes</h1>
                        </Link>
                    </div>
                    <div className={styles.mainCategories3}>
                        <Link href="/Electronics">
                            <h1 className={styles.mainTitle1}>Electronics</h1>
                        </Link>
                    </div>
                </div>
                <div className={styles.mainDivContents}>
                    <div className={styles.mainCategories4}>
                        <Link href={{
                            pathname: '/[productListPage]',
                            query: { productListPage: 'Houses' }
                        }}
                        >
                            <h1 className={styles.mainTitle1}>Houses</h1>
                        </Link>
                    </div>
                    <div className={styles.mainCategories5}>
                        <Link href="/Shose">
                            <h1 className={styles.mainTitle1}>Shoes</h1>
                        </Link>
                    </div>
                </div>
            </section>
            <script src="../style.js"></script>
        </main>

    )
}
// function Products(props) {
//     return (
//         <div className={styles.mainDiv}>
//             <img src={props.item.post_img} className={styles.mainImg} />
//             <h1 className={styles.mainProductName}>{props.item.post_name}</h1>
//             <p className={styles.mainAboutProduct}>{props.item.post_description}</p>
//             <p className={styles.mainPrice}>{props.item.price}</p>
//         </div>
//     )
// }