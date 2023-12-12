import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const App = () => {

   const [Posts, setPosts]=useState([])
   const [Todos, setTodos]=useState([])
   const [Users, setUsers]=useState([])

   var posts = 'https://jsonplaceholder.typicode.com/posts'
   var todos = 'https://jsonplaceholder.typicode.com/todos'
   var users = 'https://jsonplaceholder.typicode.com/users'

  function GetPosts(){
    axios.get (posts).then((res) => {setPosts (res.data) })
  }
  function GetTodos(){
    axios.get (todos).then((res) => {setTodos (res.data) })
  }
  function GetUsers(){
    axios.get (users).then((res) => {setUsers(res.data) })
   
  }

  useEffect(() =>{
    GetPosts()
    GetTodos()
    GetUsers()
  }, [])

  
  return (
   <div className="container">
    <div className="row">
      <div className="col-4 border border-dark">
        <h3>Posts</h3>
        {
          Posts.map((item, index) => <div key={index}>
            <div className="card my-2">
              <div className="card-header">
                {item. id}. {item.title}
              </div>
              <div className="card-body">
                {item.body}
              </div>
            </div>
          </div>)
        }
      </div>
      <div className="col-4 border border-dark">
        <h3>todos</h3>
        {
          Todos.map((item, index) => <div key={index}>
            <div className="card my-2 text-light bg-dark">
              <div className="card-body">
                {item. id}. 
                 <input type="checkbox" checkbox={item.completed} className="mx-2"/>
                {item.title}
              </div>
            </div>
          </div>)
        }
      </div>
      <div className="col-4 border border-dark ">
        <h3>users</h3>
        {
          Users.map((item, index) => <div key={index}>
            <div className="card my-2 bg-dark text-light">
              <div className="card-header">
                {item.id}.
                {item.username}
              </div>
              <div className="card-body">
                {item.name}
                {item.email}
              </div>
            </div>
          </div>)
        }
      </div>
   
    </div>
   </div>
    
  )
}

export default App