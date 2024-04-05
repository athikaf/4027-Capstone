export const centralBankWalletBalance = 10000; // Mock central bank wallet balance
export const centralBankTransactions = [
  {
    id: 1,
    description: "Received from Subsidiary Bank A",
    amount: 5000,
    date: "2024-03-28",
  },
  {
    id: 2,
    description: "Sent to Subsidiary Bank B",
    amount: -2000,
    date: "2024-03-29",
  },
  {
    id: 3,
    description: "Received from Subsidiary Bank C",
    amount: 7000,
    date: "2024-03-30",
  },
];

export const subsidiaryBankWalletBalance = 5000; // Mock subsidiary bank wallet balance
export const subsidiaryBankTransactions = [
  {
    id: 1,
    description: "Received from Central Bank",
    amount: 2000,
    date: "2024-03-28",
  },
  {
    id: 2,
    description: "Sent to Central Bank",
    amount: -1000,
    date: "2024-03-29",
  },
  {
    id: 3,
    description: "Received from Customer A",
    amount: 3000,
    date: "2024-03-30",
  },
];
