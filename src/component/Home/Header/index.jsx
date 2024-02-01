import { t } from 'i18next'
import { HeaderWrapper, MenuItem } from './styles'
import { CV_PDF_PATH } from '../../../constants'

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
          role="menuitem"
        >
          {t('About')}
        </MenuItem>
        <MenuItem
          href="#experiences"
          title="Experiences"
          aria-label="Go to Experiences section"
          tabIndex={0}
          role="menuitem"
        >
          {t('Experiences')}
        </MenuItem>
        <MenuItem
          href={CV_PDF_PATH}
          title="Download CV"
          aria-label="Download CV"
          tabIndex={0}
          target="_blanck"
          role="menuitem"
        >
          {t('Download CV')}
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
