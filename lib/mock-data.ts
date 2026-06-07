import {faker} from '@faker-js/faker';
import {Chain, Currency, Transaction, TransactionStatus} from "@/lib/types/transaction";

export const currencies: Currency[] = ['BTC', 'ETH', 'USDT', 'USDC'];
export const transactionStatus: TransactionStatus[] = ['cleared', 'flagged', 'pending'];
export const chainName: Chain[] = ['ethereum', 'bitcoin', 'polygon'];

faker.seed(123456789)

const mockTransactions = (amount: number): Transaction[] => {
    const mockkArray: Transaction[] = []
    for (let i = 0; i < amount; i++) {
        mockkArray.push({
            id: faker.string.uuid(),
            timestamp: faker.date.recent({days: 30}).toISOString(),
            fromAddress: faker.string.hexadecimal({length: 40, prefix: '0x'}),
            toAddress: faker.string.hexadecimal({length: 40, prefix: '0x'}),
            amount: faker.number.float({min: 0.001, max: 100, fractionDigits: 6}),
            currency: faker.helpers.arrayElement(currencies),
            riskScore: faker.number.int({min: 1, max: 100}),
            status: faker.helpers.arrayElement(transactionStatus),
            chain: faker.helpers.arrayElement(chainName),
        })
    }
    return mockkArray
}

export default mockTransactions(1000);