import { calculateInvestmentResults } from "../util/investment"
import { formatter } from "../util/investment"
export default function Results({userInput}){
    const annualData=calculateInvestmentResults(userInput)
    const initialInvestment=annualData[0].valueEndOfYear-annualData[0].interest-annualData[0].annualInvestment;
    return(
        <table id="result">
           <thead>
            <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            </tr>
           </thead>
           <tbody>
           {annualData.map(yearData=>{
            const totalInterest=yearData.valueEndOfYear-yearData.year*yearData.annualInvestment-initialInvestment;
            return <tr key={yearData.year}> 
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(yearData.valueEndOfYear-totalInterest)}</td>
            </tr>
           })}
           </tbody>
        </table>
    )
}