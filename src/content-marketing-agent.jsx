import './index.css'
import ServicePage from './pages/ServicePage'
import { mountPage } from './lib/mountPage.jsx'
import { servicePageLookup } from './content/servicePages'

const ContentMarketingAgentPage = () => (
  <ServicePage service={servicePageLookup['content-marketing-agent']} />
)

mountPage(ContentMarketingAgentPage)
