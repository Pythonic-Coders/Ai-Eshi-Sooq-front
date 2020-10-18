import styles from '../styles/Styles.module.css'
import Link from 'next/link'

export default function Main() {
    return (
        <main>
            <h1 className={styles.mainAboutTitle}>Pythonic Coders</h1>
            <section className={styles.mainContent}>
                <div className={styles.mainMembers}>
                    <div className={styles.mainAboutDiv}>
                        <img src="https://avatars2.githubusercontent.com/u/63533063?s=460&u=1d6a81e3101c92e88ea79015c7c0da3ac5cc8009&v=4" className={styles.mainMemberPhoto}/>
                        <h2 className={styles.mainAboutTitle1}>Abdul-Aziz Al-Hoot</h2>
                        <p className={styles.mainAboutInfo}>A full stack developer</p>
                        <Link href="https://github.com/azez-alhoot">
                            <a><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-512.png" className={styles.mainContactIcon}/></a>
                        </Link>
                        <Link href="https://github.com/azez-alhoot">
                            <a><img src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-linkedin-512.png" className={styles.mainContactIcon1}/></a>
                        </Link>
                    </div>
                    <div className={styles.mainAboutDiv}>
                        <img src="https://avatars3.githubusercontent.com/u/63533086?s=460&v=4" className={styles.mainMemberPhoto}/>
                        <h2 className={styles.mainAboutTitle1}>Basma Nizar Eid</h2>
                        <p className={styles.mainAboutInfo}>A full stack developer</p>
                        <Link href="https://github.com/Basma23">
                            <a><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-512.png" className={styles.mainContactIcon}/></a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/basma-mohammed-472aa3133/">
                            <a><img src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-linkedin-512.png" className={styles.mainContactIcon1}/></a>
                        </Link>
                    </div>
                    <div className={styles.mainAboutDiv}>
                        <img src="https://avatars2.githubusercontent.com/u/39272891?s=460&u=15c614d935dd67310b7bb2df65d992b97e5d9cd3&v=4" className={styles.mainMemberPhoto}/>
                        <h2 className={styles.mainAboutTitle1}>Sa'ed Al-khateeb</h2>
                        <p className={styles.mainAboutInfo}>A full stack developer</p>
                        <Link href="https://github.com/obiorbitalstar">
                            <a><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-512.png" className={styles.mainContactIcon}/></a>
                        </Link>
                        <Link href="https://github.com/obiorbitalstar">
                            <a><img src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-linkedin-512.png" className={styles.mainContactIcon1}/></a>
                        </Link>
                    </div>
                    <div className={styles.mainAboutDiv}>
                        <img src="https://avatars2.githubusercontent.com/u/64354786?s=460&u=2404b2d527a89168d0929c22763079a47018a139&v=4" className={styles.mainMemberPhoto}/>
                        <h2 className={styles.mainAboutTitle1}>Yazan Al-Shekha</h2>
                        <p className={styles.mainAboutInfo}>A full stack developer</p>
                        <Link href="https://github.com/yazan-alshekha">
                            <a><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-512.png" className={styles.mainContactIcon}/></a>
                        </Link>
                        <Link href="https://github.com/yazan-alshekha">
                            <a><img src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-linkedin-512.png" className={styles.mainContactIcon1}/></a>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}