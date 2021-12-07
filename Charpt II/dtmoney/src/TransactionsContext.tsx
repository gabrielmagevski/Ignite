import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';


interface TransactionsTypes {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps { 
    children: ReactNode
}

export const TransactionContext = createContext<TransactionsTypes[]>([]);

export function TransactionsProvider({ children }:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsTypes[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    )
}