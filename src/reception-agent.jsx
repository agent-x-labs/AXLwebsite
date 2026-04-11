import './index.css'
import ServicePage from './pages/ServicePage'
import { mountPage } from './lib/mountPage.jsx'
import { servicePageLookup } from './content/servicePages'

const ReceptionAgentPage = () => <ServicePage service={servicePageLookup['reception-agent']} />

mountPage(ReceptionAgentPage)
