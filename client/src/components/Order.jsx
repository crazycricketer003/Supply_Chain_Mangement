import React from 'react'

const Order = (props) => {

    const { orderId, loadNumber, shipper, receiver, date, item, carrier, estimated } = props;

    return (
        <tr className="border-b transition-colors border-gray-200 dark:border-gray-700 hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{ orderId }</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{ loadNumber }</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{ shipper }</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{ receiver }</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{ date }</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{ item }</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{ carrier }</td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{ estimated }</td>
        </tr>
    )
}

export default Order