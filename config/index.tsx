// Imports
// ========================================================
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { berachainTestnetbArtio } from "wagmi/chains";

// Constants
// ========================================================
// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const metadata = {
  name: "Berachain Web3Modal",
  description: "Berchain Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/96059542"],
};

if (!projectId) throw new Error("Project ID is not defined");

// Config
// ========================================================
export const config = defaultWagmiConfig({
  chains: [berachainTestnetbArtio], // required
  projectId, // required
  metadata, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
  //   ...wagmiOptions // Optional - Override createConfig parameters
});