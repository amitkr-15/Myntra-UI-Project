import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import {useSelector} from"react-redux" ;
import LoadingSpinners from "../components/LoadingSpinners";


function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
    <Header></Header>
    <FetchItems/>
    {fetchStatus.currentlyFetching ? <LoadingSpinners/> : <Outlet/> }
   <Footer></Footer>
    </>
  );
};

export default App ;
