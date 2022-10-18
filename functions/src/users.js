import { dbConnect } from "./dbConnect.js";
//using await .catch()
export async function createUser(req, res) {
    //db.collection('users').add(req.body)

    const db = dbConnect();
    const doc = await db.collection('users').add(req.body)
        .catch(err => res.status(500).send({ sucess: false, message: err }))
    res.status(201).send({ success: true, message: 'User created: ' + doc.id });
}

export async function getAllUsers(req, res) {
    const db = dbConnect();
    const collection = await db.collection('users').get()
        .catch(err => res.status(500).send({ sucess: false, message: err }))
    const users = collection.docs.map(doc => {
        let user = doc.data()
        user.uid = doc.id
        return user
    })
    res.send(users)
}

 //Second Options
// export function createUser (req, res) {
//     const db = dbConnect(); 
//     db.collection('users').add(req.body)
//     //db.collection('users').add(req.body)

//     //using .then() .catch()
//     db.collection('users').add(req.body)
//     .then(doc => res.status(201).send({success:true, message: 'User created:' + doc.id}))
//     .catch(err => res.status(500).send({sucess: false, message: err}))
//     }

//Third Options
//try {



//}


