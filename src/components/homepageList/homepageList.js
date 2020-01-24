import React from 'react';

import HomepageItem from '../homepageItem/homepageItem';

import './styles.scss';

const HomepageList = (props) => {
    const { collectionTypes } = props;
    return (
        <div className="collections">
            {
                collectionTypes && collectionTypes.map((collection) => {
                    return (
                        <HomepageItem 
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

export default HomepageList;