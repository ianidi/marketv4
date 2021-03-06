/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { BTokenBase } from "../BTokenBase";

export class BTokenBase__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BTokenBase> {
    return super.deploy(overrides || {}) as Promise<BTokenBase>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BTokenBase {
    return super.attach(address) as BTokenBase;
  }
  connect(signer: Signer): BTokenBase__factory {
    return super.connect(signer) as BTokenBase__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BTokenBase {
    return new Contract(address, _abi, signerOrProvider) as BTokenBase;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "BONE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "BPOW_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "EXIT_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "INIT_POOL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_BOUND_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_BPOW_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_IN_RATIO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_OUT_RATIO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_TOTAL_WEIGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_WEIGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_BALANCE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_BOUND_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_BPOW_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MIN_WEIGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getColor",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610467806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063b0e0d136116100a2578063bc694ea211610071578063bc694ea214610278578063c36596a614610296578063c6580d12146102b4578063e4a28a52146102d2578063ec093021146102f05761010b565b8063b0e0d13614610200578063b7b800a41461021e578063ba019dab1461023c578063bc063e1a1461025a5761010b565b8063867378c5116100de578063867378c5146101885780639381cd2b146101a6578063992e2a92146101c45780639a86139b146101e25761010b565b806309a3bbe414610110578063189d00ca1461012e578063218b53821461014c57806376c7a3c71461016a575b600080fd5b61011861030e565b6040518082815260200191505060405180910390f35b61013661031d565b6040518082815260200191505060405180910390f35b610154610337565b6040518082815260200191505060405180910390f35b610172610343565b6040518082815260200191505060405180910390f35b61019061035b565b6040518082815260200191505060405180910390f35b6101ae610375565b6040518082815260200191505060405180910390f35b6101cc610384565b6040518082815260200191505060405180910390f35b6101ea61039d565b6040518082815260200191505060405180910390f35b6102086103c5565b6040518082815260200191505060405180910390f35b6102266103ca565b6040518082815260200191505060405180910390f35b6102446103cf565b6040518082815260200191505060405180910390f35b6102626103d4565b6040518082815260200191505060405180910390f35b6102806103ea565b6040518082815260200191505060405180910390f35b61029e6103fc565b6040518082815260200191505060405180910390f35b6102bc610408565b6040518082815260200191505060405180910390f35b6102da61040d565b6040518082815260200191505060405180910390f35b6102f861041c565b6040518082815260200191505060405180910390f35b6032670de0b6b3a76400000281565b6402540be400670de0b6b3a76400008161033357fe5b0481565b670de0b6b3a764000081565b620f4240670de0b6b3a76400008161035757fe5b0481565b64e8d4a51000670de0b6b3a76400008161037157fe5b0481565b6064670de0b6b3a76400000281565b60016003670de0b6b3a76400008161039857fe5b040181565b60007f42524f4e5a450000000000000000000000000000000000000000000000000000905090565b600881565b600281565b600181565b600a670de0b6b3a7640000816103e657fe5b0481565b6001670de0b6b3a76400006002020381565b670de0b6b3a764000081565b600081565b6032670de0b6b3a76400000281565b6002670de0b6b3a76400008161042e57fe5b048156fea265627a7a72315820b0d29fae2c2c7a50859bc7dec3bbc6b4c676b1377ed4b9389f91ed05afc2530764736f6c634300050c0032";
