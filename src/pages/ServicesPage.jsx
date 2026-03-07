import Services from '../components/Services'
import Credentials from '../components/Credentials'
import Booking from '../components/Booking'

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20">
        <Services />
        <Credentials />
        <Booking />
      </div>
    </>
  )
}
