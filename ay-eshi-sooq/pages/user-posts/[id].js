import Head from 'next/head'
import styles from '../../styles/updatePosts.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default class UserPostDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.userpost.user_id,
            post_title: this.props.userpost.post_title,
            category: this.props.userpost.category,
            post_img: this.props.userpost.post_img,
            post_description: this.props.userpost.post_description,
            price: this.props.userpost.price,
            phone_number: this.props.userpost.phone_number
        }
    }


    async deleteHandler() {
        const url = `https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${this.props.userpost.id}/`;
        // const router = useRouter();

        // console.log(props.userpost.id)
        const response = await axios.delete(url)
        // router.push('/user-profile');
        window.location.href = '/user-profile';
    }

    inputChanged = event => {
        const cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState(cred);
        console.log(this.state)

    }

    async updateHandler(event) {
        const url = `https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${this.props.userpost.id}/`;
        // const router = useRouter();
        const response = await axios.put(url, this.state)
        // router.push('/');
        window.location.href = '/user-profile';
    }

    render() {

        return (
            <div className={styles.container}>
                <Head>
                    <title>Ai Eshi Sooq</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
                </Head>
                <Header />
                <main>
                    <div className={styles.global}>
                        <section className={styles.mainContent}>
                            <img src={this.state.post_img} />
                            <form onSubmit={() => this.updateHandler(this.props.userpost.id)} >
                                <label>
                                    Ads Title:
                </label>
                                <input type='text' name='post_title' value={this.state.post_title} onChange={this.inputChanged} />
                                <br />
                                <label>
                                    Category:
                </label>
                                <input type='text' name='category' value={this.state.category} onChange={this.inputChanged} />
                                <br />
                                <label>
                                    Image Link:
                </label>
                                <input type='text' name='post_img' value={this.state.post_img} onChange={this.inputChanged} />
                                <br />
                                <label>
                                    Description:
                </label>
                                <textarea name='post_description' rows="4" cols="50" value={this.state.post_description} onChange={this.inputChanged}>
                                </textarea>
                                <br />
                                <label>
                                    Price:
                </label>
                                <input type='text' name='price' value={this.state.price} onChange={this.inputChanged} />
                                <br />
                                <label>
                                    Phone Number
                </label>
                                <input type='text' name='phone_number' value={this.state.phone_number} onChange={this.inputChanged} />
                                <br />
                                <button type='submit' value='Update' className={styles.update_button}>Update</button>
                                <button onClick={() => this.deleteHandler(this.props.userpost.id)} className={styles.update_button}>Delete</button>

                            </form>

                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export async function getServerSideProps(context) {
    const id = context.query.id
    console.log(id)
    const res = await fetch(`https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${id}/`);
    const dataObj = await res.json();
    return { props: { userpost: dataObj } };
}