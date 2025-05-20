import { Contract } from "ethers";
import { useMemo } from "react";
import { useWallet } from "@/context/WalletContext";
import abi from "@/abi/EventTicketing.json";

const CONTRACT_ADDRESS = "0x98A341fd473426CAbf1816a88F5C30Ee58331b84";

export function useEventContract() {
  const { signer } = useWallet();

  return useMemo(() => {
    if (!signer) return null;
    return new Contract(CONTRACT_ADDRESS, abi, signer);
  }, [signer]);
}
