// src/components/BillsSection.tsx
import { useEffect, useState } from 'react';
import { getBills } from '../services/api';

interface Bill {
    amount: string;
    dueDate: string;
    status: string;
}

const BillsSection = () => {
    const [bills, setBills] = useState<Bill[]>([]);

    useEffect(() => {
        getBills().then((response) => setBills(response.data));
    }, []);

    return (
        <div className="mb-4">
            <h2 className="text-2xl font-bold mb-4">Recent Bills</h2>
            <div className="grid grid-cols-1 gap-4">
                {bills.map((bill, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-white">
                        <p>Amount: {bill.amount}</p>
                        <p>Due Date: {bill.dueDate}</p>
                        <p>Status: {bill.status}</p>
                        {bill.status === 'Pending' && <button className="bg-green-600 text-white p-2 rounded mt-2">Pay Now</button>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BillsSection;
