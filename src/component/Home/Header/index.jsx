import { t } from 'i18next'
import { HeaderWrapper, MenuItem } from './styles'

function HeaderMenu() {
  // const [initialLink, changeInitialLink] = useState(pathname)

  // const redirectionHandler = link => {
  //   changeInitialLink(link)
  // }

  // const downloadCV = () => {}

  return (
    <HeaderWrapper>
      <div>
        <p id="Header-logo">JPC</p>
      </div>
      <nav aria-label="Page sections links" role="menu">
        <MenuItem
          href="#about"
          title="About"
          aria-label="Go to About section"
          tabIndex={0}
          aria-controls="menu-list-1"
        >
          {t('About')}
        </MenuItem>
        <MenuItem
          href="#experiences"
          title="Experiences"
          aria-label="Go to Experiences section"
          aria-controls="menu-list-2"
          tabIndex={0}
        >
          {t('Experiences')}
        </MenuItem>
        {/* <Button
          startIcon={<ArrowCircleDownIcon />}
          color="primary"
          onClick={downloadCV}
        >
          {t('Download cv')}
        </Button> */}
      </nav>
    </HeaderWrapper>
  )
}

export default HeaderMenu
