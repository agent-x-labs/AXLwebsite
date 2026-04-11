import './index.css'
import ServicePage from './pages/ServicePage'
import { mountPage } from './lib/mountPage.jsx'
import { servicePageLookup } from './content/servicePages'

const LeadReactivationAgentPage = () => (
  <ServicePage service={servicePageLookup['lead-reactivation-agent']} />
)

mountPage(LeadReactivationAgentPage)
