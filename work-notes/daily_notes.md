# Flexplore Work Notes 


## 11-04-2019

The Big picture - 
Centralized Credit Scoring - Social credit score, solutions created by central third parties have come to be viewed as insecure at best and dystopian at worst.

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



