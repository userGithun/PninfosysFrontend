import './globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import LayoutWrapper from './LayoutWrapper'
import Providers from './providers'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { icons } from 'lucide-react'



export const metadata = {
  title: 'PN-INFOSYS Software Company',
  description: 'Website by PNINFOSYS',
  icons:{
    icon:'/favico.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="flex flex-col min-h-screen">
        <Providers>
          <LayoutWrapper>{children}
            <ToastContainer position="top-right" autoClose={3000} />
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}