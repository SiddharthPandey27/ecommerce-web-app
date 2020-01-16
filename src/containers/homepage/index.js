import React from 'react';

import './styles.scss';

class HomePage extends React.Component {
    render () {
        return (
            <div className="homepage">
                <div className="menu">
                    <div className="item-box">
                        <div className="item-content">
                            <h1 className="title">Hats</h1>
                            <div className="sub-title">Shop Now</div>
                        </div>
                    </div>
                    <div className="item-box">
                        <div className="item-content">
                            <h1 className="title">Jackets</h1>
                            <div className="sub-title">Shop Now</div>
                        </div>
                    </div>
                    <div className="item-box">
                        <div className="item-content">
                            <h1 className="title">Sneakers</h1>
                            <div className="sub-title">Shop Now</div>
                        </div>
                    </div>
                    <div className="item-box">
                        <div className="item-content">
                            <h1 className="title">Women</h1>
                            <div className="sub-title">Shop Now</div>
                        </div>
                    </div>
                    <div className="item-box">
                        <div className="item-content">
                            <h1 className="title">Men</h1>
                            <div className="sub-title">Shop Now</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;