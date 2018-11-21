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
  GDEEUQKH5PJ4XFZ2IBL23XD2N6JAEPAU24VL5BKMJEHOHJXRQMPZTWVJ: issuer(
    'monoeci.io',
    'XMCC'
  )
}
