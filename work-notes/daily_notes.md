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


-[EIP 712 - Descriptive Signed Messages ](https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26)	
	1. 

-[EIP 1077 - Executable Signed Messages](http://eips.ethereum.org/EIPS/eip-1077)
	1. 

-[Enimga Credit Scoring](https://blog.enigma.co/decentralizing-credit-with-enigma-440c6648b4d8)

	1. define your credit score: 
	[x]Number and types of accounts (credit card, checking account, saving account etc.)
	[x]Payment history and timely payment
	[x]Outstanding balance vs. credit limit (also called credit utilization)
	[x]Length of banking relationship
	[x]Types of credit used 
	2. ![credit scoring with enigma](https://cdn-images-1.medium.com/max/1600/0*RC9r5xtGZ1dKLoW5)
	3. [Colendi](https://www.colendi.com/) is blockchain based credit scoring project, which utilizes alternative data inputs such as utility bill payment, retail spending and more
	4. [Cerved](https://www.cerved.com/it), an Italian credit scoring agency, is also interested in applying open data protocols enabled by PSD2 to enable a more transparent credit scoring process.
	5. [On-Chain/Off-Chain](https://cdn-images-1.medium.com/max/1600/1*r5UKAkNircauBl6oTtHmsg.png)
	6. [Enigma Protocol](https://cdn-images-1.medium.com/max/2400/0*-JfLHCHoeRgZt13e.)
	7. An Enigma contract can allow the company running the token sale to create a contract where your inputs — the wallet addresses you own — are secret but can be computed on. This contract can determine whether you qualify for the token sale or not
	8. They have already performed an 45 Mil ICO and the tokens will be used for 
		[]

###3. Do we know why uport failed? - a good answer
- [Consensys fails at delivering](https://www.forbes.com/sites/jeffkauflin/2018/12/05/cryptopia-in-crisis-billionaire-joe-lubins-ethereum-experiment-is-a-mess-how-long-will-he-prop-it-up/#2b96fa392f0a)
	1. UPort, a tool aimed at letting users log in to Ethereum applications, had three project managers, who couldn’t align on a single vision. Today there are just 15 applications using UPort, and the project is splitting in two. 
	2. Suffering from an organizational crisis

## 12-04-2019
