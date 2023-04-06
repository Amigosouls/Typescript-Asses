interface Laptop{
    id : string;
    pname:string;
    pdescription:string;
    price:string;
}

function getDetails():Promise<Laptop[]>{
    return(fetch('/laptop.json').then(out=>out.json())
    .then(out=>{return out as Laptop[]})
    )

}

getDetails().then(out=>(console.log(out.map(val=>`Product Id:${val.id}\n Product Name:${val.pname}\n Product Desc:${val.pdescription}\n Price:${val.price}\n`).toString())))

function showFakeApi(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(out=>console.log(out))

}
showFakeApi()