import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
    return(
        <div className="header">
            <div className="title">
        <p>Decentralized Lottery</p>
            </div>
            <div className="connect-button">
                <ConnectButton />
            </div>
        </div>
    )
}