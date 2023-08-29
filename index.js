"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@mysten/sui.js/client");
const kiosk_1 = require("@mysten/kiosk");
const transactions_1 = require("@mysten/sui.js/transactions");
const kiosk_2 = require("@mysten/kiosk");
const client = new client_1.SuiClient({ url: (0, client_1.getFullnodeUrl)('devnet') });
const address = `0xe08bdfae741fabdf8119cbed948efbcc36d49dce13bde1cab8ef8b86243099f7`;
// You could use these to fetch the contents for each kiosk, or use the `kioskOwnerCap` data for other actions.
const getUserKiosks = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, kiosk_2.getOwnedKiosks)(client, address);
    console.log(`Owned Kiosks by ${address}:`); // kioskOwnerCaps:[], kioskIds: []
    console.log(data);
});
const createKiosk = () => __awaiter(void 0, void 0, void 0, function* () {
    const accountAddress = '0xe08bdfae741fabdf8119cbed948efbcc36d49dce13bde1cab8ef8b86243099f7';
    const tx = new transactions_1.TransactionBlock();
    const kiosk_cap = (0, kiosk_1.createKioskAndShare)(tx);
    tx.transferObjects([kiosk_cap], tx.pure(accountAddress, 'address'));
    console.log("Kiosk created");
    // ... continue to sign and execute the transaction
    // ...
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        createKiosk();
        getUserKiosks();
    });
}
main();
