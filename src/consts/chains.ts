import {
  eclipsemainnet,
  eclipsemainnetAddresses,
  solanamainnet,
  solanamainnetAddresses,
  sonicsvm,
  sonicsvmAddresses,
  soon,
  soonAddresses,
} from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { Address, ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  solanamainnet: {
    ...solanamainnet,
    // SVM chains require mailbox addresses for the token adapters
    mailbox: solanamainnetAddresses.mailbox,
  },
  eclipsemainnet: {
    ...eclipsemainnet,
    mailbox: eclipsemainnetAddresses.mailbox,
  },
  soon: {
    ...soon,
    mailbox: soonAddresses.mailbox,
  },
  sonicsvm: {
    ...sonicsvm,
    mailbox: sonicsvmAddresses.mailbox,
  },
  davinci: {
    protocol: ProtocolType.Ethereum,
    chainId: 293,
    domainId: 293,
    name: 'davinci',
    displayName: 'DaVinci Chain',
    nativeToken: { name: 'DaVinci', symbol: 'DCOIN', decimals: 18 },
    rpcUrls: [{ http: 'https://rpc.davinci.bz' }],
    blockExplorers: [
      {
        name: 'DaVinciScan',
        url: 'https://mainnet-explorer.davinci.bz',
        apiUrl: 'https://mainnet-explorer.davinci.bz/api',
        family: ExplorerFamily.Etherscan,
      },
    ],
    mailbox: '0x6bCc0C592fb6AfBf8381994f23421C4EE00e99E9',
    logoURI: '/root/hyperlane-warp-ui-template/src/images/logos/davinci.png',
  },
  optimismsepolia: {
    protocol: ProtocolType.Ethereum,
    chainId: 11155420,
    domainId: 11155420,
    name: 'optimismsepolia',
    displayName: 'OP Sepolia',
    nativeToken: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://sepolia.optimism.io' }],
    blockExplorers: [
      {
        name: 'OP Sepolia Explorer',
        url: 'https://sepolia-optimistic.etherscan.io',
        apiUrl: 'https://api-sepolia-optimistic.etherscan.io/api',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 0,
      estimateBlockTime: 2,
    },
    mailbox: '0x6bCc0C592fb6AfBf8381994f23421C4EE00e99E9',
    logoURI: '/root/hyperlane-warp-ui-template/src/images/logos/op.png',
  },
};

// rent account payment for (mostly for) SVM chains added on top of IGP,
// not exact but should be pretty close to actual payment
export const chainsRentEstimate: ChainMap<bigint> = {
  eclipsemainnet: BigInt(Math.round(0.00004019 * 10 ** 9)),
  solanamainnet: BigInt(Math.round(0.00411336 * 10 ** 9)),
  sonicsvm: BigInt(Math.round(0.00411336 * 10 ** 9)),
  soon: BigInt(Math.round(0.00000355 * 10 ** 9)),
};
