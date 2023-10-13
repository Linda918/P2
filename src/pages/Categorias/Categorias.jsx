import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardUser from "../../components/CardUser/CardUser";
import { useParams } from 'react-router-dom';
import "./Categorias.css"

const Categorias = () => {
  const [items, setItems] = useState([]);
  let { categoryId } = useParams();


  useEffect(() => {
    axios.get('/products.json').then((res) => {
      setItems(res.data);
    });
  }, [] );

  let filteredItems = items.filter((item) => {
    return item.category === categoryId
  })

  return(
    <div className='Cards-List'>
        {filteredItems.map((item)=>{
          return (
            <div style={{margin: 10 }} key= {item.id}>
                <CardUser item={item} /> 
            </div>
          )
        } )}
    </div>
  )
}

export default Categorias