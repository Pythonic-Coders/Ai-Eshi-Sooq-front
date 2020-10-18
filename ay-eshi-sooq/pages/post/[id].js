import styles from '../../styles/Styles.module.css'

export default function ProductListPage(props){
    return(
        <>
        <h1  className={styles.headerpage} > {props.resData.post_title} </h1>

    {<ProductDiv item={props.resData} /> } 

    </>
    ) 
}


function ProductDiv(props){
    return(

        <section className={styles.PostSection}>


         <img src={props.item.post_img} />
         <p><label>Description :</label></p>
         <p>{props.item.post_description}</p>
         <p><label>Price :</label>{props.item.price}$</p>
         <p><label>Phone Number :</label>{props.item.phone_number}</p>


         </section>
    );
}

export  async function getServerSideProps(context){
    const  id=context.query.id
    console.log(id)
    const res=await fetch(`https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${id}`)
    const dataObj=await res.json();


    return{ props:{resData : dataObj }  };
}
