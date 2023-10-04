
import { arrowRight } from "../assets/icons"
import { statistics } from "../assets/constant"
import { shoes } from "../assets/constant"

const Hero = () => {
  const toggleShoes = (selectedShoe) => {
    console.log(selectedShoe)
  }
  return (
  <section id="home" className="w-full flex flex-col xl:flex-row min-h-screen max-container gap-10 sm:px-16 px-8">
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28 ">
      <p className="text-coral-red text-xl font-montserrat">Our Summer collections</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
        <br />
        <span className="text-coral-red inline-block mt-3">Nike</span>
        Shoes
      </h1>
      <p className="font-montserrat text-lg text-slate-gray mb-14 mt-6 leading-8 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
      <button className="flex justify-center items-center px-7 py-4 border bg-coral-red border-coral-red rounded-full text-lg gap-2 leading-none text-white ">
        Shop now
        <img src={arrowRight} alt="arrow right" className="ml-2 bg-white rounded-full w-5 h-5"/>
        </button>
    </div>
    <div className="flex justify-start items-start flex-wrap mt-20 gap-16 w-full">
      {statistics.map(items =>{
        return(
          <div key={items.label}>
            <p className="text-4xl font-palanquin font-bold">{items.value}</p>
            <p className="leading-7 font-montserrat text-slate-gray">{items.label}</p>
          </div>
        )
      })}
    </div>
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
      <img src="" alt="" width="610" height="502" className="object-contain relative z-10" />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
      {shoes.map(items =>{
        return (
          <div key={items.thumbnail} id={items.bigShoe} onClick={toggleShoes(id)}>
          <div className="border-2 rounded-xl border-coral-red cursor-pointer max-sm:flex-1">
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
              <img src={items.bigShoe} alt={items.bigShoe} className="object-contain"/>
            </div>
          </div>
          </div>

        )
      })}
      </div>
    </div>
  </section>
  )
}

export default Hero