const getLocations = "SELECT * from locations";
const getLocationsByid = "select * from locations where id = $1";
//const addLocations = "INSERT INTO locations (name,city,state,type) VALUES($1,$2,$3,$4) RETURNING *";
const addLocations = "INSERT INTO Locations(name,city,state,type) VALUES($1,$2,$3,$4) RETURNING *";
const updateLocation = "UPDATE locations SET name = $1, city = $2, state = $3, type = $4 WHERE id = $5 RETURNING *";

module.exports = {
    getLocations,
    addLocations,
    getLocationsByid,
    updateLocation,
};