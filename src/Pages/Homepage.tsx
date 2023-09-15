import Card from '../Components/Commons/Card'
import Hero from '../Components/Hero'

const Homepage = () => {
  return (
    <div style={{ color: "white", minHeight: "100vh"}}>
      <Hero />
      <h2 style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>MOVIES</h2>
      <Card />
    </div>
  )
}

export default Homepage