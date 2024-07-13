// Imports
// ========================================================
import Account from "./components/Account";
import Deploy from "./components/Deploy/Deploy";
import SignMessage from "./components/SignMessage";

// Main Page
// ========================================================
export default function Home() {
  // Render
  return (
    <main className="p-8">
      <h1>🐻⛓️ Berachain WalletConnect Web3Modal Example</h1>
      <p>An example of Berachain being used with WalletConnect.</p>
      <div className="mb-8">
        <w3m-button />
      </div>
      <Account />
      <SignMessage />
      <Deploy/>
    </main>
  );
}