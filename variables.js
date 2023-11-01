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

const coolServices = [
    {
        databg: "#27323c",
        dataType: "iceland",
        titleName: "ICELAND",
        titleCat: "EUROPE",
        bodyDesc: "“As I flew north to begin my third circuit of Iceland in four years, I was slightly anxious. The number of visitors to Iceland has doubled in that period, and I feared this might mean a little less magic to go around. At the end of this trip, 6000km later, I'm thrilled to report that the magic levels remain high. It's found in glorious football victories and Viking chants, kayaking among icebergs, sitting with puffins under the midnight sun and crunching across brand-new lava fields.”",
        bodyAuthor: "Carolyn Bain",
        index: "01",
        jsActive: "js-active",
        bgimage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/iceland.jpg"
    },
    {
        databg: "#19304a",
        dataType: "china",
        titleName: "CHINA",
        titleCat: "ASIA",
        bodyDesc: "“Its modern face is dazzling, but China is no one-trick pony. The world's oldest continuous civilisation isn't all smoked glass and brushed aluminium and while you won't be tripping over artefacts  three decades of round-the-clock development and rash town-planning have taken their toll  rich seams of antiquity await.”",
        bodyAuthor: "Damian Harper",
        index: "02",
        jsActive: "",
        bgimage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/china.jpg"
    },
    {
        databg: "#2b2533",
        dataType: "usa",
        titleName: "USA",
        titleCat: "NORTH AMERICA",
        bodyDesc: "“When it comes to travel, America has always floored me with its staggering range of possibilities. Not many other countries have so much natural beauty mountains, beaches, rainforest, deserts, canyons, glaciers coupled with fascinating cities to explore, an unrivaled music scene and all the things that make travel so rewarding (friendly locals, great restaurants and farmers markets, and plenty of quirky surprises).”",
        bodyAuthor: "Regis St Louis",
        index: "03",
        jsActive: "",
        bgimage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/usa.jpg"
    },
    {
        databg: "#312f2d",
        dataType: "peru",
        titleName: "PERU",
        titleCat: "SOUTH AMERICA",
        bodyDesc: "“For me, Peru is the molten core of South America, a distillation of the oldest traditions and the finest building, weaving and art made by the most sophisticated cultures on the continent. In Peru the wildest landscapes – from frozen Andean peaks to the deep Amazon – help us re-forge our connection to the natural world. It is also a cultural stew, where diverse peoples live side by side, negotiating modern life with humor and aplomb. Beyond that, the cuisine alone makes it worth the trip. Every return is rich and surprising.”",
        bodyAuthor: "Carolyn McCarthy",
        index: "04",
        jsActive: "",
        bgimage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/peru.jpg"
    },
    {
        databg: "#000000",
        dataType: "5to",
        titleName: "Portales Web 2",
        titleCat: "PERIODO 202303",
        bodyDesc: "“For me, Peru is the molten core of South America, a distillation of the oldest traditions and the finest building, weaving and art made by the most sophisticated cultures on the continent. In Peru the wildest landscapes – from frozen Andean peaks to the deep Amazon – help us re-forge our connection to the natural world. It is also a cultural stew, where diverse peoples live side by side, negotiating modern life with humor and aplomb. Beyond that, the cuisine alone makes it worth the trip. Every return is rich and surprising.”",
        bodyAuthor: "Carolyn McCarthy",
        index: "05",
        jsActive: "",
        bgimage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/iceland.jpg"
    },

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
        "servicios": servicios,
        "coolServices": coolServices
    }
}
//https://codepen.io/paulnoble/pen/yVyQxv
const pageContext = (page)=>{
    const context= {...handlerBarsContext[page], socialNetworks}
    return context;
}
export default pageContext;