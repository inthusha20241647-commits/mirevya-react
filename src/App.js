import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App(){
    return(
    <div>
    <NavBar></NavBar>
    <SearchBar></SearchBar>
    <Product></Product>
    <AboutUs></AboutUs>
    <Footer></Footer>
  </div>
    )
}
export default App;