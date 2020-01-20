import React from 'react';

import CollectionItem from '../collectionItem/CollectionItem';

import './styles.scss';

const CollectionList = (props) => {
    const { collectionTypes } = props;
    return (
        <div className="collections">
            {
                collectionTypes && collectionTypes.map((collection) => {
                    return (
                        <CollectionItem 
                            key={collection.id}
                            collection={collection}
                            subTitle={`Shop Now`}
                        />
                    )
                })
            }
        </div>
    );
}

export default CollectionList;