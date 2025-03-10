// this file was generated by scripts/update-liquity-abis.ts
// please do not edit it manually
export const PriceFeed = [{
  "type": "function",
  "name": "fetchPrice",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "bool",
    "internalType": "bool",
  }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "fetchRedemptionPrice",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "bool",
    "internalType": "bool",
  }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "getPrice",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "lastGoodPrice",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "setAddresses",
  "inputs": [{ "name": "_borrowerOperationsAddress", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setPrice",
  "inputs": [{ "name": "price", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "nonpayable",
}, {
  "type": "event",
  "name": "LastGoodPriceUpdated",
  "inputs": [{ "name": "_lastGoodPrice", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}] as const;
