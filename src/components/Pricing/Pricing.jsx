import React from 'react';
import Breadcrumb from './../../common/Breadcrumb/Breadcrumb';
import PriceCard from '../../components/Home/Price/PriceCard';


const Pricing = () => {
    return (
        <>
            <section className="pricing">
                <Breadcrumb
                    name="30 days money back guarantee"
                    title="No Extra Fees. Friendly Support"
                    cover="assets/images/pricing.jpg"
                />
                <div className="price pt-80 pb-80">
                    <div className="container">
                        <PriceCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing;