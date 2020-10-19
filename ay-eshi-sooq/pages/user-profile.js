import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Styles.module.css'
import LogOut from './logout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserPostCreate from './creatpostform'

// import styles from '../styles/Home.module.css'
// import styles from '../styles/Products.module.css'



class  UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id:0,
            username:'',
            isLoggedIn: false,
            posts:props.posts1        
        }

        this.getUserData = this.getUserData.bind(this);
    }

    getUserData(){
        if (process.browser) {
            let stoargeId = JSON.parse(localStorage.getItem('user_id'))
            let stoargeUsername = JSON.parse(localStorage.getItem('username'))
            let stoargeisLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
        
            if(stoargeId && stoargeUsername && stoargeisLoggedIn){
        
              this.setState({user_id: stoargeId, username: stoargeUsername, isLoggedIn:stoargeisLoggedIn});
            }
        }
    }
    
   

    render(){
       
        if (this.state.isLoggedIn == false){
            this.getUserData();
          }
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
                <div className={styles.mainDivTitle}>
                    <h1 className={styles.mainTitle}>Personal Ads</h1>
                </div>
                <section className={styles.mainContents}>
                    <div className={styles.mainItmes}>

                      
                    {this.state.posts.map(post => {
                            if(post.user_id == this.state.user_id){
                              return (
                                    <>
                <div className={styles.mainDiv}>
                
                <img src={post.post_img} className={styles.mainImg} />
                <h1 className={styles.mainProductName}>{post.post_title}</h1>
                <p className={styles.mainAboutProduct}>{post.post_description}</p>
                <div className={styles.mainSubDiv}>
                    <p className={styles.mainPrice}>{post.price}JD</p>
                   
                </div>
                <Link  key={post.id} href='pages/user-posts/[id].js' as={`/user-posts/${post.id}`}>
                                            <a>Edit</a>
                     </Link> 
            </div>


                                    </>

                              )
                            }
                        }) }
                    </div>
                </section>
            </main>
            <Footer />
        </div>

                        
                
            
        )
        
    }


}



{/* <Link  key={post.id} href='pages/user-posts/[id].js' as={`/user-posts/${post.id}`}>
                                        <a><li>{post.post_title}</li></a>
                                     </Link>  */}

export async function getServerSideProps(props) {

    const response = await fetch('https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/posts/');
    const posts = await response.json();
    console.log(posts)
    return {
        props: {
            posts1: posts,
        },
    }
}

export default  UserProfile;