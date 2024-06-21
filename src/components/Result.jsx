import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ data }) {

    const result = calculateInvestmentResults(data);
    return (
        <table id="result">
            <thead>
                <td>Year</td>
                <td>Investment Value</td>
                <td>Interest (Year)</td>
                <td>Total Interest</td>
                <td>Invested Capital</td>
            </thead>
            <tbody>
                {
                    result.map(resultData => (
                        <tr>
                            <td>{resultData.year}</td>
                            <td>{formatter.format(resultData.valueEndOfYear)}</td>
                            <td>{formatter.format(resultData.interest)}</td>
                            <td>{formatter.format(resultData.totalInterest)}</td>
                            <td>{formatter.format(resultData.annualInvestment)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}