import Link from "next/link"

import useTranslation from "next-translate/useTranslation"

const Home = () => {
  const { t } = useTranslation('about')
  const title = t('title')
  const description = t('description')

  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <div className="row">
        <Link href="/about" locale="en">
          <a className="card">Switch to /en locale</a>
        </Link>
        <Link href="/about" locale="me">
          <a className="card">Switch to /me locale</a>
        </Link>
        <Link href="/" locale="me">
          <a className="card">Go to Home page</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
