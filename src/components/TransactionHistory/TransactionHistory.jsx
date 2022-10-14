import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, TableData } from './TransactionHistory.styled'


export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <thead>
                <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Currency</TableHead>
                </TableRow>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }, index) => {
                    return (
                        <TableRow
                            key={id}
                            style={{
                                backgroundColor: `${index % 2 !== 0 ? 'white' : 'lightblue'}`,
                            }}
                        >
                            <TableData>{type}</TableData>
                            <TableData>{amount}</TableData>
                            <TableData>{currency}</TableData>
                        </TableRow>
                    );
                })}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};