import { Maingrid } from './components/main'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="bg-Smartaviblack-100 flex absolute h-screen w-screen items-center justify-center">
      <div className="absolute">
        <Maingrid />
        <Footer />
      </div>
    </div>
  )
}
