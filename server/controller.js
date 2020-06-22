const bcrypt = require('bcrypt')

module.exports = {
        register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const pic = `https://robohash.org/${username}.png`

        const existingUser = await db.check_user(username)

        if (existingUser[0]){
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.register_user([username, hash, pic])

        req.user = {
            userId: newUser[0].id,
            userName: newUser[0].username,
            profilePic: newUser[0].profile_pic
        }

        res.status(200).send(req.user)
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        const user = await db.check_user(username)
        if(!user[0]){
            return res.status(403).send('Username or Password incorrect')
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if(authenticated) {
                req.user = {
                    userId: user[0].id,
                    userName: user[0].username,
                    profilePic: user[0].profile_pic
                }
                res.status(200).send(req.user)
            } else {
                res.status(403).send('Username or Password incorrect')
            }
        }
    },

    search: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {userPosts, search} = req.query

        const posts = await db.posts.find()

        if (userPosts && search) {
            //return all posts where title contains string
        } else if (!userPosts && !search) {
            //return all posts not by user
            const nonUserPosts = posts.filter(posts => {
                return posts.author_id != id
            })
            res.status(200).send(nonUserPosts)
        } else if (!userPosts && search) {
            // return all posts where title contains string & not by user
        } else if (userPosts && !search) {
            // return all posts 
            res.status(200).send(posts)
        } else {
            res.status(200).send(posts)
        }
    }
}