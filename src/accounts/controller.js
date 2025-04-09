const pool = require('../../db');
const queries = require('./queries');

const getAccounts = async (req, res) => {
    try {
        const result = await pool.query(queries.getAccounts);
        res.json(result.rows); 
        console.log('Accounts fetched:', result.rows);
    } catch (error) {
        console.error('Error fetching accounts:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const addAccount = async (req, res) => {
    try {
        const { name, city, state, type } = req.body;
        const result = await pool.query(queries.addAccount, [name, city, state, type]);
        res.json(result.rows[0]); 
    } catch (error) {
        console.error('Error adding account:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateAccount = async (req, res) => {
    try {
      const id = parseInt(req.params.id); // Fix: Remove incorrect destructuring
  
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid account ID" });
      }
  
      const { name, city, state, type } = req.body;
  
      const result = await pool.query(queries.updateAccount, [name, city, state, type, id]);
  
      if (result.rowCount === 0) { // Fix: Use rowCount instead of rows.length
        return res.status(404).json({ message: "Account not found" });
      }
  
      res.json({ message: "Account updated successfully" });
    } catch (error) {
      console.error('Error updating account:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
module.exports = {
    getAccounts,
    addAccount,
    updateAccount, 
};