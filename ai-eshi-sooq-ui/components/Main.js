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
                {/* <div className={styles.mainHeroContainer1}>
                    <div className={styles.mainHeroTitle}></div>
                </div>
                <div className={styles.mainHeroContainer2}>
                    <div className={styles.mainHeroTitle}></div>
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a> */}
            </section>
            <div className={styles.mainDivTitle}>
                <h1 className={styles.mainTitle}>Products</h1>
            </div>
            <section className={styles.mainContents}>
                <div className={styles.mainItmes}>
                    <i class="fas fa-car"></i>
                    {mockData.map(data => <Products item={data} />)}
                </div>
            </section>
            <script src="../style.js"></script>
        </main>

    )
}
function Products(props) {
    return (
        <div className={styles.mainDiv}>
            <img src={props.item.post_img} className={styles.mainImg} />
            <h1 className={styles.mainProductName}>{props.item.post_name}</h1>
            <p className={styles.mainAboutProduct}>{props.item.post_description}</p>
            <p className={styles.mainPrice}>{props.item.price}</p>
        </div>
    )
}