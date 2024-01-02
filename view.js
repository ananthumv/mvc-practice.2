import Controller from "./controller.js";

const controller = new Controller();

const form = document.getElementById('form')
const name = document.getElementById('name')
const description = document.getElementById('description')
const image = document.getElementById('image')
const rootDiv = document.getElementById('root')

form.addEventListener ('submit' , (e) => {
    e.preventDefault();
    controller.setContact(name.value, description.value, image.value)
    form.reset()
    render();
})

function render() {
    var contacts = controller.getContacts()
    console.log(contacts)
    rootDiv.innerHTML = ''

    for(i=0; i<contacts.length; i++) {

        const contact = document.createElement('div')
        contact.classList.add('contact')

        const image = document.createElement('img')
        image.src = contacts[i].image
        contact.append(image)

        const contactDetails = document.createElement('div')
        contactDetails.classList.add('contact-details')
        contact.append(contactDetails)

        const name = document.createElement('h3')
        name.innerHTML=contacts[i].name
        contactDetails.append(name)

        const description = document.createElement('p')
        description.innerHTML=contacts[i].description
        contactDetails.append(description)

        const button = document.createElement('button')
        button.innerHTML='delete'
        button.id=i
        button.addEventListener('click', (e) => {
            
            controller.deleteContact(Number(button.id))
            render()
        })

        contactDetails.append(button)

        rootDiv.append(contact)
        
    }
    
}
