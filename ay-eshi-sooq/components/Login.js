const { Component } = require("react");
import React from 'react';
import styles from '../styles/SignupAndLogin.module.css'
import Link from 'next/link'

class Login extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            credentials: {
                username: '',
                password: ''
            }


        }
    }

    login = event => {
        event.preventDefault();
        // console.log(this.state.credentials);
        fetch('https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/auth/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                if (data.token) {
                    localStorage.setItem('user_id', JSON.stringify(data.user_id))
                    localStorage.setItem('username', JSON.stringify(data.username))
                    localStorage.setItem('token', JSON.stringify(data.token))
                    localStorage.setItem('isLoggedIn', JSON.stringify(true))
                    // console.log(data.user_id)
                    window.location.href = '/';
                } else {
                    // alert('error');
                    throw new Error('Incorrect password or username entered. Please try again.');
                }


            }).catch((error) => {
                // console.error(error)
                // alert(error);
                document.getElementById('logErorr').innerHTML = error
            })
    }


    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });

    }

    render() {
        return (
            <main>
                <section className={styles.mainSinupContent}>
                    <div className={styles.mainSinup}>
                        <h1 className={styles.mainTitle}>Ay Eshi Sooq</h1>
                        <p className={styles.mainIntro}>Login and show people what you have to sale</p>
                        <p id='logErorr' className={styles.mainError}></p>
                        <form  className={styles.mainForm1}>
                            {/* <label>
                                Username: */}
                        <input type='text' name='username' value={this.state.credentials.username}
                                    onChange={this.inputChanged} placeholder="Username" className={styles.mainInputs} required></input>
                            {/* </label> */}
                            {/* <br /> */}
                            {/* <label>
                                Password: */}
                        <input type='password' name='password' value={this.state.credentials.password}
                                    onChange={this.inputChanged} placeholder="Password" className={styles.mainInputs} required></input>
                            {/* </label> */}
                            <br />
                            <button type='submit' onClick={this.login} className={styles.mainBtn1}>Log in</button>
                        </form>
                        <p className={styles.mainNewAccount}>Don't have account?</p>
                        <Link href="/signup">
                            <button className={styles.mainBtn2}>Create New Account</button>
                        </Link>
                    </div>
                    <div className={styles.mainSinup1}>
                        {/* <img src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/ecom-options-og.jpg"/> */}
                    </div>
                </section>
                <footer>
                    <div className={styles.mainFooter}></div>
                    <p className={styles.footerPara}>Ai Eshi Sooq &sdot; All copyrights are reserved &copy; 2020</p>
                </footer>
            </main>
        )
    }
}

export default Login;