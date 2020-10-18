import { mocData} from "../data.js"
import Link from 'next/link'

export default function ProductListPage(props){
    return(
        <>
        
    <h1>Product list</h1>
    {/* { mocData.map( data => <ProductDiv item={data} />) } */}
    
    {/* { props.resData.map( data  =>  <ProductDiv item={data} />  ) } */}
    { props.resData.map( data  =>{ if (data.category==props.cat)   return <ProductDiv item={data} /> } )  }
    
    </>
    ) 
}


function ProductDiv(props){
    return(
        <>
      <p>{props.item.post_title}</p>
      <img src={props.item.post_img} /> 
      <p>{props.item.price}</p>

      {/* <p>{props.item.id}</p>
      <p>{props.item.user_id}</p>
      <p>{props.item.post_description}</p>
      <p>{props.item.post_name}</p>
      <p>{props.item.post_description}</p>
      <p>{props.item.phone_number}</p>
      <p>{props.item.category}</p> */}

      <Link key={props.item.id} href="/post/[id].js" as={`/post/${props.item.id}`}>  
      <a>read more </a>
       </Link>

      </>
    );
}

export  async function getServerSideProps(context){
    const res=await fetch('https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/posts/')
    const dataObj=await res.json();
   
    {console.log(context.query.productListPage)}

    return{ props:{resData : dataObj , cat:context.query.productListPage }  };
}
