import React from "react";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherSectionProps }) => (
          <collectionPreview key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
