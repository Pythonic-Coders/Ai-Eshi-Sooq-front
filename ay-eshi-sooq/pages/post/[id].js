import Head from 'next/head'
// import { mockData } from "../data.js"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import styles from '../styles/Home.module.css'
import stylesProdects from '../../styles/Products.module.css'
import styles from '../../styles/Styles.module.css'
import Link from 'next/link'


export default class Details extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            username :''
        }
    }   

    async  getUserData(props){
        const res = await fetch(` https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/user/${this.props.postData.user_id}/`)
        const dataObj = await res.json()
    
        console.log(dataObj.username)  
        this.setState({username:dataObj.username})

        return{props:{userData:dataObj.username}}
    
       }


    render(){
        this.getUserData()
        return(
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
                <section className={styles.mainContents}>
                    <div className={styles.mainItmes}>
                        {/* {<ProductDiv item={props.resData} />} */}
                        <div className={styles.mainDiv}>
                  <div className={stylesProdects.mainPost}>
                <img src={this.props.postData.post_img} className={stylesProdects.mainImg} />
                <div className={stylesProdects.mainInfo}>
                    <h1 className={stylesProdects.mainTitle}>{this.props.postData.post_title}</h1>
                    <p className={stylesProdects.mainAboutProduct}>{this.props.postData.post_description}</p>
                    <p className={stylesProdects.price}><span className={stylesProdects.mainPrice}>Cost:</span> {this.props.postData.price}JD</p>
                    <p className={stylesProdects.phone }><span className={stylesProdects.mainPhone}>Sellers Name:</span> {this.state.username}</p>
                   <p className={stylesProdects.phone}> <span className={stylesProdects.mainPhone}>Whatsapp Number: </span> {this.props.postData.phone_number}</p>
                </div>
            </div>
        </div>




                    </div>
                </section>
            </main>
            <Footer />
        </div>
        );
    }



    

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



export  async function getServerSideProps(context){
    const  id=context.query.id
   
    const res=await fetch(`https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${id}`)
    const dataObj=await res.json();

    console.log(dataObj);
    return{ props:{postData : dataObj }  };
    
}