import BagSummary from "../components/BagSummary";
import BagItems from "../components/BagItems";
import { useSelector } from "react-redux";
export default function Bag() {
  const bagItems = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  const finalItems = items.filter(item =>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >=0;
  })

  return (
    <>
      
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map(item =>   <BagItems item={item}/> )}
          
          </div>
          <div className="bag-summary">
            <BagSummary></BagSummary>
          </div>
        </div>
      </main>
    </>
  );
}
