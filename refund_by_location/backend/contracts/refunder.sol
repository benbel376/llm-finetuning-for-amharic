//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract refunderContract{
    // Variables

    address public owner;
    bool private status;
    address[] public employees;

    constructor() {
        owner = msg.sender;
    }

    struct contract_spec{
        //address emp_add;
        int256 center_lat;
        int256 center_lon;
        uint32 radius;
        uint8 budget;
        bool status;
     
    }
  
    mapping(address => contract_spec) public contractInfo;

//Functions

    function kill() public {
      if(msg.sender == owner) selfdestruct(payable(owner));
    }

    function check_existance(address employee) private view returns(bool){
        for(uint256 i = 0; i < employees.length; i++){
            if(employees[i] == employee) return true;
        }
        return false;
    }

    function add_employee(address id, int256 lat, int256 lon, uint32 rad, uint8 fund, bool stat) public {
        require(!check_existance(id));
        contractInfo[id].center_lat = lat;
        contractInfo[id].center_lon = lon;
        contractInfo[id].budget = fund;
        contractInfo[id].radius = rad;
        contractInfo[id].status = stat;
        employees.push(id);

    }
    function calculate_radius(int256 lat, int256 lon) private {

    }
    function check_position(int256 lat, int256 lon) public {
        require(check_existance(msg.sender));
        uint32 new_radius = calculate_radius(lat, lon);
        if(new_radius < contractInfo[msg.sender].radius){
            contractInfo[msg.address].status = true;
        }
    }

    function pay(address payable add) private {
        require(check_existance(msg.sender));
        require(contractInfo[msg.address].status == true);
        add.transfer(contractInfo[add].budget);
        contractInfo[add].status=false;
    }
}