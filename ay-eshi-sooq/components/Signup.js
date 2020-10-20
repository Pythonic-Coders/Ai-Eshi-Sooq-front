import styles from '../styles/SignupAndLogin.module.css'
import Link from 'next/link'
// import Login from '../pages/login'
const { Component } = require("react");
import React from 'react';

export default class Signup extends React.Component {


    state = {
        credentials: {
            email: '',
            username: '',
            password: ''
        }
    }

    signup = event => {
        event.preventDefault();
        // console.log(this.state.credentials);
        fetch('https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/user/', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .then(data => data.json())
            .then(data => {
                if (data.id) {
                    window.location.href = '/login';
                } else {
                    throw new Error('this username already taken');
                }
            }).catch((error) => {
                document.getElementById('signErorr').innerHTML = error
            })

    }


    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });

    }

    render() {
        return (
            <main className={styles.main}>
                <section className={styles.mainSinupContent}>
                    <div className={styles.mainSinup}>
                        {/* <img src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/ecom-options-og.jpg"/> */}
                        <h1 className={styles.mainTitle}>Ay Eshi Sooq</h1>
                        <p className={styles.mainIntro}>To be one of our family and be ableto display your things for sale, You've to sign up first</p>
                        <p id='signErorr' className={styles.mainError}></p>
                        <form className={styles.mainForm}>
                            {/* <label>
                                Username: */}
                            <input type='text' name='username' value={this.state.credentials.username}
                                onChange={this.inputChanged} placeholder='Usernam' className={styles.mainInputs} required></input>
                            {/* </label> */}
                            <br />
                            {/* <label>
                                Email: */}
                            <input type='email' name='email' value={this.state.credentials.email}
                                onChange={this.inputChanged} placeholder='Email' className={styles.mainInputs} required></input>
                            {/* </label> */}
                            <br />
                            {/* <label>
                                Password: */}
                            <input type='password' name='password' value={this.state.credentials.password}
                                onChange={this.inputChanged} placeholder='Password' className={styles.mainInputs} required></input>
                            {/* </label> */}
                            <br />
                            <button type='submit' onClick={this.signup} className={styles.mainBtn}>Sign Up</button>
                        </form>
                    </div>
                    <div className={styles.mainSinup1}>
                        {/* <img src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/ecom-options-og.jpg"/> */}
                    </div>
                </section>

                {/* <div>


                    {/* <form>
                    <label>
                        Email:
                        <input type='email' name='email' value={this.state.credentials.email}
                        onChange={this.inputChanged}></input>
                    </label>
                    <br/>
                    <label>
                        Username:
                        <input type='text' name='username' value={this.state.credentials.username}
                        onChange={this.inputChanged}></input>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type='password' name='password' value={this.state.credentials.password}
                        onChange={this.inputChanged}></input>
                    </label>
                    <br/>
                    <button type='submit' onClick={this.signup}>Sign Up</button>
                </form> 
                </div> */}
                <footer>
                    <div className={styles.mainFooter}></div>
                    <p className={styles.footerPara}>Ai Eshi Sooq &sdot; All copyrights are reserved &copy; 2020</p>
                </footer>
            </main>
        )
    }
}

// export default function Signup() {
//     return (
//         <main className={styles.main}>
//             <section className={styles.mainSinupContent}>
//                 <div className={styles.mainSinup}>
//                     {/* <img src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/ecom-options-og.jpg"/> */}
//                 </div>
//                 <div className={styles.mainSinup1}>
//                     {/* <img src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/ecom-options-og.jpg"/> */}
//                 </div>
//             </section>
//         </main>
//     )
// }