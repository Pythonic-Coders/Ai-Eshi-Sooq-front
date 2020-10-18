import Head from 'next/head'
// import { mockData } from "../data.js"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import styles from '../styles/Home.module.css'
import stylesProdects from '../../styles/Products.module.css'
import styles from '../../styles/Styles.module.css'
import Link from 'next/link'

export default function ProductListPage(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ai Eshi Sooq</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
            </Head>
            <Header />
            {/* <h1>read more</h1> */}
            <main>
            <section className={styles.mainHeroImgs}>
                    <div className={styles.mainHeroContainerHouses}>
                        <div className={styles.mainHeroTitle}></div>
                    </div>
                </section>
                <section className={styles.mainContents}>
                    <div className={styles.mainItmes}>
                        {<ProductDiv item={props.resData} />}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}


function ProductDiv(props) {
    return (
        <div className={styles.mainDiv}>
            <div className={stylesProdects.mainPost}>
                <img src={props.item.post_img} className={stylesProdects.mainImg} />
                <div className={stylesProdects.mainInfo}>
                    <h1 className={stylesProdects.mainTitle}>{props.item.post_title}</h1>
                    <p className={stylesProdects.mainAboutProduct}>{props.item.post_description}</p>
                    <p className={stylesProdects.price}><span className={stylesProdects.mainPrice}>Cost:</span> {props.item.price}JD</p>
                    <span className={stylesProdects.mainPhone}>Whatsapp Number:</span><p className={stylesProdects.phone}> {props.item.phone_number}</p>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const id = context.query.id
    console.log(id)
    const res = await fetch(`https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${id}`)
    const dataObj = await res.json();


    return { props: { resData: dataObj } };
}