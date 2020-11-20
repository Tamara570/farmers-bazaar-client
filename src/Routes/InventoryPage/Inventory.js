import React, { useEffect, useState } from 'react'
import ProductItem from '../../components/ProductItem/ProductItem'
import './inventory.css'
import Search from '../../components/SearchBar/search'
import { API_ENDPOINT } from '../../config';



export default function Inventory() {
  const [items, setItems] = useState([]);
  const getItems = () => {
    fetch(`${API_ENDPOINT}/items`)
      .then(res => res.json())
      .then(items => setItems(items));
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <Search />
      <div className='inventory-page-container'>
          {items.map(item => (
              <ProductItem key={item.id} item={item} />
            ))
          }
      </div>
    </>
  );
}


// export default function Dealerlist() {
//     return (
//         <DealerContext.Consumer>
//             {value => {
//                 return (
//                     <section className="dealer-list-container">
//                         <div className="dealer-list-headings">
//                             <div className="dealer-list-sort"><p> Master Dealer List</p></div>
//                         </div>
//                         {value.dealers.map(dealer =>
//                             <Link key={dealer.id}
//                                 to={"/dealers/" + dealer.id}>

//                                 <div className="dealer-list-item-container">
//                                     <div className="dealer-list-name"><h3>{dealer.name}</h3></div>
//                                     <div className="dealer-list-description "><p>{dealer.description}</p></div>
//                                     <div className="dealer-list-streetaddress-1"><h4>{dealer.streetaddress}</h4></div>
//                                     <div className="dealer-list-streetaddress-2"><h4>{dealer.city}, {dealer.state} {dealer.zip}</h4></div>
//                                     <div clasName="dealer-list-phone"><h5> CALL {dealer.phone}</h5></div>
//                                 </div>
//                             </Link>
//                         )}
//                     </section>
//                 )
//             }}
//         </DealerContext.Consumer>
//     )
// }
