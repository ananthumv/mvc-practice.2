// const form = document.getElementById('form')
// const name = document.getElementById('name')
// const description = document.getElementById('description')
// const image = document.getElementById('image')

// let contacts = []

// function render() {
//     const rootDiv = document.getElementById('root')
//     rootDiv.innerHTML=''   

//     for(i=0; i<contacts.length; i++) {

//         const contact = document.createElement('div')
//         contact.classList.add('contact')

//         const image = document.createElement('img')
//         image.src = contacts[i].image
//         contact.append(image)

//         const contactDetails = document.createElement('div')
//         contactDetails.classList.add('contact-details')
//         contact.append(contactDetails)

//         const name = document.createElement('h3')
//         name.innerHTML=contacts[i].name
//         contactDetails.append(name)

//         const description = document.createElement('p')
//         description.innerHTML=contacts[i].description
//         contactDetails.append(description)

//         const button = document.createElement('button')
//         button.innerHTML='delete'
//         button.id=i
//         button.addEventListener('click', (e) => {
            
//             console.log(button.id)

//             contacts = contacts.filter((contact, i) => {
                
//                 if(i !== Number(button.id)){
//                     return contact
//                 }
//             })
//             console.log(contacts)
//             render()
//         })

//         contactDetails.append(button)

//         rootDiv.append(contact)
        
//     }
    
// }

// form.addEventListener ('submit' , (e) => {
//     e.preventDefault()
    
//     if (name.value.length <= 0 )  {
//         console.log("please fill this column")
//         return
//     }
//     if (name.value.length >= 15 ) {
//         console.log("enter a valid name")
//         return
//     }
//     if (description.value.length <= 10) {
//         console.log("add a larger description")
//         return
//     }

//     var values = {
//         name : name.value,
//         description : description.value,
//         image : image.value
//     }

//     console.log(values)

//     contacts.push(values)
//     console.log(contacts)

//     render()

//     form.reset()

// })
