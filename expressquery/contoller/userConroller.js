


// get by id
exports.getUser = (req, res) => {
    //const userId = req.params.id;
    // Logic to retrieve user by ID from the database
    const result = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
    if(result.rows.length === 0) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.json(result.rows[0]);
};

// create new user
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    const result = await db.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    res.status(201).json(result.rows[0]);
}

// update user
exports.updateUser = async (req, res) => {
    const userId = req.params.id;  
    const { name, email } = req.body;
    const result = await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, userId]);   
    if(result.rows.length === 0) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.json({ message: 'User updated successfully' });
}

// delete user
// exports.deleteUser = async (req, res) => {
//     const userId = req.params.id;
//     // Logic to delete user from the database
//     const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
//     if(result.rows.length === 0) {
//         return res.status(404).send({ message: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
// }