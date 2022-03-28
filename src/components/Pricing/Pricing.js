import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name:'free', price:0, benefits: [
            'lifetime free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id:2, name:'regular', price:14.22, benefits: [
            'everything on free',
            'everything deals cost',
            'everything deals money',
            'everything should deals',
            'everything deals finally'
        ]},
        {id:3, name:'premium', price:21.66, benefits: [
            'pay money free online',
            'pay money deals bkash',
            'pay money deals rocket',
            'pay money deals nogod',
            'pay money deals cash'
        ]},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best deals of the town</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est at ab debitis, aut voluptates fuga. Nisi amet, deserunt quibusdam adipisci architecto delectus? Consequuntur recusandae id hic explicabo atque quaerat porro?</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;