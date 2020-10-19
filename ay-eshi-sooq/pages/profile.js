import Head from 'next/head'
import React from 'react';
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import styles from '../styles/Styles.module.css'
import stylesProdects from '../styles/Products.module.css'
import stylesProfile from '../styles/Profile.module.css'
// import LogOut from './logout'
// import UserPostCreate from './creatpostform'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: 0,
            username: '',
            isLoggedIn: false,
            posts: props.posts1
        }

        this.getUserData = this.getUserData.bind(this);
    }

    getUserData() {
        if (process.browser) {
            let stoargeId = JSON.parse(localStorage.getItem('user_id'))
            let stoargeUsername = JSON.parse(localStorage.getItem('username'))
            let stoargeisLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))

            if (stoargeId && stoargeUsername && stoargeisLoggedIn) {

                this.setState({ user_id: stoargeId, username: stoargeUsername, isLoggedIn: stoargeisLoggedIn });
            }
        }
    }

    // logOut(event){
    //     <LogOut />
    // }

    render() {
        if (this.state.isLoggedIn == false) {
            this.getUserData();
        }
        return (
            <div className={styles.container}>
                <Head>
                    <title>Ai Eshi Sooq - Profile</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
                </Head>
                <Header />
                <main>
                    <h1 className={stylesProfile.mainTitle}>Welcome Backe {this.state.username}</h1>
                    <section className={stylesProfile.mainContents}>
                        <Profile />
                        {/* <LogOut />
                <UserPostCreate /> */}
                        {/* <button onSubmit={<LogOut />}>Log Out</button> */}
                        {/* <input type='submit' onClick={this.logOut} value='Log Out'/> */}
                        {/* <LogOut /> */}
                        {/* <button><LogOut /></button> */}
                    </section>
                    <div className={stylesProfile.mainUserPosts}>
                        {/* <h3>My Posts</h3> */}
                        {/* <section className={styles.mainContents}> */}

                        {this.state.posts.map(post => {
                            if (post.user_id == this.state.user_id) {
                                return (
                                    // <Link key={post.id} href='pages/user-posts/[id].js' as={`/user-posts/${post.id}`}>
                                    <>
                                        <div className={stylesProfile.mainPost}>
                                            <img src={post.post_img} className={stylesProdects.mainImg, stylesProfile.mainImg} />
                                            <div className={stylesProdects.mainInfo}>
                                                <h1 className={stylesProdects.mainTitle}>{post.post_title}</h1>
                                                <p className={stylesProdects.mainAboutProduct}>{post.post_description}</p>
                                                <p className={stylesProdects.price}><span className={stylesProdects.mainPrice}>Cost:</span> {post.price}JD</p>
                                                <span className={stylesProdects.mainPhone}>Whatsapp Number:</span><p className={stylesProdects.phone}> {post.phone_number}</p>
                                            </div>
                                        </div>
                                        <div className={stylesProfile.mainDivBtn}>
                                            <button className={stylesProfile.mainBtn1}>Edit</button>
                                        </div>
                                        {/* </Link> */}
                                    </>
                                )
                            }
                        })}

                        {/* </section> */}
                    </div>
                </main>
                <Footer />
            </div>
        )

    }
}

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

export default UserProfile;