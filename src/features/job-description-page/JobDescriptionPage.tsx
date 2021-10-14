import DescriptionPageAside from '../description-page-aside/DescriptionPageAside'
import DescriptionPageContent from '../description-page-content/DescriptionPageContent'

import './JobDescriptionPage.scss'

const mainCssClass = 'description-page'

const JobDescriptionPage = () => (
  <main className={mainCssClass}>
    <DescriptionPageAside />
    <DescriptionPageContent />
  </main>
)

export default JobDescriptionPage
