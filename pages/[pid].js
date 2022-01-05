import React, { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

const ProductDetailPage = ({loadedProduct}) => {
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <h1>{loadedProduct.destination}</h1>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find(product => product.id === productId);

  return {
      props: {
          loadedProduct: product
      }
  }
}

export default ProductDetailPage;
