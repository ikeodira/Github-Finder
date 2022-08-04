function UserItem({user: {login, avatar_url }}){

    return(
        <div className="card shadow-md compact side">
            {login}
        </div>
    )
}


export default UserItem;