import image from '../neworleanas.jpg'
const Home = () => {
  return (
   <main>
     <img 
      src = {image} 
      alt="Bourbon Street" 
      className="absolute object-cover w-full h-full"/>
     <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className ="bg-blue-800 bg-opacity-75 rounded-lg shadow-2xl lg:flex p-20">
          <img src=''/>
          <div className="text-lg flex flex-col justify-center">
            <h1 className=" roboto text-6xl text-white-300 mb-4">
              <span className="text-white"> Hello, I'm Stephen Timphony and welcome to my page!</span></h1>
            <div className="prose lg:prose-xl text-white">
              
            </div>
          </div>
        </section>
      </div>
   </main>
  )
}
export default Home;