import Head from 'next/head'
import { mocData } from "../data.js"
import Header from '../components/Header'
import Footer from '../components/Footer'
// import styles from '../styles/Home.module.css'
// import styles from '../styles/Products.module.css'
import styles from '../styles/Styles.module.css'
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
            <main>
                <section className={styles.mainHeroImgs}>
                    <div className={styles.mainHeroContainerHouses}>
                        <div className={styles.mainHeroTitle}></div>
                    </div>
                </section>
                <div className={styles.mainDivTitle}>
                    <h1 className={styles.mainTitle}>Houses</h1>
                </div>
                <section className={styles.mainContents}>
                    <div className={styles.mainItmes}>

                        {/* <h1 className={styles.mainTitle}>Houses</h1> */}
                        {/* { mocData.map( data => <ProductDiv item={data} />) } */}

                        {/* { props.resData.map( data  =>  <ProductDiv item={data} />  ) } */}
                        {props.resData.map(data => { if (data.category == props.cat) return <ProductDiv item={data} /> })}
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
            <img src={props.item.post_img} className={styles.mainImg} />
            <h1 className={styles.mainProductName}>{props.item.post_title}</h1>
            <p className={styles.mainAboutProduct}>{props.item.post_description}</p>
            <div className={styles.mainSubDiv}>
                <p className={styles.mainPrice}>{props.item.price}JD</p>
                <Link key={props.item.id} href="/post/[id].js" as={`/post/${props.item.id}`}>
                    <button className={styles.mainDetailbtn}>READ MORE</button>
                </Link>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch('https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/posts/')
    const dataObj = await res.json();

    { console.log(context.query.productListPage) }

    return { props: { resData: dataObj, cat: context.query.productListPage } };
}