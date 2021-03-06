import axios from 'axios'
import React from 'react'
import stylesProfile from '../styles/Profile.module.css'
import styles from '../styles/Styles.module.css'
import stylesProdects from '../styles/Products.module.css'

export default class UserPostCreate extends React.Component {

    constructor(props) {
        super(props);
        if (process.browser) {
            //  userId = JSON.parse(localStorage.getItem('user_Id'))

            this.state = {
                user_id: JSON.parse(localStorage.getItem('user_id')),
                post_title: '',
                category: '',
                post_img: '',
                post_description: '',
                price: '',
                phone_number: ''
            }
        }

    }


    // async deleteHandler() {
    //     const url = `https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${this.props.userpost.id}/`;
    //     // const router = useRouter();

    //     // console.log(props.userpost.id)
    //     const response = await axios.delete(url)
    //     // router.push('/user-profile');
    //     window.location.href = '/user-profile';
    // }

    inputChanged = event => {
        const cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState(cred);
        console.log(this.state)

    }


    async postHandler() {
        const url = `https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/posts/`;

        const response = await axios.post(url, this.state)
        // router.push('/');
        // window.location.href = '/profile';
        window.location.assign('/profile');
        console.log(this.state)
    }

    render() {

        return (
            <div className={stylesProfile.mainDiv}>
                <form onSubmit={() => this.postHandler()}>
                    <div className={stylesProfile.mainPost}>
                        {/* <label>
                    Image Link: */}
                        <input type='text' name='post_img' onChange={this.inputChanged} placeholder="Image Link" className={stylesProfile.mainInputs, stylesProdects.mainImg} />
                        {/* </label>*/}
                        {/* <br /> */}
                        {/* <label>
                    Ads Title: */}
                        <div className={stylesProfile.mainInfo}>
                            <h1 className={stylesProfile.mainFormTitle}>What do you want to sell ...</h1>
                            <input type='text' name='post_title' onChange={this.inputChanged} placeholder="Title" className={stylesProfile.mainInputs, stylesProfile.mainInputs1} />
                            {/* </label>*/}
                            {/* <br /> */}
                            {/* <label>
                    Category: */}
                            {/* <input type='text' name='category' onChange={this.inputChanged} placeholder="Category" className={stylesProfile.mainInputs} /> */}
                            <select className={stylesProfile.mainInputs} onChange={this.inputChanged} name="category" required>
                                <option placeholder="--- Choose a category ---">--- Choose a category ---</option>
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
                            <textarea name='post_description' rows="5" cols="50" onChange={this.inputChanged} placeholder="Description" className={stylesProfile.mainInputs2}>
                            </textarea>
                            {/* </label>
                <label>
            Price: */}
                            <br />
                            <div className={stylesProfile.divInputs}>
                                <input type='text' name='price' onChange={this.inputChanged} placeholder="Price" className={stylesProfile.mainInputs} />
                                {/* </label>
                <label>
            Phone Number */}
                                <br />
                                <input type='text' name='phone_number' onChange={this.inputChanged} placeholder="Phone Number" className={stylesProfile.mainInputs} />
                                {/* </label>*/}
                            </div>
                            <br />
                            {/* <input type='submit' value='Post' /> */}
                            <button type="submit" className={stylesProfile.mainBtn}>Post</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// export async function getServerSideProps(context){
//     const id = context.query.id
//     console.log(id)
//     const res = await fetch(`https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${id}/`);
//     const dataObj = await res.json();
//     return { props: {userpost: dataObj} };
// }