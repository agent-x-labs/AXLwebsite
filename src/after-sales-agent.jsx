import './index.css'
import ServicePage from './pages/ServicePage'
import { mountPage } from './lib/mountPage.jsx'
import { servicePageLookup } from './content/servicePages'

const AfterSalesAgentPage = () => <ServicePage service={servicePageLookup['after-sales-agent']} />

mountPage(AfterSalesAgentPage)
