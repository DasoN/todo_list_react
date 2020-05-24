import React, {Component, useEffect, useState} from "react";
import axios from 'axios'

// class Main extends Component{
//     constructor(props) {
//         super(props);
//
//         const [state, setState] = useState({
//             userList: []
//         })
//     }
//
//     componentDidMount() {
//         axios.get('http://localhost:5000/')
//             .then(res => {
//                 this.setState({
//                     userList: res.data
//                 })
//             })
//         console.log(this.state)
//     }
//
//     showw(){
//         return this.state.userList.map(user => {
//             return <li>{user.username}</li>
//         })
//     }
//
//
//     render() {
//         return(
//             <div>
//
//             </div>
//         )
//     }
// }

export default Main

function Main(){
    const [state, setState] = useState({
        userList : []
    })

    useEffect(()=>{
        axios.get('http://localhost:5000/')
            .then(res => {
                setState({
                    userList: res.data
                })
            })
    })
    return (
        <ul className="list-group">
            <h1>List</h1>
            {state.userList.map(user => <li className="list-group-item" key={user._id}>{user.username}</li>)}
        </ul>
    )
}