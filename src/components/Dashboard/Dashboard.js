import React, {Component} from 'react'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            isChecked: true,
            posts: [
                // {
                //     title: 'title 1',
                //     username: 'brian',
                //     profile_pic: 'https://robohash.org/brian.png'
                // },
                // {
                //     title: 'title 2',
                //     username: 'brittney',
                //     profile_pic: 'https://robohash.org/brittney.png'
                // },
                // {
                //     title: 'title 3',
                //     username: 'evan',
                //     profile_pic: 'https://robohash.org/evan.png'
                // }
            ]
        }
    }
    render(){
        const allPosts = this.state.posts.map(e => (
            <div>
                <h3>{e.title}</h3>
                <h3>{e.username}</h3>
                <img src={e.profile_pic}/>
            </div>
        ))
        return(
            <div>
                <form>
                    <h3>This is Dashboard</h3>
                    <input placeholder='Search By Title'></input>
                    <button type='submit'>Search</button>
                    <button type='reset'>Reset</button>
                    <label for='posts'>Include My Posts</label>
                    <input type='checkbox' id='posts'/>
                </form>
                <div>
                    {allPosts}
                </div>
            </div>
        )
    }
}