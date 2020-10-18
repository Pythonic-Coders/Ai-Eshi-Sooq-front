export default function ProductListPage(props){
  

    return(
    <>
    <h1>Product list</h1>
      { props.resData.map( data  =>{ if (data.category== cat)   return <ProductDiv item={data} /> } )  }
    </>
    ) 
}
function ProductDiv(props){
    return(
        <>
      <p>{props.item.user_id}</p>
      <p>{props.item.post_title}</p>
      <p>{props.item.post_img}</p>  
      <p>{props.item.post_description}</p>
      <p>{props.item.post_name}</p>
      <p>{props.item.post_description}</p>
      <p>{props.item.price}</p>
      <p>{props.item.phone_number}</p>
      <p>{props.item.category}</p>
      </>
    );
}
export  async function getServerSideProps(context){
    const res=await fetch('https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/posts/')
    const dataObj=await res.json();
    console.log(context.query.ProductListPage)

    return{ props:{resData : dataObj , cat: context.query.ProductListPage }  };
}