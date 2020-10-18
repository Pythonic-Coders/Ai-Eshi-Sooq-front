import styles from '../styles.module.css'
import Link from 'next/link'
// import Link  from 'next/router'
export default function Home() {
  
  return (
    
    <div className={styles.hello}>
      <p>Hello World</p>
      

            <Link href={{
              pathname: '/[productListPage]',
              query:{ productListPage: 'Houses'}
            }}
            >
                <a>Houses</a>
            </Link>

    </div>
  )
}