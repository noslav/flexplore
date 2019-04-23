# Flexplore Work Notes 


## 11-04-2019

The Big picture - 
Centralized Credit Scoring - Social credit score, solutions created by central third parties have come to be viewed as insecure at best and dystopian at worst. 

![Market Map](https://cdn-images-1.medium.com/max/1920/1*7Qq2oqvr_ZfyHt59J9jbIQ.png)

### 1. Bloom, uport deepdive - notes in the doc
- [Bloom](https://bloom.co/docs/contracts/accounts)
	1. Bloom is an end-to-end protocol for decentralized identity and credit scoring
	2. L2 scaling solutions such as state channels to ensure fast and cheap 
	3. staking based credit scoring and expects to integrate input from existing credit bureaus into their scoring framework in future releases.
	4. Include BloomScore in your lending decisions:

	Check the BloomScore and metrics of your borrower: BloomScore includes 
		1. A reliability score (a metric gauging a user’s individual credit repayment history success) 
		2. A Peer score (a metric to determine the average reliability score of the peers of the user) 
		3. Number of loans taken out in the past on the Bloom network 
		4. Past identity attestations performed. These are useful pieces of information to know prior to extending a loan. Checking a BloomScore requires BLT.
		5. BLT can be used to verify a borrowers identity to reduce the risk of fraud and Sybil attacks.
		6. Allow borrowers with a BloomID to quickly apply for loans: If a user already has a BloomID, you may choose to let that user “quick apply” for a loan. In this method, you would only need BLT to verify their identifying traits during the final loan application.
		7. 

- [uport]
	1. 



### 2. Articles on credit scoring on the blockchain & Blogs of companies that have - notes in the doc for the same
- [Decentralised Credit scoring](https://medium.com/@jillcarlson/decentralized-credit-scoring-fe2c6c0611c6)
	1. Blockchain-based borrowing holds the possibility of improving on the legacy model of lending
	2. The borrower’s credit is based on his historical behavior and current financial status.
	3. Today, credit scoring is generally a centralized process that relies on attestations from a single authority or an oligopoly.
	4. Rather than rely on attestations by a single authority or an oligopoly, lenders can use a web of trust model.
	5.  more decentralized approach and provide lenders only with their on-chain funds and transaction history as a proxy for credit score. 
	6. ![Decentralized Credit scoring](https://cdn-images-1.medium.com/max/1440/1*02uTs7LjMrMco7KFowu9kA.png)
	7. In order to enable a fuller spectrum of decentralized lending, some of these options for credit scoring need to be explored.
	8. Attestations could go beyond historical transactions and extend to KYC/AML, accredited investor status, or even governments attesting citizenship, residency, and visas.


- [Zero Knowledge Proofs for credit scoring](https://www.tokendaily.co/p/dharma-protocol-dharma-plex-launch?t=1527181076517#comment-4469)
	1.Decentralized loan pricing is a super tough problem — the sci-fi, long-term solution is that when we have reliable decentralized identities and a debtor’s entire loan history is on-chain (*hopefully* with something like Dharma) and privately tied to their identity, so a debtor would be able to compute a zero-knowledge proof of some sort of creditworthiness metric (i.e. naively, sum of value repaid in loans / sum of value borrowed) and present that to potential creditors as their credit score while maintaining their credit history’s privacy. Note that this is somewhat possible for DAOs today (imagine a DAO issuing bonds, for instance)— less-so for individuals given that decentralized identity hasn’t quite caught yet. 
	2. In the short-term — the best mitigation to relying on a singular party is likely having some sort of federated model + staking to make underwriters have more “skin in the game” — i.e. 5 institutions stake their confidence on a creditworthiness prediction for a debtor, and get slashed commensurately if reality doesn’t fall in line with their predictions.


- [EIP 712 - Descriptive Signed Messages ](https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26)	
	1. 

- [EIP 1077 - Executable Signed Messages](http://eips.ethereum.org/EIPS/eip-1077)
	1. 

- [Enigma Credit Scoring](https://blog.enigma.co/decentralizing-credit-with-enigma-440c6648b4d8)

	1. Define your credit score: 
		- [x] Number and types of accounts (credit card, checking account, saving account etc.)
		- [x] Payment history and timely payment
		- [x] Outstanding balance vs. credit limit (also called credit utilization)
		- [x] Length of banking relationship
		- [x] Types of credit used 
	2. ![credit scoring with enigma](https://cdn-images-1.medium.com/max/1600/0*RC9r5xtGZ1dKLoW5)
	3. [Colendi](https://www.colendi.com/) is blockchain based credit scoring project, which utilizes alternative data inputs such as utility bill payment, retail spending and more
	4. [Cerved](https://www.cerved.com/it), an Italian credit scoring agency, is also interested in applying open data protocols enabled by PSD2 to enable a more transparent credit scoring process.
	5. ![On-Chain/Off-Chain](https://cdn-images-1.medium.com/max/1600/1*r5UKAkNircauBl6oTtHmsg.png)
	6. An Enigma contract can allow the company running the token sale to create a contract where your inputs — the wallet addresses you own — are secret but can be computed on. This contract can determine whether you qualify for the token sale or not
	7. They have already performed an 45 Mil ICO and the tokens will be used for 
		- [x] As a security deposit to ensure that anyone participating in the network (node processing) is being honest. If they try to tamper with the data they would lose their deposit.
		- [x] As payment for any sort of computations or actions done on the network (Gas).
		- [x] As payment for fees to store data on the platform.
	8. You need the token to run a node (part of the network). Every node gets a reward for processing and completing data, but the node must make a security deposit before completing said data. If the data is incorrect (tampered) they will lose their deposit and that deposit will be split between all the nodes that correctly processed the data.
	9. tl;dr you need ENG to participate in the network, participating rewards you with more ENG.

	10. ![Example](https://cdn-images-1.medium.com/max/2400/0*-JfLHCHoeRgZt13e.) -imagine a lending dApp that can autonomously give out loans to users. To function, it operates a smart contract that tests each individual’s eligibility by scanning their wallets and prior transactions, then computing if the individual should receive a loan (and if so — how big it should be). For example, it may examine if you asked for loans in the past, and whether you paid them back on time.
	11. For secret contracts, the missing piece comes from an area in cryptography known as secure computation — an umbrella term for different technologies that enable computing over encrypted data. Primarily, these technologies are able to hide the state itself from the nodes in the network (as well as the public) while preserving the ability to execute and validate computations.
	12. [Defining Secret Contracts](https://blog.enigma.co/defining-secret-contracts-f40ddee67ef2)
	13. [Computing over encrypted Data](https://blog.enigma.co/computing-over-encrypted-data-d36621458447)
	14. [Introduction to the Enigma Protocol](https://enigma.co/protocol/BasicIntroduction.html)
	15. [Decentralizing Credit with Enigma](https://blog.enigma.co/decentralizing-credit-with-enigma-440c6648b4d8)
	16. [Off Chain + On Chain Credit Scoring](https://cdn-images-1.medium.com/max/1600/0*RC9r5xtGZ1dKLoW5)
	17. [Computation over secure data](https://blog.enigma.co/computing-over-encrypted-data-d36621458447)
	18. Enigma uses Multi party computation in which a trusted set of nodes perform computations on encrypted data and if the nodes are compromised a stake in tthe system is slashed and distributed across non-compromised nodes.
	19. Share takes the message and spreads it across a bunch of nodes, reconstruct puts the message back together given the computation on the shared encrypted messages
		`m1 , m2, …, mn = Share(m, n, t)`
		`m = Reconstruct(m1 , m2, …, mk)`
	20. Fully Homomorphic encyrption is possible uptill yet by construction. But with the distributed node model, the same security gaurantess applies without the 


### 3. Do we know why uport failed? - a good answer
- [Consensys fails at delivering](https://www.forbes.com/sites/jeffkauflin/2018/12/05/cryptopia-in-crisis-billionaire-joe-lubins-ethereum-experiment-is-a-mess-how-long-will-he-prop-it-up/#2b96fa392f0a)
	1. UPort, a tool aimed at letting users log in to Ethereum applications, had three project managers, who couldn’t align on a single vision. Today there are just 15 applications using UPort, and the project is splitting in two. 
	2. Suffering from an organizational crisis

## 12-04-2019

The Big Picture - uport, 3box are doing identities in which you own the data you want to share, Enigma on the other hand obfuscates the data you provide and still allows you to prove things worth proving about your identity. 

### 2. Technical Deep dive 3box, uport - notes on how Eth community has used their tech
- [3box](https://3box.io/)
	1. ![3box](https://cdn-images-1.medium.com/max/1280/0*khoc0ndjMxAvm640)
	2. Since 3Box data is stored on IPFS and managed in OrbitDB instances, 3Box provides an off-chain, user-addressed content graph with support for encrypted data that is accessible to Ethereum developers via a simple front-end javascript library.
	3. Call Box.getProfile(<ethereum address>) to lookup a public profile
	4. Call Box.openBox(<ethereum address>, ethereumProvider) to request interactive permissions
	5. Call box.onSyncDone(callbackFunction) to know when the db is fully synced
	6. Call box.public.set(<key>, <value>) or box.private.set(<key>, <value>) to write data
	7. Call box.public.get(<key>) or box.private.get(<key>) to read data
	8. Call box.public.remove(<key>) or box.private.remove(<key>) to delete data
	9. Call box.close() or box.logout() to end the session
		- [x] Get public profiles for one or more Ethereum accounts 
		- [x] Onboard social user profiles with one click. 
		- [x] Create new profiles seamlessly when neededStore data/content with the user, in the user’s control
		- [x] Share data between apps for shared user reputation
		- [x] Store communication keys, such as public encryption keys, for a PKI
		- [x] Store and request private, encrypted information
	10. 3Box needed to focus on delivering in the near-term to medium-term was starting to look less and less like the mobile, privacy-preserving, self-sovereign identity system that uPort is focused on building at the moment.
	11. Use cases of 3box.js 
		- [x] replace hex addresses with social user profiles 
		- [x] private encrypted storage 
		- [x] user onboarding 
		- [x] decentralized messaging or public key infrastructure (PKI)
		- [x] distributed user content storage and management
		- [x] Sharing data between apps 
		- [x] Shared reputation systesm where all the data you generate goes to generating your reputation
		- [x] 

- [uport](https://medium.com/uport/what-is-a-uport-identity-b790b065809c)

	1. Digital representation of a person, app, organization, to make statements of who they are when interacting with smart contracts.
	2. No requirements for centralized identity providers.
	3. Allows for private key recovery
	4. uPort founded the Decentralized Identity Foundation with Microsoft, Blockstack and a core group of blockchain companies in 2017. It now consists of more than 35 organizations.
	5. uPort Connect - 
		- [x] Handle user logins
		- [x] Request Ethereum transaction signing
		- [x] Keep your users logged into an app
		- [x] Use QR code & push notification flow for desktop browsers
		- [x] Use frictionless app linking for mobile browsers 

	6. uPort Credentials -  
		- [x] Create and verify authentication requests
		- [x] Request verified claims
		- [x] Verify claims for your users
		- [x] Ask users to sign Ethereum transactions
		- [x] Create Ethereum smartcontract function call requests without web 3.0

	7. uPort Transports - 
		- [x] Send messages to users using a QR code
		- [x] Send requests and receive responses through URLs
		- [x] send encrypted push notifications
		- [x] Create Transports specific to your use case and environment

### 3. Enigma - try out an implementation to ask get questions to engage

- [Implementation example](https://enigma.co/catalyst/beginner-tutorial.html)

	1. 
	 
### 4. Group Pitches

1. Pitch week - 1

> Feedback 
> Stefan van Rest, BE3   [2 hours ago]
> Great talker> 

> Philip Haibach   [2 hours ago]
> Very compelling Angelo> 

> Philipp Scheik, BE3   [2 hours ago]
> Very passionate - good pitch> 

> Jurek Herwig   [2 hours ago]
> Very nice body language!> 

> Philip Haibach   [2 hours ago]
> I liked the problem description but the solution was quite unclear

> Philip Haibach   [2 hours ago]
> Use the 90 seconds that you have

> Angelo Min, BE3   [2 hours ago]
> Thanks for the feedback guys!> 

> Mitchell Duffy, BE3   [1 hour ago]
> Great pitch, well structured. I’d trust you guys with or without identification

## 15-04-2019

The big picture - need to understand if Enigma and 3box are the right tools for us and if they work today or not.

![Investable Themes](https://cdn-images-1.medium.com/max/1920/1*nAJysBm5NxFDn2D3NWudHQ.png)

![Keys to Mass adoption](https://cdn-images-1.medium.com/max/1920/1*lyIhIkcLXtHqpSRCqBFsdw.png)


### 1. Implementing Enigma - code in research repository with comments
- [enigma documentation](https://enigma.co/protocol/BasicIntroduction.html)
- [example source code]()

	1.  decentralized , distributed network of servers which use secret contracts to maintain integrity and confidentiality of data
	2. takes on task orders from ethereum 
	3. data is encrypted prior to being sent to the network
	4. the order of data passing is the following
		- [x] A dApp end-user initiates a task. Data passed to Enigma-JS.
		- [x] Data is encrypted by the Enigma-JS client library.
		- [x] The now encrypted data is sent off to the Enigma Network.
		- [x] Task is broadcasted to the network.
		- [x] A worker is selected to compute the task.
		- [x] Computation is performed, node is rewarded and answer to task is returned.
	5. enigma testnet provided by docker 
		- [x] principal node, two standard nodes and one for the blockchain logic itself
	6. 

### 2. Implementing 3box - code in research repository with comments

- [Basics of the enigma docker network and dapp deployment](https://enigma.co/protocol/BasicIntroduction.html)
	1. allows developers to include sensitive data in their smart contracts without moving off-chain to centralized (and less secure) systems
	2. Secret contracts are executed in a retrofitted EVM (Ethereum Virtual Machine) running inside a Trusted Execution Environment (TEE), based on Intel’s SGX technology
	3. network topology ![network](https://s3.amazonaws.com/enigmaco-docs/protocol/network-topology.png)
	4. The core of the Enigma network is the ability to perform private computations
	5. These tasks are initiated by the end-users of Ethereum dApps, then offloaded to the Enigma network via the Enigma Contract. The Enigma network selects workers running Enigma nodes to perform the computations, and then returns the result to the ethereum dApp contract.
	6. Encryption of the data happens on the client side, before data is submitted to the ethereum dApp.

	7. The Enigma client library, Enigma-js is a javascript library that interfaces with the Enigma protocol
		- [x]  safely encrypt sensitive data in-memory for immediate use or storage
 		- [x] obtain an authoritative proof that the target worker is securely running trusted hardware prior to sending data and paying fees
 		- [x] Trusted hardware for this release means Intel SGX: for more information on SGX, see sections On SGX and Registration

	8. Enigma Contract 
 		- [x] Enigma contract primarily contains logic to secure the network. To do this, it has a list of registered worker nodes. 
 		- [x] It receives computation task requests from Dapps, and broadcasts them to the Enigma Network. 

	9. The computation tasks are stored in a mapping using the Task struct. Each active task item contains the computation fee (in ENG) paid by the Dapp user. 

	10. Principal node 
 		- [x] 1) Generate random seeds for worker selection; 
 		- [x] 2) Propagate the encryption key to other nodes joining the network. 

	11. Enigma Node ![arch](https://s3.amazonaws.com/enigmaco-docs/protocol/surface-to-core.png)

		- [x] Surface -  Surface is the untrusted component of an Enigma node which has the primary function of coordinating computation tasks between the Enigma Contract and Core


		- [x] Core  - Core is the trusted component of the Enigma network, and executes computation tasks. Core runs inside of an SGX enclave Core is involved in a number of processes, including registration, encryption, computation and validation. 

	12. [Setting up the test net](https://enigma.co/protocol/GettingStarted.html#setting-up-the-testnet)
		- [x] Dapp terminal for setting up the reactDApp as client end encryptions are needed 
		- [x] Network terminal to get the docker containter for secure intel SGX computations 

	13. Deploying the network
 		- [x] `./launch.bash. -t -s` from the network terminal - enigma-docker-network
 		- [x] The `-t` flag spawns three seperate xterm shells for the contract, core and surface components of the network and is recommended for ease of use.
 		- [x] Once completed, three xterm windows will spawn. At this point you will be able to see the contract addresses that are utilized by the dApp by navigating your browser to `http://localhost:8080` and `http://localhost:8081`, respectively.
 		- [x] . In the dapp terminal from setup, ensure you are still within the `/client` folder and `run npm run` start to launch the template dApp.

- [Secret contract - Millionaire's Problem](https://enigma.co/protocol/SecretContracts.html#example-01-the-millionaires-problem)

	1. The millionaires problem is a simple concept with complex solutions: How do two individuals compare their net worth without ever exposing their actual value to the other party?

	> This docker-network is being deprecated, and we will release a new version for Discovery in a matter of days. We are going to archive this repo very soon, so we will not be troubleshooting it anymore. 
	09-04-2016

	2. As mentioned above, the design principles and syntax (state variables, structs, constructors, functions, events, modifiers, etc.) are very similar to Ethereum smart contracts, the two major differences being the callable and callback functions.

	3. `Callable` - This is a public function that runs secret computations inside the SGX enclave. It is a pure function, meaning it does not read from nor write to the contract state, but computes solely off of the arguments that are passed to it. Although these encrypted values are passed via the front-end interface, the decryption automatically occurs within this function. In the case of this computeRichest callable example, the arguments take the form of `_addresses` and `_netWorths` - more specifically, types `address[]` and `uint[]`. These arguments are decrypted automatically, and it is now possible to determine the party with the highest net worth and retrieve the decrypted address at the same index. This decrypted address is to be used as the input for the callback function.

	4. `Callback` - This is a public function automatically called by the worker (the `onlyEnigma()` modifier) after the callable function is completed. It is responsible for committing the results and altering the contract state. In this example, we input the `_address` we have obtained from the callable, store it as the richestMillionaire state variable, and emit the CallbackFinished event. The output of the final event is important, as it is possible to set up an event watcher within the front-end to perform a task upon successful completion.

	5. callable public pure function

	```solidity
	   /*
       CALLABLE FUNCTION run in SGX to decipher encrypted net worths to
       determine richest millionaire
       */
	       function computeRichest(address[] _addresses, uint[] _netWorths)
               public
               pure
               returns (address)
       {
               uint maxIndex;
               uint maxValue;
               for (uint i = 0; i < _netWorths.length; i++) {
                       if (_netWorths[i] >= maxValue) {
                               maxValue = _netWorths[i];
                               maxIndex = i;
                       }
               }
               return _addresses[maxIndex];
       }
	```

	6. callback fn `onlyEnigma()`

	```solidity
	   /*
       CALLBACK FUNCTION to change contract state tracking richest
       millionaire's name
       */
	       function setRichestAddress(address _address) public onlyEnigma() {
               richestMillionaire = _address;
               emit CallbackFinished();
       }
	```

### 3. Questions from both that enable engagement with their teams

- [List of people to contact]()
- [List of open questions]()

### 4. Jump start the idea maze

[idea maze](https://www.dropbox.com/preview/Public/Flexplore/idea_maze.sdr?role=personal)


## 16-04-2019


The Big Picture - Find out if credit scoring is a big enough pain for lending and borrowing platforms today or is it more like a pain 3-4 years from now. 

![Ethereum's Defi](https://www.theblockcrypto.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-14-at-4.57.46-PM-1185x675.png)


### 1. Work on Etherscan APIs

-[Etherscan api docs](https://etherscan.io/apis)

1. gets all txns
```curl
http://api.etherscan.io/api?module=account&action=tokentx&address=0x28d804Bf2212E220BC2B7B6252993Db8286dF07f&startblock=0&endblock=999999999&sort=asc&apikey=A8UJI1IDUH2MWSGHIJBM28JCCX6UAHQ8IR 
```

2. gets ac balance
```curl
https://api.etherscan.io/api?module=account&action=balance&address=0x28d804Bf2212E220BC2B7B6252993Db8286dF07f&tag=latest&apikey=A8UJI1IDUH2MWSGHIJBM28JCCX6UAHQ8IR
```
3. APIs can be used to build an MVP for a very basic transcation history check - along the direction of metamask?


## 17-04-2019

### 1. Get finer details on ERC725, 735, 1077 

- [ERC 725 Proxy Account / Manageable & verifiable account](https://erc725alliance.org/)


	1. [ERC 725](https://github.com/ethereum/EIPs/issues/725) is a proposed standard for blockchain-based identity authored by Fabian Vogelsteller, creator of ERC 20 and Web3.js. ERC 725 describes proxy smart contracts that can be controlled by multiple keys and other smart contracts. 

	2. ERC 725 allows for self-sovereign identity. Users should be able to own and manage their identity instead of ceding ownership of identity to centralized organizations.

	3. The proxy has 2 abilities: 

		- [x] it can execute arbitrary contract calls
		- [x] it can hold arbitrary data through a generic key/value store. One of these keys should hold the owner of the contract.

	4. Standardizing a minimal interface for an proxy account allows third parties to interact with various proxy accounts contracts in a consistent manner.

	5. The benefit is a persistent account that is independed from single keys and can attach an arbitrary amount of information to verifiy, or enhance the accounts purpose.

	6. Fabian.V answers [What are keys? Are they cryptographic identities? Why not addresses? What is a claim for, and how does it work](https://github.com/ethereum/EIPs/issues/725#issuecomment-333798370)

	7. The operationType should represent the assembly operation as follows:

 		* 0 for call
 		* 1 for delegatecall
 		* 2 for create

```solidity
pragma solidity ^0.5.4;

interface ERC725 {
    event DataChanged(bytes32 indexed key, bytes32 indexed value);
    event ContractCreated(address indexed contractAddress);
    //Returns the data at the specified key.
    function getData(bytes32 _key) external view returns (bytes32 _value);
    //Sets the data at a specific key.
    function setData(bytes32 _key, bytes32 _value) external;
    //Executes an action on other contracts or a transfer of the EVM chains native cryptocurrency. MUST only be called by the current owner of the contract.
    function execute(uint256 _operationType, address _to, uint256 _value, bytes calldata _data) external;
}
```


- [ERC 735 Claims Holder](https://github.com/ethereum/EIPs/issues/735)


	1. ERC 735 is an associated standard to add and remove claims to an ERC 725 identity smart contract. These identity smart contracts can describe humans, groups, objects, and machines. 

	2. This standardised claim holder interface will allow Dapps and smart contracts to check the claims about a claim holder. Trust is here transfered to the issuers of claims.

	3. Central Claim Registry - Pros / Cons 

	*Pros*
	- [x] standardised, e.g. functionality known which prevents cheating
	- [x] central reference point
	- [x] claim addition and removal can have complex processes, all standardised

	*Cons*
	- [x] will mainly be useful for pure ethereum accounts or smart contracts. There is no advantage over in-contract claims when adding signatures to them
	- [x] Will be hard to change, or to improve over time, as the code once deployed is fixed, or needs a complicated upgrade mechanism


	4. [How it works](http://chubbydeveloper.com/wp-content/uploads/2019/02/offchain-2.png)


```solidity
pragma solidity ^0.4.18;

contract ERC735 {

    event ClaimRequested(uint256 indexed claimRequestId, uint256 indexed topic, uint256 scheme, address indexed issuer, bytes signature, bytes data, string uri);
    event ClaimAdded(bytes32 indexed claimId, uint256 indexed topic, uint256 scheme, address indexed issuer, bytes signature, bytes data, string uri);
    event ClaimRemoved(bytes32 indexed claimId, uint256 indexed topic, uint256 scheme, address indexed issuer, bytes signature, bytes data, string uri);
    event ClaimChanged(bytes32 indexed claimId, uint256 indexed topic, uint256 scheme, address indexed issuer, bytes signature, bytes data, string uri);

    struct Claim {
        uint256 topic;
        uint256 scheme;
        address issuer; // msg.sender
        bytes signature; // this.address + topic + data
        bytes data;
        string uri;
    }
    //Returns a claim by ID.
    function getClaim(bytes32 _claimId) public constant returns(uint256 topic, uint256 scheme, address issuer, bytes signature, bytes data, string uri);
    //Returns an array of claim IDs by topic.
    function getClaimIdsByTopic(uint256 _ topic) public constant returns(bytes32[] claimIds);
    //Requests the ADDITION or the CHANGE of a claim from an issuer.
Claims can requested to be added by anybody, including the claim holder itself (self issued).
    function addClaim(uint256 _topic, uint256 _scheme, address _issuer, bytes _signature, bytes _data, string _uri) public returns (uint256 claimRequestId);
    // missing function declaration statement??
    changeClaim(bytes32 _claimId, uint256 _topic, uint256 _scheme, address _issuer, bytes _signature, bytes _data, string _uri) returns (bool success);
    //Removes a claim.
Can only be removed by the claim issuer, or the claim holder itself.
    function removeClaim(bytes32 _claimId) public returns (bool success);
}
```


### 2. Get to know of projects that implement them


## 18-04-2019
![bcos](https://www.thebalance.com/thmb/OrGlprWH-2ZppSfiB8eQUnLFvEs=/950x0/filters:format(webp)/who-are-the-three-major-credit-bureaus-960416-Final-5c5363db46e0fb0001c07a68.png)

* theme is ‘Customer Development’ 

:one: Sum up your company in one sentence (e.g. We are… and we’re working on …)

We are Flexplore or DeFix and we're working on making the individual real on a decentralized network where anonymity is the norm.

:two: Who is your customer and what is their problem?

In crypto the tradeoff of anonymity for better services is impossible due to lack of identity. Today, this pain is particularly strong among DeFi. Institutions do not differentiate customers, using the same collateral value for the same loan. Rene and I want to change how DeFi looks at its customers and the services it can provide by converting hexadecimal numbers to actual people.


:three: How have you validated their/your problem this week (i.e. customer development) ?

Our strongest validation comes from DeFi institutions that would rather not provide additional financial services that require even proxies of identity like financial history and pivot to easier products that would subvert this need.

:four:*Hustle factor*: Definition of Hustle Factor: Something extraordinary you’ve achieved this week against the odds e.g _This week we managed to convince a Nobel Prize-winning Physicist to be our advisor!_

We created a first model of our solution and have a first client in the DeFi space with a 100 new signups a day willing to try it to expand his service base. (edited) 


### Group Pitches 

>Jurek Herwig   [2 Hours ago]
>Very nice!

>Nina Patrick, BE3   [2 Hours ago]
>Love the enthusiasm you guys have!

>Zhou Fang, BE3   [2 Hours ago]
>Good volume and pace. Would try to omit things like “we’re very excited about this” or “it’s very interesting” because that should be clear from the content & delivery already.

## 21-04-2019

Big Picture - [ERC725 is now defined as the proxy account, this contract uses ERC734 as its key manager, and ERC1077 can be used alongwith ERC725 to execute many signed messages which originate form](https://www.youtube.com/watch?v=Q2SrL0xqXf0)

- [ERC 734 Key Manager](https://github.com/ERC725Alliance/erc725/blob/master/docs/ERC-734.md)

	1. Key Management for proxy account - The following describes standard functions for a key manager to be used in conjunction with ERC725.

	2. This contract can hold keys to sign actions (transactions, documents, logins, access, etc), 

	3. This specification was chosen to allow most flexibility and experimentation around verifiable accounts

	4. By having a separate contract as proxy on chain allows for cross greater compatibility, as well as extra and altered functionality for new use cases.

```solidity
pragma solidity ^0.4.18;

contract ERC734 {

    uint256 constant MANAGEMENT_KEY = 1;
    uint256 constant EXECUTION_KEY = 2;

    event KeyAdded(bytes32 indexed key, uint256 indexed purpose, uint256 indexed keyType);
    event KeyRemoved(bytes32 indexed key, uint256 indexed purpose, uint256 indexed keyType);
    event ExecutionRequested(uint256 indexed executionId, address indexed to, uint256 indexed value, bytes data);
    event Executed(uint256 indexed executionId, address indexed to, uint256 indexed value, bytes data);
    event Approved(uint256 indexed executionId, bool approved);
    event KeysRequiredChanged(uint256 purpose, uint256 number);

    struct Key {
        uint256 purpose; //e.g., MANAGEMENT_KEY = 1, EXECUTION_KEY = 2, etc.
        uint256 keyType; // e.g. 1 = ECDSA, 2 = RSA, etc.
        bytes32 key;
    }
    // Returns the full key data, if present in the identity.
    function getKey(bytes32 _key) public constant returns(uint256[] purposes, uint256 keyType, bytes32 key);
    // Returns TRUE if a key is present and has the given purpose. If the key is not present it returns FALSE
    function keyHasPurpose(bytes32 _key, uint256 _purpose) public constant returns (bool exists);
    //Returns an array of public key bytes32 held by this identity.
    function getKeysByPurpose(uint256 _purpose) public constant returns (bytes32[] keys);
    //Adds a _key to the identity. The _purpose specifies the purpose of the key. Initially, we propose four purposes:
    function addKey(bytes32 _key, uint256 _purpose, uint256 _keyType) public returns (bool success);
    //Removes _key from the identity.MUST only be done by keys of purpose 1, or the identity itself.
    function removeKey(bytes32 _key, uint256 _purpose) public returns (bool success);
    //Changes the keys required to perform an action for a specific purpose. (This is the n in an n of m multisig approval process.)
    function changeKeysRequired(uint256 purpose, uint256 number) external;
    //Returns number of keys required for purpose.
    function getKeysRequired(uint256 purpose) external view returns(uint256);
    //Passes an execution instruction to an ERC725 identity. SHOULD require approve to be called with one or more keys of purpose 1 or 2 to approve this execution.
    function execute(address _to, uint256 _value, bytes _data) public returns (uint256 executionId);
    //Approves an execution or claim addition. This SHOULD require n of m approvals of keys purpose 1, if the _to of the execution is the identity contract itself, to successfully approve an execution. 
    function approve(uint256 _id, bool _approve) public returns (bool success);
}
```

- [ERC 1077 executable signed messages](https://github.com/ethereum/EIPs/pull/1077)

	1. Allowing users to sign messages to show intent of execution, but allowing a third party relayer to execute them is an emerging pattern being used in many projects

	2. Using signed messages, specially combined with an identity contract that holds funds, and multiple disposable ether-less keys that can sign on its behalf,

```solidity
//Executes the signed message. Execution usually means that a contract will execute a call to the to address, with value amount of ether and data as its data.
function executeSigned( address to, address from, uint256 value, bytes data, uint nonce, uint gasPrice, uint gasLimit, address gasToken, operationType, extraHash, bytes messageSignatures)

//A read only function that checks if the transaction will be executable and how much gas it’s expected to cost.
function gasEstimate( address to, address from, uint256 value, bytes data, uint nonce, uint gasPrice, uint gasLimit, address gasToken, operationType, extraHash bytes messageSignatures) returns ( bool canExecute, uint gasCost)
 
//A read only function that checks if the transaction will be executable and how much gas it’s expected to cost. 
function lastNonce() public returns (uint nonce) lastTimestamp() public returns (uint nonce)

//
```
## 23-04-2019

Bigpicture - the state of all [ERC standards](http://eips.ethereum.org/erc)

<img src="https://101blockchains.com/wp-content/uploads/2018/07/ERC_Standards_w.png" width="500" height="500"/>

- [Ripio credit network](https://ripiocredit.network/)
	1. `RCN` credit marketplace is mounted on top of a state-of-the-art decentralized application (dApp), which combines the usual tools and features of digital lending platforms with all the transparency and security of the blockchain.

	2. In an increasingly globalized world, RCN harnesses blockchain technology to bridge credit’s supply and demand across borders, creating a new ecosystem for decentralized debt products.

	3. Creditors - The decentralized marketplace allows lenders to reach the most profitable debt markets around the world, no matter where they are.

	4. Ecosystem - he network connects credit markets’ stakeholders with key decentralized finance service providers, including ID verifiers, scoring agents and exchanges.

	5.  Originators - The platform provides financial institutions, fintech lending companies and blockchain startups with access to global credit supply in crypto and fiat currencies.

	6. 

- ![votes on usage](https://media.licdn.com/dms/image/C5622AQHE8qFbs8snhQ/feedshare-shrink_8192/0?e=1559174400&v=beta&t=-oatQkNp7Wnl39MYwY82_E4Zw2IqDxriPQTd_QY8HOc)

- [link to solutions diagram]()
	1. 