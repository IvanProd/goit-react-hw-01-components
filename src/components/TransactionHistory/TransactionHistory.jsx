// import { type } from "@testing-library/user-event/dist/type";
 import { Item } from "./Item";

export const TransactionHistory = ({items}) => {

    // console.log(items)
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (<tr key={item.id}>
                    <Item item={item}/>
                </tr>))}
            </tbody>
        </table>
    );
}

