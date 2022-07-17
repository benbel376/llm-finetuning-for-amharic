import '../css/employee.css';
import '../css/util.css';
import {useState} from 'react';
import { ethers } from "ethers";
import '../images/cyber_punk.webp'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';

function init_contract(){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const contractAddress = "0xf27dce4127319e27e7996dbd1c46a1ddc5799c99"
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "id",
                    "type": "address"
                },
                {
                    "internalType": "int256",
                    "name": "lat",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "lon",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "rad",
                    "type": "int256"
                },
                {
                    "internalType": "uint8",
                    "name": "fund",
                    "type": "uint8"
                }
            ],
            "name": "add_employee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "lat",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "lon",
                    "type": "int256"
                }
            ],
            "name": "check_position",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "kill",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "pay",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "contractInfo",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "center_lat",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "center_lon",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "radius",
                    "type": "int256"
                },
                {
                    "internalType": "uint8",
                    "name": "budget",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "employees",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const MyContract = new ethers.Contract(contractAddress, abi, signer);
    return MyContract
}

// Asking if metamask is already present or not

//const ContractInstance = MyContract.at("0xf27dce4127319e27e7996dbd1c46a1ddc5799c99")

function EmployeeForm() {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };
    
    const [lat, setLat] = useState(32571);
    const [lon, setLon] = useState(13280);
    const [radi, setRadius] = useState(537);
    const [addr, setAddr] = useState('0x793750185u1873515613');
    const [budget, setBudget] = useState(1000);
    function handle_collect() {

        if (window.ethereum) {
            // res[0] for fetching a first wallet
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => { 
                    const contracts = init_contract();
                    const options = {gasLimit: 30000000}
                    contracts.add_employee(addr, lon, lat, radi, budget, options).then(receipt => {console.log(receipt)})
                    console.log("end of line")
                
                });
        } else {
            alert("install metamask extension!!");
        }
    }
  return (
    <div class="t_limiter">
    <div class="t_container-login100">
        <div class="t_wrap-login100">
            <form class="t_login100-form t_validate-form p-l-55 p-r-55 p-t-178" onSubmit={onSubmit}>
                <span class="t_login100-form-title">
                    Add Employees to Track
                </span>

                <div class="t_title">
                    Provide Employee Address
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input id = "address" class="address t_input100" type="text" placeholder="Address" onChange={(e)=>{setAddr(e.target.value)}}/>
                    <span class="t_focus-input100"></span>
                </div>
                
                <div class="t_title">
                    Provide Geographic Boundary
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input id = "long" class="center_lon t_input100" type="text" placeholder="Center Lon." onChange={(e)=>{setLon(e.target.value)}}/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input id = "lati" class="center_lat t_input100" type="text" placeholder="Center Lat." onChange={(e)=>{setLat(e.target.value)}}/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input id = "radius" class="t_input100" type="text" placeholder="Radius" onChange={(e)=>{setRadius(e.target.value)}}/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_title">
                    Specify Allocated Budget
                </div>
                <div class="t_wrap-input100 t_validate-input">
                    <input id = "budget" class="t_input100" type="text" placeholder='Budget' onChange={(e)=>{setBudget(e.target.value)}}/>
                    <span class="t_focus-input100"></span>
                </div>
                <div class="t_container-login100-form-btn">
                    <button class="collect t_login100-form-btn" onClick={handle_collect}>
                        Add Employee
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
  );
}
export default EmployeeForm;