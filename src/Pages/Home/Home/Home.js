import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import Achievement from '../Achievement/Achievement';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <Products></Products>
            <Achievement></Achievement>
            <ShowReview></ShowReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;