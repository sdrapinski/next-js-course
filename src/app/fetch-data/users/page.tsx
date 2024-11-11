import React from 'react'

const UsersFetch = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    console.log(users);
    
  return (
    <div>UsersFetch</div>
  )
}

export default UsersFetch