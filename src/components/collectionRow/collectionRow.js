import React from 'react';

import CollectionItem from '../collectionItem/collectionItem';

import './styles.scss';

const CollectionRow = ({ items }) => {
    return (
        <div className="collection-row">
            {
                items && items.map(item => {
                    return (
                        <CollectionItem 
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }
        </div>
    );
}

export default CollectionRow;