import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CRYPTO_BANNER =
  'https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png'
const CryptocurrenciesList = props => {
  const {cryptoList} = props
  console.log(cryptoList)
  return (
    <div className="app-container">
      <h1 className="app-heading">Cryptocurrency Tracker</h1>
      <img
        src={CRYPTO_BANNER}
        alt="cryptocurrency"
        className="crypto-banner-image"
      />
      <ul className="currrency-list">
        <li className="table-header">
          <p className="header-cell first-cell">Coin Type</p>
          <p className="header-cell">USD</p>
          <p className="header-cell">EURO</p>
        </li>
        {cryptoList.map(eachCrypto => (
          <CryptocurrencyItem key={eachCrypto.id} cryptoDetails={eachCrypto} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
