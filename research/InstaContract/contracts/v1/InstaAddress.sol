pragma solidity 0.5.0;


contract AddressRegistry {
    event AddressSet(string name, address addr);
    mapping(bytes32 => address) registry;

    constructor() public {
        registry[keccak256(abi.encodePacked("admin"))] = msg.sender;
    }

    function getAddr(string memory name) public view returns (address) {
        return registry[keccak256(abi.encodePacked(name))];
    }

    function setAddr(string memory name, address addr) public {
        require(msg.sender == getAddr("admin") || msg.sender == getAddr("owner"), "Permission Denied");
        registry[keccak256(abi.encodePacked(name))] = addr;
        emit AddressSet(name, addr);
    }

}
