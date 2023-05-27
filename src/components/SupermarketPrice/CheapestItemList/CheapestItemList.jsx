import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAll} from '../../../store/actions/supermarketPriceActions';
import {getAllProducts} from '../../../store/actions/productsActions';
import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';

function CheapestItemList() {
    const supermarketPriceState = useSelector((state) => state.supermarketPrice);
    const productState = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
        dispatch(getAllProducts());
    }, []);

    const getWeeklyPrice = (supermarketPrice) => {
        const yesterdayPrice = supermarketPrice.yesterDayPrice;
        const todayPrice = supermarketPrice.todayPtoDayPricerice;
        console.log(yesterdayPrice);
        console.log(todayPrice)
        const weeklyPrice = (yesterdayPrice + todayPrice) / 2; // Calculate the average
        return weeklyPrice.toFixed(2); // Assuming you want to round the price to 2 decimal places
    };

    const generatePDF = () => {
        const specialElementHandlers = {
            '.no-export': function (element, renderer) {
                return true;
            },
        };
        const doc = new jsPDF('p', 'pt', 'a4');

        doc.text(305, 20, 'Supermarkets prices list in Sri Lanka', 'center');

        const head = [
            [
                'ID',
                'Item Name',
                'Yesterday Price',
                'Today Price',
            ],
        ];
        const elements = supermarketPriceState.supermarketPrices.map((supermarketPrice) => [
            supermarketPrice.superMarketPriceID,
            supermarketPrice.itemName,
            supermarketPrice.yesterDayPrice,
            supermarketPrice.toDayPrice,
        ]);

        autoTable(doc, {
            head: head,
            body: elements,
        });
        doc.save('supermarket-price-details.pdf');
    };

    const getCheapestList = () => {
        return productState.productList.map((product) => {
            return (
                <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    {/*{supermarketPriceState.supermarketPrices.map((supermarketPrice) => {*/}
                    {/*    if (supermarketPrice.itemId === product._id) {*/}
                    {/*        const weeklyPrice = getWeeklyPrice(supermarketPrice);*/}
                    {/*       return (<td key={supermarketPrice._id}>*/}
                    {/*                {*/}
                    {/*                    supermarketPrice.yesterDayPrice ?*/}
                    {/*                        <span className="text-success">{weeklyPrice}</span>*/}
                    {/*                        : <span className="text-danger">{weeklyPrice}</span>*/}
                    {/*                }*/}
                    {/*            </td>)*/}
                    {/*    }*/}
                    {/*})}*/}
                </tr>
            );
        });
    };

    return (
        <div className="item">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <p
                        className="pt-4 mb-0 fw-bold"
                        data-bs-toggle="collapse"
                        style={{cursor: 'pointer'}}
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        Cheapest Items in Supermarkets
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="d-flex justify-content-end align-items-center">
                            <button id="btn-generate-report" className="btn me-3" onClick={() => {
                                generatePDF();
                            }}>
                                Generate Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse mt-3" id="collapseExample">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-striped custom-table">
                            <thead>
                            <tr>
                                <th scope="col">Item ID</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Item Price</th>
                                <th scope="col">Last Week Price</th>
                                <th scope="col">Yesterday Price</th>
                                <th scope="col">Today Price</th>
                            </tr>
                            </thead>
                            <tbody>{getCheapestList()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheapestItemList
