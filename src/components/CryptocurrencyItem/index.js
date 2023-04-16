import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  console.log(cryptoDetails)
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails
  return (
    <li className="crypto-item">
      <div className="logo-currency-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="values-text">{usdValue}</p>
      <p className="values-text">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
