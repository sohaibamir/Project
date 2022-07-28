import React, { useContext} from "react";
import { useRouter } from "next/router";
import Modal from 'react-modal';
import TransferModal from "./modalComponents/TransferModal";
import AlertContext from "../src/Context/alert/AlertContext";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

Modal.setAppElement("#__next");

const Header = ({thirdWebTokens, sanityTokens, address, connectWallet }) => {
  const context=useContext(AlertContext);
  const {successToast}=context
  const router = useRouter();

  const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("walletAddress")
    successToast("Logout succcessfull!");
    router.push("/");
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#ffffff',
      padding: 0,
      border: 'none',
    },
    overlay: {
      backgroundColor: '#32353d54',
    },
  }

  return (
    <div className="Wrapper">
      <div className="title">Assets</div>
      <div className="buttonContainer">
        <div className="walletLink">
          <div className="walletLinkTitle">Wallet Connected</div>
          <div className="walletAddress">
            {address.slice(0, 7)} ... {address.slice(35)}
          </div>
        </div>
        <div
          className="Button"
          style={{ backgroundColor: "#8d1212", color: "white" }}
        >
          Buy / Sell
        </div>
        <Link href={"/Dashboard/?transfer=1"}>
          <div className="Button">Send / Receive</div>
        </Link>
      </div>
      {/* <button onClick={handleLogout} className="btn text-light btn1 bd-color bg-color">Logout</button> */}
      <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <BsThreeDotsVertical/>
          </a>
          <ul class="dropdown-menu mt-3">
            <li><a onClick={handleLogout} class="dropdown-item"  role="button">Logout</a></li>
          </ul>
        </li>
      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/Dashboard")}
        style={customStyles}
      >
        <TransferModal thirdWebTokens={thirdWebTokens}
          sanityTokens={sanityTokens}
          address={address}/>
      </Modal>
    </div>
  );
};

export default Header;
