import React from 'react';
import Link from 'next/link'
import LogOut from './logout'
import UserPostCreate from './creatpostform'
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
    
    // logOut(event){
    //     <LogOut />
    // }

    render(){
        if (this.state.isLoggedIn == false){
            this.getUserData();
          }
        return(
            <>
                <h1>User Profile</h1>
                <h2>Hi: {this.state.username}</h2>
                <LogOut />
                <UserPostCreate />
                {/* <button onSubmit={<LogOut />}>Log Out</button> */}
                {/* <input type='submit' onClick={this.logOut} value='Log Out'/> */}
                {/* <LogOut /> */}
                {/* <button><LogOut /></button> */}
                <div>
                    <h3>My Posts</h3>
                    <ul>
                        {this.state.posts.map(post => {
                            if(post.user_id == this.state.user_id){
                              return <Link  key={post.id} href='pages/user-posts/[id].js' as={`/user-posts/${post.id}`}>
                                        <a><li>{post.post_title}</li></a>
                                     </Link> 
                            }
                        }) }
                    </ul>
                </div>
                
            </>
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

export default  UserProfile;