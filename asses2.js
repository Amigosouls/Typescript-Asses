function getDetails() {
    return (fetch('/laptop.json').then(function (out) { return out.json(); })
        .then(function (out) { return out; }));
}
getDetails().then(function (out) { return (console.log(out.map(function (val) { return "Product Id:".concat(val.id, "\n Product Name:").concat(val.pname, "\n Product Desc:").concat(val.pdescription, "\n Price:").concat(val.price, "\n"); }).toString())); });
function showFakeApi() {
    fetch('https://fakestoreapi.com/products')
        .then(function (res) { return res.json(); })
        .then(function (out) { return console.log(out); });
}
showFakeApi();
