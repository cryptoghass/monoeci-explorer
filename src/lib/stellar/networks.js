const networks = {
  public: 'public',
  test: 'test',
  local: 'local',
}

const hostnameToNetworkType = hostname => {
  if (hostname === 'explorer.monoeci.io' || hostname === 'publicnet.local')
    return networks.public
  else if (hostname === 'explorer-testnet.monoeci.io' || hostname === 'testnet.local')
    return networks.test
  else return networks.local
}

export {networks as default, hostnameToNetworkType}
