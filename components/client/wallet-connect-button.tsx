"use client";

import { POLYGON_ZKEVM_CARDONA_TESTNET } from "@/constants";
import { client } from "@/lib/thirdweb";
import React, { useCallback, useEffect, useMemo } from "react";
import {
  useActiveAccount,
  useActiveWallet,
  useActiveWalletChain,
  useConnectModal,
  useWalletDetailsModal,
} from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { AccountButton } from "./account-button";
import { ConnectButton } from "./connect-button";
import { SwitchNetworkButton } from "./switch-network-button";

const WalletConnectButtonComponent = () => {
  const { connect } = useConnectModal();
  const account = useActiveAccount();
  const detailsModal = useWalletDetailsModal();
  const wallet = useActiveWallet();
  const activeChain = useActiveWalletChain();

  useEffect(() => {
    if (!wallet) return;
    const unsubscribeAccount = wallet.subscribe(
      "accountChanged",
      (newAccount) => {
        console.log("Account changed via subscribe:", newAccount);
      },
    );
    const unsubscribeChain = wallet.subscribe("chainChanged", (newChain) => {
      console.log("Chain changed via subscribe:", newChain);
    });
    return () => {
      unsubscribeAccount();
      unsubscribeChain();
    };
  }, []);

  const wallets = useMemo(
    () => [
      inAppWallet({
        auth: { options: ["google", "email", "facebook", "apple", "github"] },
      }),
      createWallet("io.metamask"),
      createWallet("com.coinbase.wallet"),
      createWallet("me.rainbow"),
      createWallet("io.rabby"),
      createWallet("io.zerion.wallet"),
    ],
    [],
  );

  const handleConnect = useCallback(async () => {
    await connect({
      client: client,
      chain: POLYGON_ZKEVM_CARDONA_TESTNET,
      showThirdwebBranding: false,
      theme: "light",
      size: "compact",
      wallets: wallets,
    });
  }, [,]);

  const handleDetail = useCallback(async () => {
    detailsModal.open({
      client: client,
      chains: [POLYGON_ZKEVM_CARDONA_TESTNET],
      theme: "light",
      hideSwitchWallet: true,
    });
  }, []);

  const handleSwitch = useCallback(async () => {
    console.log("switch");
    if (wallet?.switchChain) {
      try {
        await wallet.switchChain(POLYGON_ZKEVM_CARDONA_TESTNET);
      } catch (error) {
        console.error("Failed to switch chain:", error);
      }
    } else {
      console.warn(
        "Wallet does not support switching chain or wallet is not connected.",
      );
    }
  }, []);

  return (
    <>
      {!account?.address ? (
        <ConnectButton onClick={handleConnect} />
      ) : activeChain?.id !== POLYGON_ZKEVM_CARDONA_TESTNET.id ? (
        <SwitchNetworkButton onClick={handleSwitch} />
      ) : (
        <AccountButton address={account.address} onClick={handleDetail} />
      )}
    </>
  );
};

WalletConnectButtonComponent.displayName = "WalletConnectButton";

export const WalletConnectButton = React.memo(WalletConnectButtonComponent);
