import styles from '../styles.module.css'
import Link from 'next/link'
// import Link  from 'next/router'
export default function Home() {
  
  return (
    
    <div className={styles.hello}>
      <p>Hello World</p>
      {/* <Link href="/productListPage" >
        <a>productListPage</a>
      </Link> */}
<Link
  href={{
    pathname: '/productListPage',
    query:{ category: 'cars'}
  }}
> Cars gener </Link>

{/* <Link href={{
              pathname: '/[productListPage]',
              query:{ productListPage: 'cars'}
            }}
            ></Link> */}
       {/* <Link to={'/productListPage'} */}
      {/* <Link href="/productListPage" params="hous" >
                <a>productListPage</a>
            </Link> */}
      {/* <Route exact path="/movie/:id" component={MovieDetailsContainer} /> */}
      {/* <Link to={{ pathname: '/productListPage', query: { foo: 'car'} }}>My route</Link> */}
    </div>
  )
}