import { Key } from "react";
import { Fragment } from "react/jsx-runtime";

export interface ProductInfor {
  [x: string]: Key | null | undefined;
  title: string;
  image: string;
  description: string;
}

// export interface TimeProps{

// }
const ProductList = (props: ProductInfor) => {
  return (
    <Fragment>
      <div className="wrap-container">
        <div className="img-section">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="heading-section">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductList;
