import model from "../database/userSchema"

export const register = async (req, res) => {
    const [username, email, password] = req.body

    try {
        if(!username || !email || !password) {
            res.json("All the fields are require !")
        }

        const userexit = model.find(email)
        if(userexit){
            
        }
        
    } catch (error) {
        
    }
}