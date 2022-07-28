// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
contract Memories {
    mapping(address=>string []) directory;
    //storing over polygon blockchain

    function addMessage (string memory _message) external{
        directory[msg.sender].push(_message);
    }
    //function to get all prev messages

    function getmessages() view public returns( string[] memory ){
        return directory[msg.sender];
    }
}
