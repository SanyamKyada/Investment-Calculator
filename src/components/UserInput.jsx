export default function UserInput({onUserInput}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input name="initialInvestment" type="number" onChange={onUserInput}/>
                </div>
                <div>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input name="annualInvestment" type="number" onChange={onUserInput}/>
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input name="expectedReturn" type="number" onChange={onUserInput}/>
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input name="duration" type="number" onChange={onUserInput}/>
                </div>
            </div>
        </div>
    );
}