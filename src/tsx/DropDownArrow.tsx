function DDA() {
    return (<>
        <svg height="25" width="25" viewBox="0 0 100 100">
                    //contentStyleType doesnt work! - auto converts tuple into semicolon-seperated string

            <path d="M 25,25 L 50,75 L 75,25 Z" style={{ fill: 'red', stroke: "#fff", strokeWidth: "3" }} />
        </svg>
    </>)
}
export default DDA;