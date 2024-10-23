export default function Friend({friend}){
    const {name, email} = friend;
    return (
        <div className="box">
            <h4>Person Name: {name} </h4>
            <p>Email: {email} </p>
        </div>
    )
}