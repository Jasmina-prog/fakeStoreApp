const card = document.querySelector('.card');
const container = document.querySelector('.card-container')
const container2 = document.querySelector('.card-container2')
const allFilter = document.querySelector('.all');
const electronicFilter = document.querySelector('.electronic');
const womensFilter = document.querySelector('.womens');
const jeweleryFilter = document.querySelector('.jewelery');
const mensFilter = document.querySelector('.mens');
const btn = document.querySelector('button');
const productCounter = document.querySelector('.amount-products')

async function storeData(link){
    const response = await fetch(link);
    let data = await response.json();
    // console.log(data);
    container.innerHTML = '';
    data.forEach((item)=>{
        container.innerHTML += `   
        <div class = "card">
        <img src=" ${item.image}">
        <p> ${item?.title}</p>
        <p> ${item?.price} $</p>
        <button onclick="btnClickBuy(${item?.id})" class="buyBtn">Buy</button>
        </div>         
        `
    })
    
    function func(something){
        let filtered = data.filter((item)=>item.category == something);
        container.innerHTML = '';
        filtered.forEach((item)=>{
        container.innerHTML += `   
        <div class = "card">
        <img src=" ${item?.image}">
        <p> ${item?.title}</p>
        <p> ${item?.price} $</p>
        <button onclick="btnClickBuy(${item?.id})" class="buyBtn">Buy</button>
        </div>         
        `
    })   
    }

    // func()
  
    electronicFilter.addEventListener('click', ()=>func("electronics"))
    jeweleryFilter.addEventListener('click', ()=>func("jewelery"))
    womensFilter.addEventListener('click', ()=>func("women's clothing"))
    mensFilter.addEventListener('click', ()=>func("men's clothing"))
    allFilter.addEventListener('click', ()=>storeData('https://fakestoreapi.com/products'))
    
    
}

storeData('https://fakestoreapi.com/products')



let storageArr = [];


function btnClickBuy(id){
    if(!storageArr.includes(id)){
        storageArr.push(id)
        localStorage.setItem('productName', JSON.stringify(storageArr))
        console.log(localStorage);
    }

    productCounter.textContent = storageArr.length;
    productCounter.style.display = "block"
    
}


// nega productCounter btnClickBuydan tashqarida ishlamayapti?

function childClickRemove(id){
    storageArr.pop(id)
}