"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var signer_1 = require("@taquito/signer");
var taquito_1 = require("@taquito/taquito");
var utils_1 = require("@taquito/utils");
var anti_json_1 = __importDefault(require("./anti.json"));
var dotenv = __importStar(require("dotenv"));
dotenv.config(({ path: __dirname + '/.env' }));
var rpc = "https://hangzhounet.api.tez.ie"; // "https://rpc.hangzhounet.teztnets.xyz" // HANGZOUNET
//const rpc = "https://rpc.tzstats.com" // https://mainnet.api.tez.ie // MAINNET
var pk = "edskS8x3MqxnSVLix29fvBh7QBoTt6WLERyatEfTpRzE1XF26Aqy2ii7cBLMwpcE6u6fnj72gNRitAbXQjCS9eGncR7P4C3hy8";
var Tezos = new taquito_1.TezosToolkit(rpc);
var signer = new signer_1.InMemorySigner(pk);
Tezos.setProvider({ signer: signer });
var ledger = new taquito_1.MichelsonMap();
ledger.set("tz1hA7UiKADZQbH8doJDiFY2bacWk8yAaU9i", 777777777777);
var allowances = new taquito_1.MichelsonMap();
var admin = "tz1hA7UiKADZQbH8doJDiFY2bacWk8yAaU9i";
var reserve_address = 'tz1RyejUffjfnHzWoRp1vYyZwGnfPuHsD5F5';
var burn_address = 'tz1burnburnburnburnburnburnburjAYjjX';
var initial_supply = 777777777777;
var total_supply = 777777777777;
var burned_supply = 0;
var metadata = taquito_1.MichelsonMap.fromLiteral({
    "name": utils_1.char2Bytes("Anti token"),
    "decimals": utils_1.char2Bytes("3"),
    "symbol": utils_1.char2Bytes("ANTI-TEST001-HANGZHOU"),
    "description": utils_1.char2Bytes("A Deflationnary token for https://smartlink.so/ the Decentralized escrow platform for Web 3.0"),
    "interfaces": utils_1.char2Bytes("TZIP-007 TZIP-016"),
    "authors": utils_1.char2Bytes("SmartLink Dev Team"),
    "homepage": utils_1.char2Bytes("https://smartlink.so/"),
    "icon": utils_1.char2Bytes("ipfs://QmRPwZSAUkU6nZNor1qoHu4aajPHYpMXrkyZNi8EaNWAmm"),
    "supply": utils_1.char2Bytes("777777777.777"),
    "mintable": utils_1.char2Bytes("False")
});
var token_metadata_entry_anti = {
    token_id: '1',
    token_info: metadata
};
var token_metadata = new taquito_1.MichelsonMap();
token_metadata.set('0', token_metadata_entry_anti);
taquito_1.MichelsonMap.fromLiteral({
    token_id: '0',
    token_info: token_metadata_entry_anti
});
function orig() {
    return __awaiter(this, void 0, void 0, function () {
        var store, originated, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    store = {
                        'admin': admin,
                        'reserve': reserve_address,
                        'ledger': ledger,
                        'allowances': allowances,
                        'initial_supply': initial_supply,
                        'total_supply': total_supply,
                        'burned_supply': burned_supply,
                        'burn_address': burn_address,
                        'metadata': metadata,
                        'token_metadata': token_metadata
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, Tezos.contract.originate({
                            code: anti_json_1["default"],
                            storage: store
                        })];
                case 2:
                    originated = _a.sent();
                    console.log("Waiting for fa12 " + originated.contractAddress + " to be confirmed...");
                    return [4 /*yield*/, originated.confirmation(2)];
                case 3:
                    _a.sent();
                    console.log('confirmed fa12: ', originated.contractAddress);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
orig();
