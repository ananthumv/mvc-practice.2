import model from "./model.js";
class controller{
    constructor(){
        this.model = new Model()
    }
    getContacts(){
        return this.model.getContacts()
    }
    setContact(name, description, image){
        if (name.length <= 0 )  {
            console.log("please fill this column")
            return
        }
        if (name.length >= 15 ) {
            console.log("enter a valid name")
            return
        }
        if (description.length <= 10) {
            console.log("add a larger description")
            return
        }
        var values = {
            name : name,
            description : description,
            image : image
        }

        this.model.setContact(values)
    }
    deleteContact(index) {
        this.model.deleteContact(index)
    }

}
export default controller