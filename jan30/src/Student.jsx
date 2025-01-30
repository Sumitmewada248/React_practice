
const Student = (props) => {
    return (
        <>
        <h1> My Name : {props.name} </h1>
        <h1>My Rollno: {props.rno} </h1>
        <h1>My Subject Name: {props.clg} </h1>
        <h1>My Fees: {props.fee} </h1>
        </>
    );
}
export default Student;