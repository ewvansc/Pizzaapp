const pool = require('../../db');
const queries = require('./queries');

/*
 addPizza(Pizza) -> Insert into pizza(name, toppings) values($1, $2)
 getPizzas -> Select * from pizza
 getPizza(id) -> Select * from pizza where id == (id)
 updatePizza(id) -> Update pizza set name = $1, toppings = $2
 deletePizza(id) -> Delete from pizza where id == (id)
*/

const addLocation = (params) => {

}

const getLocationsById = (req, res) => {
  const locationId = parseInt(req.params.id);
  if(isNaN(locationId)) {
    return res.status(400).json({error: "Invalid value format"});
  }
  console.log("Received LocationId");
  pool.query(queries.getLocationsById, [locationId], (error, results) => {
    if(error) {
      console.error("Database error", error);
      return res.status(500).json({error: "Location not found"});
    }
    res.status(200).json(results.rows);
  })
}

const updateLocation = (req, res) => {
const {name,city,state,type} = req.body;

pool.query(queries.updateLocations, [name,city,state,type], (error,results)=> {
  if(error)throw error;
  res.status(200).json(results.rows);
  res.status(201).send("succesfully modified a location");
});
};

const getLocations = async (req, res) => {
    try {
        const result = await pool.query(queries.getLocations);
        res.json(result.rows); 
        console.log('Locations fetched:', result.rows);
    } catch (error) {
        console.error('Error fetching Locations:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
/*
const addLocations = async (req, res) => {
    try {
        const { name, city, state, type } = req.body;
        const result = await pool.query(queries.addLocations, [name, city, state, type]);
        res.json(result.rows[0]); 
    } catch (error) {
        console.error('Error adding Locations:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
*/
   const addLocations = (req, res) => {
    const {name,city,state,type} = req.body;

    pool.query(queries.addLocations, [name,city,state,type], (error, results)=> {
      if(error)throw error;
      //res.status(200).json(results.rows);
       res.status(201).send("sucessfully added a new location");
      
    });
   };

/*const updateLocations = async (req, res) => {
    try {
      const id = parseInt(req.params.id); // Fix: Remove incorrect destructuring
  
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid Location ID" });
      }
  
      const { name, city, state, type } = req.body;
  
      const result = await pool.query(queries.updateLocations, [name, city, state, type, id]);
  
      if (result.rowCount === 0) { // Fix: Use rowCount instead of rows.length
        return res.status(404).json({ message: "Location not found" });
      }
  
      res.json({ message: "Locations updated successfully" });
    } catch (error) {
      console.error('Error updating Locations:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  */
module.exports = {
    getLocationsById,
    getLocations,
    addLocations,
    updateLocations, 
};