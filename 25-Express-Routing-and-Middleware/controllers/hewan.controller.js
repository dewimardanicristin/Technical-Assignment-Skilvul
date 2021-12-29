const hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
]

class HewanController{
    static async getDataJSON(req,res){
        try {
            let dataHewan = {
                message : "success get data pet",
                hewan : hewan
            }
            res.status(200).send(dataHewan)
        } catch (error) {
            res.status(500).send({msg:error})
        }
    }

    static async createNewHewan(req,res){
        try {
            const body = req.body;
            let newHewan = {
                id : hewan.length+1,
                nama : body.nama,
                spesies : body.spesies
            }
            hewan.push(newHewan);
            let hewanres = {
                message : "success adding one pet",
                hewan : hewan
            }
            res.status(200).send(hewanres)
        } catch (error) {
            res.status(500).send({msg:error})
        }
    }

    static async getHewanByID(req,res){
        try {
            const id = req.params.id;
            const search = hewan.find(item => item.id === parseInt(id))
            if(search){
                const listHewan = {
                    message : "success get data pet",
                    Hewan : search
                }
                res.status(200).send(listHewan);
            }
            else{
                res.status(404).send("Data not Found")
            }
        } catch (error) {
            res.status(500).send({msg:error})
        }
    }
    static async updateDataHewan(req,res){
        try {
            const id = req.params.id;
            let search = hewan.find(item => item.id === parseInt(id))
            if(search){
                let updateHewan = {
                    id : search.id,
                    nama : req.body.nama,
                    spesies : req.body.spesies
                }
                let targetindex = hewan.indexOf(search);
                hewan.splice(targetindex,1,updateHewan);
                let newData = {
                    message : "Success Update Data Pet",
                    Hewan : updateHewan
                }
                res.status(200).send(newData);
            }
            else{
                res.status(404).send("Data not Found")
            }
        } catch (error) {
            res.status(500).send({msg:error})
        }
    }

    static async deleteDataHewan(req,res){
        try {
            const id = req.params.id;
            let search = hewan.find(item => item.id === parseInt(id))

            if(search){
                let targetindex = hewan.indexOf(search);
                hewan.splice(targetindex,1);
                let deleteData = {
                    message : "Success Delete Data Path",
                    Hewan : search
                }
                res.status(200).send(deleteData)
            }
            else{
                res.status(404).send("Data not Found")
            }
        } catch (error) {
            res.status(500).send({msg:error})
        }
    }
}

module.exports = HewanController;