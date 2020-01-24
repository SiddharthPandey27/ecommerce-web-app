import React from 'react';

import CollectionPreview from '../../components/collectionPreview/collectionPreview';
import { ShopData } from '../../data/collections';

import './styles.scss';

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shopData: ShopData
        };
    }

    render () {
        const { shopData } = this.state;
        return (
            <CollectionPreview 
                title={`Shop Here`}
                shopData={shopData}
            />
        );
    }
}

export default Shop;