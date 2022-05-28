import { useWeb3 } from "@3rdweb/hooks";
import Dashboard from "./Dashboard";

export default function Home() {
  const { address, connectWallet } = useWeb3();
  return (
    <div className="Wrapperi">
      {address ? (
        <Dashboard address={address} />
      ) : (
        <div className="walletConnect">
          <div className="Button2" onClick={() => connectWallet("injected")}>
            Connect Wallet
          </div>
          <div className="Details">
            You need Chrome to be
            <br /> able to run this app
          </div>
        </div>
      )}
    </div>
  );
}
