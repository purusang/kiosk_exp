import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { createKioskAndShare } from '@mysten/kiosk';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { getOwnedKiosks } from '@mysten/kiosk';

const client = new SuiClient( {url: getFullnodeUrl('devnet') });
  
  const address = `0xe08bdfae741fabdf8119cbed948efbcc36d49dce13bde1cab8ef8b86243099f7`;
  
  // You could use these to fetch the contents for each kiosk, or use the `kioskOwnerCap` data for other actions.
  const getUserKiosks = async () => {
      const  data  = await getOwnedKiosks(client, address);
      console.log(`Owned Kiosks by ${address}:`); // kioskOwnerCaps:[], kioskIds: []
      console.log(data)
  };
const createKiosk = async () => {
	const accountAddress = '0xe08bdfae741fabdf8119cbed948efbcc36d49dce13bde1cab8ef8b86243099f7';

	const tx = new TransactionBlock();
	const kiosk_cap = createKioskAndShare(tx);

	tx.transferObjects([kiosk_cap], tx.pure(accountAddress, 'address'));

    console.log("Kiosk created");
	// ... continue to sign and execute the transaction
	// ...
};
async function main() {
    createKiosk();
    getUserKiosks();
}

main();
