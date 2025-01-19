import React, { Fragment, useState, useEffect } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

import MetaData from './layout/MetaData';
import Product from './product/Product';
import Loader from './layout/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
// import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';

// 1) Import react-paginate
import ReactPaginate from 'react-paginate';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 5000]);
    const [category, setCategory] = useState('')
    const [rating, setRating ] = useState(0);

    const categories = [
        'Electronics',
        'Cameras',
        'Laptop',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
    ];
    
    const dispatch = useDispatch();
    // const alert = useAlert();
    
    // 2) Destructure product-related variables from Redux
    const { loading, products, error, productCount, resPerPage } = useSelector(
        (state) => state.products
    );

    // 3) Grab the keyword from the URL
    const { keyword } = useParams();

    useEffect(() => {
        if (error) {
           // alert.error(error);
        }
        dispatch(
            getProducts(keyword, currentPage, price, category, rating)
        );
    }, [dispatch, error, keyword, currentPage, price, category, rating]);

    // 4) Handle page change from ReactPaginate
    function handlePageClick(data) {
        // ReactPaginate passes an object with { selected: number }
        // We add 1 because 'selected' starts from 0
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
    }

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title={'Buy Best Products Online'} />

                    <h1 id="products_heading">Latest Products</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">
                            {keyword ? (
                                <Fragment>
                                    <div className="col-6 col-md-3 mt-5 mb-5">
                                        <div className="px-5">
                                            <Slider
                                                range
                                                marks={{
                                                    1: `$1`,
                                                    5000: `$5000`,
                                                }}
                                                min={1}
                                                max={5000}
                                                defaultValue={[1, 5000]}
                                                tipFormatter={(value) => `$${value}`}
                                                tipProps={{
                                                    placement: 'top',
                                                    visible: true,
                                                }}
                                                value={price || ''}
                                                onChange={(price) => setPrice(price)}
                                            />

                                            <hr className="my-5" />

                                            <div className="mt-5">
                                                <h4 className="mb-3">Categories</h4>
                                                <ul className="pl-0">
                                                    {categories.map((category, index) => (
                                                        <li
                                                            style={{
                                                                cursor: 'pointer',
                                                                listStyleType: 'none',
                                                            }}
                                                            key={category}
                                                            onClick={() => setCategory(category)}
                                                        >
                                                            {category}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <hr className="my-3" />

                                            <div className="mt-5">
                                                <h4 className="mb-3">Ratings</h4>
                                                <ul className="pl-0">
                                                    {[5, 4, 3, 2, 1].map((star) => (
                                                        <li
                                                            style={{
                                                                cursor: 'pointer',
                                                                listStyleType: 'none',
                                                            }}
                                                            key={star}
                                                            onClick={() => setRating(star)}
                                                        >
                                                            <div className="rating-outer">
                                                                <div
                                                                    className="rating-inner"
                                                                    style={{
                                                                        width: `${star * 20}%`,
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-9">
                                        <div className="row">
                                            {products &&
                                                products.map((product) => (
                                                    <Product
                                                        key={product._id}
                                                        product={product}
                                                        col={4}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                </Fragment>
                            ) : (
                                products &&
                                products.map((product) => (
                                    <Product key={product._id} product={product} col={3} />
                                ))
                            )}
                        </div>
                    </section>

                    {/* 5) Replace the react-js-pagination block with ReactPaginate */}
                    {resPerPage <= productCount && (
                        <div className="d-flex justify-content-center mt-5">
                            <ReactPaginate
                                // The total number of pages
                                pageCount={Math.ceil(productCount / resPerPage)}
                                onPageChange={handlePageClick}
                                
                                // Labels
                                previousLabel={'Prev'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                
                                // Optional settings
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                
                                // Classes for styling
                                containerClassName={'pagination'}
                                pageClassName={'page-item'}
                                pageLinkClassName={'page-link'}
                                previousClassName={'page-item'}
                                previousLinkClassName={'page-link'}
                                nextClassName={'page-item'}
                                nextLinkClassName={'page-link'}
                                breakClassName={'page-item'}
                                breakLinkClassName={'page-link'}
                                activeClassName={'active'}
                            />
                        </div>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;