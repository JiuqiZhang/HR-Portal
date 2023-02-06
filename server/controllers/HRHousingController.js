const Housing = require("../models/Housing");
const Landlord = require("../models/Landlord");
const Facility = require("../models/Facility");
exports.postHousing = async (req, res) => {
  try {
    console.log(req.body)
   
    const landlord = await Landlord.create({
        name: req.body.landlordName,
        phoneNum: req.body.landlordPhone,
        email: req.body.landlordEmail,
    })
    const facility = await Facility.create({
        beds:req.body.beds,
        tables:req.body.tables,
        mattresses: req.body.mattresses,
        chairs:req.body.chairs,
    })
    const info = {
        address: req.body.address,
        roommates: [],
        reports: [],
        landlord: landlord,
        facility: facility,
    }
    const housing = await Housing.create(info);
    res.json(housing);
  } catch (error) {
    console.log(error)
    return res.json({
      error: error,
    });
  }
}

exports.allHousing = async (req, res) => {
    try {
        const housing = await Housing.find();
        for (let each of housing){
            let landlord = await Landlord.find(each.landlord)
            each.landlord = landlord[0]
            // console.log(landlord)
            //no rommate and reports yet
            let facility = await Facility.find(each.facility)
            each.facility  = facility[0]
        }
        res.json(housing);
      } catch (error) {
        console.log(error)
        return res.status(401).json({
          error: error,
        });
      }
  };
