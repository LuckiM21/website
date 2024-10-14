import Footer from "../directories/Footer"
import Cards from "../directories/HomeDirectory/Cards"
import Hero from "../directories/HomeDirectory/Hero"
import InProgress from "../directories/HomeDirectory/InProgress"

const HomePage = () => {
  return (
    <>
      <main className="svelte-1p8u9ev">
        <div className="content">
          <Hero />
          <Cards />
          <InProgress />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default HomePage
