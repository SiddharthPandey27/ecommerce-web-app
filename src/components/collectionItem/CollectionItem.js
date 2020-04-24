import React from 'react';

import CustomButton from '../../elements/customButton/customButton';

import './styles.scss';

const CollectionItem = ({ item }) => {
    return (
        <div className="collection-item">
            <div className="item-image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
            <div className="collection-item-footer">
                <div className="name">{ item.name }</div>
                <div className="price">₹ { item.price * 10 }</div>
            </div>
            <CustomButton isCartButton={true}> Add To Cart </CustomButton>
        </div>
    );
}

export default CollectionItem;