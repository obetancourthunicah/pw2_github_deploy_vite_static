const servicios = [
    {title:"Servicio 1", description:"Descripcion 1", url:"https://placeholder.co/300X220"},
    {title:"Servicio 2", description:"Descripcion 2", url:"https://placeholder.co/300X220"},
    {title:"Servicio 3", description:"Descripcion 3", url:"https://placeholder.co/300X220"},
    {title:"Servicio 4", description:"Descripcion 4", url:"https://placeholder.co/300X220"},
    {title:"Servicio 5", description:"Descripcion 5", url:"https://placeholder.co/300X220"},
];

const socialNetworks = [
    {name:"Facebook", url:"https://www.facebook.com/"},
    {name:"Twitter", url:"https://twitter.com/"},
    {name:"Instagram", url:"https://www.instagram.com/"}
];

const handlerBarsContext = {
    "/index.html": {
        "title": "Home"
    },
    "/about.html": {
        "title": "About",
        "servicios": servicios
    },
    "/contacts/contact.html": {
        "title": "Contact"
    },
    "/servicios.html": {
        "title": "Servicios",
        "servicios": servicios
    }
}
//https://codepen.io/paulnoble/pen/yVyQxv
const pageContext = (page)=>{
    const context= {...handlerBarsContext[page], socialNetworks}
    return context;
}
export default pageContext;