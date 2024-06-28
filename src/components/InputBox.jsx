
export default function InputBox({onInputChange}){
    return (
        <section id="user-input">
        <div className="input-group">
            <p>
            <label>Initial Investment</label>
            <input type="number" required onChange={(event)=>onInputChange(event.target.value, "initialInvestment")}/>
            </p>
            <p>
            <label>Annual Investment</label>
            <input type="number" required onChange={(event)=>onInputChange(event.target.value, "annualInvestment")}/>
            </p>
        </div>
        <div className="input-group">
        <p>
        <label>Expected Return</label>
        <input type="number" required onChange={(event)=>onInputChange(event.target.value, "expectedReturn")}/>
        </p>
        <p>
        <label>Duration</label>
        <input type="number" required onChange={(event)=>onInputChange(event.target.value, "duration")}/>
        </p>
    </div>
    </section>
    )
}