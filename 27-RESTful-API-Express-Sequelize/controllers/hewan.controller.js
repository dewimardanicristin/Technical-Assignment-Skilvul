const Hewan = require("../models/hewan")

exports.findAllHewan =  (req, res) => {
    Hewan.findAll()
      .then(result => res.send(result))
      .catch(error => res.send(error))
};

exports.getHewanByID = (req, res) => {
    Hewan.findOne({ 
      where: {
        id: req.params.id
      }
    })
    .then(result => {
    if(result)
        res.send(result)
    else
        res.sendStatus(404)
    })
    .catch(error => res.send(error))
}


exports.createHewan = (req, res) => {
    const {nama, namaSpesies, umur} = req.body
    const newHewan = {
      nama: nama,
      namaSpesies: namaSpesies,
      umur: umur
    }
    Hewan.create(newHewan)
      .then(result => res.send(result))
      .catch(error => res.send(error))
};

exports.updateHewan =  (req, res) => {
    Hewan.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    .then(() => Hewan.findByPk(req.params.id))
    .then((result) => {
      if(result)
        res.send(result)
      else 
        res.sendStatus(400)
    })
    .catch(error => res.send(error))
};

exports.deleteHewan = (req, res) => {
    Hewan.destroy({
      where: {id: req.params.id}
    })
    .then((result) => {
      if(result)
        res.send({message: "The animal was deleted successfully"})
      else 
        res.sendStatus(400)
    })
    .catch(error => res.send(error))
};
