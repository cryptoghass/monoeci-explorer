# Monoeci V2 Explorer

[![Build Status](https://travis-ci.org/chatch/monoeciexplorer.svg?branch=master)](https://travis-ci.org/chatch/monoeciexplorer)

A ledger explorer for [Monoeci V2](https://www.monoeci.io).

Public: https://explorer.monoeci.io (TESTNET ONLY)
Test: https://explorer.monoeci.io
Local: http://localhost:3000

## Resources

### Lists

| Resource     | URI                                          |
| ------------ | -------------------------------------------- |
| Operations   | [/operations](https://explorer.monoeci.io/operations) |
| Transactions | [/txs](https://explorer.monoeci.io/txs)               |
| Ledgers      | [/ledgers](https://explorer.monoeci.io/ledgers)       |
| Payments     | [/payments](https://explorer.monoeci.io/payments)     |
| Trades       | [/trades](https://explorer.monoeci.io/trades)         |
| Effects      | [/effects](https://explorer.monoeci.io/effects)       |

### Directory

| Resource        | URI                                        |
| --------------- | ------------------------------------------ |
| Assets          | [/assets](https://explorer.monoeci.io/assets)       |
| Anchors         | [/anchors](https://explorer.monoeci.io/anchors)     |
| Exchanges       | [/exchanges](https://explorer.monoeci.io/exchanges) |
| Inflation Pools | [/pools](https://explorer.monoeci.io/pools)         |

### Accounts

| Resource             | URI                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| by Federated address | [/account/monoeci\*fed.network](https://explorer.monoeci.io/account/monoeci*fed.network)                                                                          |
| by Public address    | [/account/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX](https://explorer.monoeci.io/account/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX) |

#### Tabs

| Resource         | URI                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| Balances Tab     | [/account/monoeci\*fed.network#balances](https://explorer.monoeci.io/account/monoeci*fed.network#balances)         |
| Payments Tab     | [/account/monoeci\*fed.network#payments](https://explorer.monoeci.io/account/monoeci*fed.network#payments)         |
| Offers Tab       | [/account/monoeci\*fed.network#offers](https://explorer.monoeci.io/account/monoeci*fed.network#offers)             |
| Trades Tab       | [/account/monoeci\*fed.network#trades](https://explorer.monoeci.io/account/monoeci*fed.network#trades)             |
| Effects Tab      | [/account/monoeci\*fed.network#effects](https://explorer.monoeci.io/account/monoeci*fed.network#effects)           |
| Operations Tab   | [/account/monoeci\*fed.network#operations](https://explorer.monoeci.io/account/monoeci*fed.network#operations)     |
| Transactions Tab | [/account/monoeci\*fed.network#transactions](https://explorer.monoeci.io/account/monoeci*fed.network#transactions) |
| Signing Tab      | [/account/monoeci\*fed.network#signing](https://explorer.monoeci.io/account/monoeci*fed.network#signing)           |
| Flags Tab        | [/account/monoeci\*fed.network#flags](https://explorer.monoeci.io/account/monoeci*fed.network#flags)               |
| Data Tab         | [/account/monoeci\*fed.network#data](https://explorer.monoeci.io/account/monoeci*fed.network#data)                  |

### Search

| Resource              | URI                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Federated address     | [/search/steexp\*fed.network](https://explorer.monoeci.io/search/steexp*fed.network)                                                                                            |
| Public address        | [/search/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX](https://explorer.monoeci.io/search/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX)                 |
| Ledger                | [/search/10000000](https://explorer.monoeci.io/search/10000000)                                                                                                                 |
| Transaction           | [/search/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071](https://explorer.monoeci.io/search/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071) |
| Asset Code            | [/search/NGN](https://explorer.monoeci.io/search/NGN)                                                                                                                           |
| Anchor Name           | [/search/ripplefox](https://explorer.monoeci.io/search/ripplefox)                                                                                                               |
| Anchor Name (Partial) | [/search/fox](https://explorer.monoeci.io/search/fox)                                                                                                                           |

### Misc

| Resource    | URI                                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transaction | [/tx/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071](https://explorer.monoeci.io/tx/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071) |
| Ledger      | [/ledger/10000000](https://explorer.monoeci.io/ledger/10000000)                                                                                                         |
| Anchor      | [/anchor/apay.io](https://explorer.monoeci.io/anchor/apay.io)                                                                                                           |
| Asset       | [/asset/NGN](https://explorer.monoeci.io/asset/NGN)                                                                                                                     |

## Exploring Private / Local Development Networks<a name="private-networks"></a>

steexp will connect to a local horizon instance at http://localhost:8000 by default. If your running a local private network for development this is quite handy for browsing your changes to the ledger.

Alternatively you can run locally connecting to the testnet or public network horizon instances. To do this define these aliases to localhost:

```
127.0.1.1  testnet.local     # for steexp use testnet horizon
127.0.1.1  publicnet.local   # for steexp use mainnet horizon
```

Navigate to http://testnet.local:3000 or http://publicnet.local:3000 to select the network your interesting in exploring.

## Development

NOTE: use npm instead of yarn to install the dependencies - see [#15](https://github.com/chatch/monoeciexplorer/issues/15) for details

See the section [Exploring Private / Local Development Networks](#private-networks) for connecting to different backend networks. By default steexp will look for a local instance of horizon.

Start:

```
npm i && npm start
```

Test:

```
npm i && npm test
```

Build:

```
npm i && npm run build
```

## Languages

Use the language selector in the top right corner to change the language.

Translation files are here:
https://github.com/chatch/monoeciexplorer/tree/master/src/languages

Submit pull requests with new languages or languages fixes there.
