import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {TransactionsPage} from "@/lib/types/transaction";

export const useTransactions = ({page, pageSize}: { page: number, pageSize: number }) => {
    return useQuery({
        queryKey: ['transactions', {page, pageSize}],
        queryFn: async ({signal}): Promise<TransactionsPage> => {
            const res = await fetch(
                `/api/transactions?page=${page}&pageSize=${pageSize}`,
                {signal}
            );
            if (!res.ok) throw new Error('Failed to load transactions');
            return res.json();
        },
        placeholderData: keepPreviousData,
    });
}