
const  loadData = () =>{
    fetch('../product.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("products", JSON.stringify(data));

    })

}
loadData();
