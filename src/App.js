import Banner from "./components/Banner";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div  className="">
         <div className=" from-blue-500 to-green-500  bg-gradient-to-r">
         <Navbar></Navbar>
         </div>
            
            <div className="h-56  from-blue-500 to-green-500  bg-gradient-to-r">
              <Banner/>
            </div>
    </div>
  );
}

export default App;
