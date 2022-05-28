function UnitSelect({unit, setUnit}) {
    const handleChange = (e) => {
        console.log(e.target.value)
        setUnit(e.target.value)
    }

    return (
        <div>Unit: 
            <select value={unit} onChange={handleChange}>
                <option value="lbs" >lbs</option>
                <option value="kgs">kg</option>
            </select>
        </div>
    )
}

export default UnitSelect