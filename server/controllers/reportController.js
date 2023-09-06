// handles functions for reporting a new crime and getting all reported crimes

const handleNewCrime = (req,res) =>{
    const {user_id, incident_type, incident_description, incident_location} = req.body;
    console.log(req.body);

    try {
        
    } catch (error) {
        
    }
    return res.json("done")
}

module.exports ={handleNewCrime}