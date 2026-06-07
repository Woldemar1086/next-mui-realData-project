import {createColumnHelper,} from '@tanstack/react-table'
import {Transaction, TransactionStatus} from "@/lib/types/transaction";
import {Chip, ChipProps} from "@mui/material";

const statusConfig: Record<TransactionStatus, { color: ChipProps['color']; text: string }> = {
    cleared: {color: 'success', text: 'Cleared'},
    pending: {color: 'secondary', text: 'Pending'},
    flagged: {color: 'error', text: 'Flagged'},
};

const columnHelper = createColumnHelper<Transaction>();

export const columns = [
    columnHelper.accessor('timestamp', {
        header: 'Time',
        cell: (info) => new Date(info.getValue()).toLocaleString(),
    }),
    columnHelper.accessor('fromAddress', {
        header: 'From',
        cell: (info) => {
            const value = info.getValue();
            return `${value.slice(0, 6)}...${value.slice(-6, value.length)}`
        },
    }),
    columnHelper.accessor('toAddress', {
        header: 'To',
        cell: (info) => {
            const value = info.getValue();
            return `${value.slice(0, 6)}...${value.slice(-6, value.length)}`
        },
    }),
    columnHelper.accessor('amount', {
        header: 'Amount',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('riskScore', {
        header: 'Risk',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => {
            const config = statusConfig[info.getValue()];
            return <Chip label={config.text} color={config.color}/>
        },
    }),
    columnHelper.accessor('chain', {
        header: 'Chain',
        cell: (info) => info.getValue(),
    }),
]