// contracts/ERC20.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.5.12;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract ConditionalToken is ERC20, ERC20Detailed, ERC20Burnable, Ownable {
    constructor(string memory name_, string memory symbol_, uint8 decimals_) ERC20Detailed(name_, symbol_, decimals_) public { }

    function mint(address account, uint256 amount)
        public
        onlyOwner
    {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount)
        public
        onlyOwner
    {
        _burn(account, amount);
    }
}
