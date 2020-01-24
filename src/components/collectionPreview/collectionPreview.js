import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import CollectionRow from '../collectionRow/collectionRow';

import './styles.scss';

const CollectionPreview = ({ title, shopData, match }) => {
    return (
        <div className="shop-preview">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <div className="all-collections">
                {
                    shopData && shopData.map(collection => {
                        const { items } = collection;
                        return (
                            <div className="collection" key={collection.id}>
                                <h2>
                                    <Link className="collection-title" to={`${match.url}/${collection.routeName}`}>{ collection.title }</Link>
                                </h2>
                                <CollectionRow 
                                    key={collection.id}
                                    items={items}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default withRouter(CollectionPreview);