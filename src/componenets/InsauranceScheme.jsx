import React from 'react'
import Navbar from './Navbar'
import SchemeCard from './SchemeCard'

const InsauranceScheme = () => {
  return (
    <div>
        <Navbar/>
        <h2>Insaurance Schemes</h2>
        <SchemeCard 
        title="Pradhan Mantri Fasal Bima Yojana (PMFBY)"
        content="Provides comprehensive insurance cover against failure of the crop thus helping in stabilising the income of the farmers."
        />
        <SchemeCard 
        title="Prime Minister Jeevan Jyoti Bima Yojana"
        content="Life Insurance scheme with risk coverage of Rs. 2 Lakh in case of death of the insured, due to any reason."
        />
        <SchemeCard 
        title="Pradhan Mantri Suraksha Bima Yojana"
        content="An accident Insurance scheme, PMSBY offers a one-year accidental death and disability cover, which can be renewed annually."
        />
        <SchemeCard 
        title="Livestock insurance Scheme"
        content="Provides protection mechanism to the farmers against any eventual loss of their animals due to death."
        />
    </div>
  )
}

export default InsauranceScheme