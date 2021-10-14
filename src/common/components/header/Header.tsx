import './Header.scss'

const mainClassCss = 'logo'

const Header = () => (
  <header className={mainClassCss}>
    <a className={`${mainClassCss}__title`} href="/">
      <strong>
        Github
      </strong>
      jobs
    </a>
  </header>
)

export default Header
