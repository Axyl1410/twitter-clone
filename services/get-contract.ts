import { FORMA_SKETCHPAD } from "@/constants";
import { client } from "@/lib/thirdweb";
import { getContract } from "thirdweb";

const getThirdwebContract = (address: string) => {
  return (
    getContract({
      client: client,
      address: address,
      chain: FORMA_SKETCHPAD,
    }) ?? null
  );
};

export default getThirdwebContract;
