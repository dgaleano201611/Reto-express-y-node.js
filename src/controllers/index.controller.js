const controller = {}

const obj = {
    message: "Curso encontrado satisfactoriamente",
    top:{
        version_top: 27,
        students: 10,
        names: [
            "Oscar", 
            "Nicolas", 
            "Jean", 
            "Diego", 
            "Camilo", 
            "Michael",
            "Andres",
            "Sebastian",
        ]
    }
}
controller.index = (req, res)=>{
    res.send(obj)  
}

module.exports = controller