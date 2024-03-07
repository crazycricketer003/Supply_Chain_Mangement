import React from 'react'

import "./Item.css"

const Item = (props) => {

    const {itemName, itemCode, quantity, reorder, cost} = props;

    return (
        <div className='item'>
            <label className='lab'>Item Name</label><br/>
            <label className='prop'>{itemName}</label><br/>

            <hr className='line'/>

            <label className='lab'>Item Code</label><br/>
            <label className='prop'>{itemCode}</label><br/>

            <hr className='line'/>

            <label className='lab'>Quantity on Hand</label><br/>
            <label className='prop'>{quantity}</label><br/>

            <hr className='line'/>
            
            <label className='lab'>Reorder Point</label><br/>
            <label className='prop'>{reorder}</label><br/>

            <hr className='line'/>

            <label className='lab'>Cost of Item</label><br/>
            <label className='prop'>{cost}</label><br/>
        </div>
    )
}

export default Item