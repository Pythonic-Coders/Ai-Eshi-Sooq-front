import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import React from 'react'

// export default function UserPostDetails(props){

//     const url = `https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${props.userpost.id}/`;

//     const router = useRouter();

//     async function deleteHandler() {

//         console.log(props.userpost.id)
//         const response = await axios.delete(url)
//         router.push('/user-profile');
//     }

//     return (
//         <>
//             <form>
//                 <label>
//                     Ads Title:
//                     <input type='text' name='post_title' value={props.userpost.post_title}/>
//                 </label>
//                 <br/>
//                 <label>
//                     Category:
//                     <input type='text' name='category' value={props.userpost.category}/>
//                 </label>
//                 <br/>
//                 <label>
//                     Image Link:
//                     <input type='text' name='post_img' value={props.userpost.post_img}/>
//                 </label>
//                 <br/>
//                 <label>
//                     Description:
//                     <textarea name='post_description' rows="4" cols="50" value={props.userpost.post_description}>
//                     Ads Description
//                     </textarea>
//                 </label>
//                 <br/>
//                 <label>
//                     Price:
//                     <input type='number' name='price' value={props.userpost.price}/>
//                 </label>
//                 <br/>
//                 <label>
//                     Phone Number
//                     <input type='number' name='phone_number' value={props.userpost.phone_number}/>
//                 </label>
//             </form>

//             <button onClick={() => deleteHandler(props.userpost.id)}>Delete</button>
//         </>
//     )
// }


export default class UserPostDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user_id:this.props.userpost.user_id,
            post_title:this.props.userpost.post_title,
            category:this.props.userpost.category,
            post_img:this.props.userpost.post_img,
            post_description:this.props.userpost.post_description,
            price:this.props.userpost.price,
            phone_number:this.props.userpost.phone_number
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
        const response = await axios.put(url,this.state)
        // router.push('/');
        window.location.href = '/user-profile';
    }

    render(){

    return (
        <>
            <form onSubmit={() => this.updateHandler(this.props.userpost.id)}>
                <label>
                    Ads Title:
                    <input type='text' name='post_title' value={this.state.post_title} onChange={this.inputChanged}/>
                </label>
                <br/>
                <label>
                    Category:
                    <input type='text' name='category' value={this.state.category} onChange={this.inputChanged}/>
                </label>
                <br/>
                <label>
                    Image Link:
                    <input type='text' name='post_img' value={this.state.post_img} onChange={this.inputChanged}/>
                </label>
                <br/>
                <label>
                    Description:
                    <textarea name='post_description' rows="4" cols="50" value={this.state.post_description} onChange={this.inputChanged}>
                    </textarea>
                </label>
                <br/>
                <label>
                    Price:
                    <input type='text' name='price' value={this.state.price} onChange={this.inputChanged}/>
                </label>
                <br/>
                <label>
                    Phone Number
                    <input type='text' name='phone_number' value={this.state.phone_number} onChange={this.inputChanged}/>
                </label>
                <br/>
                <input type='submit' value='Update'/>
            </form>

            <button onClick={() => this.deleteHandler(this.props.userpost.id)}>Delete</button>
        </>
    )
}
}

export async function getServerSideProps(context){
    const id = context.query.id
    console.log(id)
    const res = await fetch(`https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${id}/`);
    const dataObj = await res.json();
    return { props: {userpost: dataObj} };
}