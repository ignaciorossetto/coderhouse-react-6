import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { customFetchAll } from "../../Utilities/customFetch";

function ItemListContainer() {
  const products = require("../../Utilities/products.json");

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    customFetchAll(products, 2000).then((res) => {
      setProductList(res);
    });
  }, []);

  return (
    <div>
      <ItemList productList={productList} />
    </div>
  );
}

export default ItemListContainer;
