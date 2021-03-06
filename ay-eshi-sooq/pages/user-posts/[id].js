import Head from 'next/head'
import styles from '../../styles/updatePosts.module.css'
import stylesProfile from '../../styles/Profile.module.css'
import stylesProdects from '../../styles/Products.module.css'
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


    async deleteHandler(event) {
        const url = `https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${this.props.userpost.id}/`;
        const response = await axios.delete(url)
        // console.log(response)

        window.location.href = '../profile';
        // window.location.assign('../profile');

    }

    inputChanged = event => {
        const cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState(cred);
        console.log(this.state)

    }

    async updateHandler(event) {
        const url = `https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${this.props.userpost.id}/`;
        const response = await axios.put(url, this.state)
        window.location.href = '../profile';
        // window.location.assign('../profile');
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
                    {/* <div className={styles.global}>
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
                            </form>
                            <button onClick={() => this.deleteHandler(this.props.userpost.id)} className={styles.update_button}>Delete</button>

                        </section>
                    </div> */}
                    <section className={stylesProfile.mainContents}>
                    <div className={stylesProfile.mainDiv}>
                        <form onSubmit={() => this.updateHandler(this.props.userpost.id)}>
                            <div className={stylesProfile.mainPost}>
                                {/* <label>
                    Image Link: */}
                                <input type='text' name='post_img' onChange={this.inputChanged} placeholder="Image Link" className={stylesProfile.mainInputs, stylesProdects.mainImg} value={this.state.post_img} />
                                {/* </label>*/}
                                {/* <br /> */}
                                {/* <label>
                    Ads Title: */}
                                <div className={stylesProfile.mainInfo}>
                                    <h1 className={stylesProfile.mainFormTitle}>What do you want to edit ...</h1>
                                    <input type='text' name='post_title' onChange={this.inputChanged} placeholder="Title" className={stylesProfile.mainInputs, stylesProfile.mainInputs1} value={this.state.post_title} />
                                    {/* </label>*/}
                                    {/* <br /> */}
                                    {/* <label>
                    Category: */}
                                    {/* <input type='text' name='category' onChange={this.inputChanged} placeholder="Category" className={stylesProfile.mainInputs} /> */}
                                    <select className={stylesProfile.mainInputs} onChange={this.inputChanged} name="category" required>
                                        <option value={this.state.category}   selected="selected">{this.state.category}</option>
                                        <option value="Cars">Cars</option>
                                        <option value="ComputersAndLaptops">Computers and Laptops</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Houses">Houses</option>
                                        <option value="HouseTools">Houses Tools</option>
                                        <option>Others</option>
                                    </select>
                                    {/* </label>*/}
                                    <br />
                                    {/* <label>
                    Description: */}
                                    <textarea name='post_description' rows="5" cols="50" onChange={this.inputChanged} placeholder="Description" className={stylesProfile.mainInputs2} value={this.state.post_description}>
                                    </textarea>
                                    {/* </label>
                <label>
            Price: */}
                                    <br />
                                    <div className={stylesProfile.divInputs}>
                                        <input type='text' name='price' onChange={this.inputChanged} placeholder="Price" className={stylesProfile.mainInputs} value={this.state.price} />
                                        {/* </label>
                <label>
            Phone Number */}
                                        <br />
                                        <input type='text' name='phone_number' onChange={this.inputChanged} placeholder="Phone Number" className={stylesProfile.mainInputs} value={this.state.phone_number} />
                                        {/* </label>*/}
                                    </div>
                                    <br />
                                    {/* <input type='submit' value='Post' /> */}
                                    <button type='submit' value='Update' className={stylesProfile.mainUpdateBtn}>Update</button>
                                </div>
                            </div>
                        </form>
                        <div className={stylesProfile.mainDeleteBtn}>
                            <button onClick={() => this.deleteHandler(this.props.userpost.id)} className={stylesProfile.mainBtn}>Delete</button>
                        </div>
                    </div>
                    </section>
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