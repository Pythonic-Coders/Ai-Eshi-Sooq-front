

export default function ProductListPage(props){
    return(
        <>
        
    <h1>read more</h1>
 
    {<ProductDiv item={props.resData} /> } )  
    
    </>
    ) 
}


function ProductDiv(props){
    return(
        <>
        <div>
      <p>{props.item.user_id}</p>
      <p>{props.item.post_title}</p>
      <p>{props.item.post_img}</p>
      <p>{props.item.post_description}</p>
      <p>{props.item.post_name}</p>
      <p>{props.item.post_description}</p>
      <p>{props.item.price}</p>
      <p>{props.item.phone_number}</p>
      <p>{props.item.category}</p>

      </div>
      </>
    );
}

export  async function getServerSideProps(context){
    const  id=context.query.id
    console.log(id)
    const res=await fetch(`https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${id}`)
    const dataObj=await res.json();
   

    return{ props:{resData : dataObj }  };
}


