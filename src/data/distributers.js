import directory from '../data/directory'
const {anchors} = directory

/**
 * Register some known distributer accounts linking to thier issuer accounts.
 *
 * NOTE: where a single distributer/issuer pair is used for multiple
 *  asset types an issuer lookup for just one asset is required to
 *  make the link. (eg. apay.io:ETH)
 */

const issuer = (name, asset) =>
  anchors[name].assets[asset].substring(asset.length + 1)

export default {
  GDSNYE6WMDQQW7JNAIIFEIJ562GS76WGSKXG3K6DPXLRN3COA47JRAJH: issuer(
    'smartlands.io',
    'SLT'
  ),
}
