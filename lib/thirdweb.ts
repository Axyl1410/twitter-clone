import { createThirdwebClient } from "thirdweb";
import { assertValue } from "./utils";

const clientId = assertValue(
  process.env.NEXT_PUBLIC_CLIENT_ID,
  "No client ID provided",
);
const secretKey = process.env.THIRDWEB_SECRET_KEY;

export const client = createThirdwebClient(
  secretKey ? { secretKey } : { clientId },
);

export const FORMASCAN_URL = "https://explorer.sketchpad-1.forma.art";
