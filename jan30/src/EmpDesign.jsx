const EmpDesign = (props) => {
    return (
        <>
            
            <tr  bgcolor="lightblue">
            <td>{props.rollno}</td>
                <td>{props.name}</td>
             
                <td>{props.designation}</td>
                <td>{props.salary}</td>
            </tr>
        </>
    )
}

export default EmpDesign