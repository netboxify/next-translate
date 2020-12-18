import Link from "next/link"

import useTranslation from "next-translate/useTranslation"

const Home = () => {
  const { t, lang } = useTranslation('home')

  const title = t('title')
  const description = t('description')
  const language = t('current-language', { language: lang })

  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <p>{language}</p>
      <div className="row">
        <Link href="/" locale="en">
          <a className="card">Switch to /en locale</a>
        </Link>
        <Link href="/" locale="me">
          <a className="card">Switch to /me locale</a>
        </Link>
      </div>
      <br/>
      <div className="row">
        <Link href="/about" locale={lang}>
          <a className="card">Go to About page with current active locale</a>
        </Link>

        <Link href="/about" locale="me">
          <a className="card">Go to About page with /me locale</a>
        </Link>

        <Link href="/about" locale="en">
          <a className="card">Go to About page with /en locale</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
