import { Fragment } from "react/jsx-runtime";
import "./Store.Module.css";

export interface ProductInfor {
  title: string;
  image: string;
  description: string;
}

// export interface TimeProps{

// }
const ProductList = (props: ProductInfor) => {
  const timeList = [
    {
      day: "Mon.",
      open: "09:00 AM",
      close: "07:00 PM",
    },
    {
      day: "Tue.",
      open: "09:00 AM",
      close: "07:00 PM",
    },
    {
      day: "Wed.",
      open: "09:00 AM",
      close: "07:00 PM",
    },
    {
      day: "Thu.",
      open: "09:00 AM",
      close: "07:00 PM",
    },
    {
      day: "Fri.",
      open: "09:00 AM",
      close: "07:00 PM",
    },
    {
      day: "Sat.",
      open: "09:00 AM",
      close: "04:00 PM",
    },
    {
      day: "Sun.",
      open: "09:00 AM",
      close: "04:00 PM",
    },
  ];
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
        <div className="time-list">
          {timeList.map((time) => {
            return (
              <div key={time.day}>
                <p>
                  {time.day} {time.open} - {time.close}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default ProductList;
