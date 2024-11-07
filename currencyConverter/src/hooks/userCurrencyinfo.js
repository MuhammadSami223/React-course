import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/a4022621e08462b2041f811f/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.conversion_rates) {
          setData(res.conversion_rates) // Access the conversion rates
        } else {
          console.error("Error: Conversion rates not found in the response", res)
        }
      })
      .catch((error) => console.error("Fetch error:", error))
  }, [currency])

  // console.log("Currency Data:", data)
  return data
}

export default useCurrencyInfo
