const getAccounts = "SELECT * from accounts";
const getAccountsByid = "select * from accounts where id = $1";
const addAccount = "INSERT INTO accounts(name,city,state,type) VALUES($1,$2,$3,$4) RETURNING *";
const updateAccount = "UPDATE accounts SET name = $1, city = $2, state = $3, type = $4 WHERE id = $5 RETURNING *";

module.exports = {
    getAccounts,
    addAccount,
    getAccountsByid,
    updateAccount
};