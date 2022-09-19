/* let phoneData;
fetch('../../data.json')
.then(res => res.json())
.then(data => {
    phoneData = data
    displayData(data)
}) */


// fetch data
let phoneData;
const phoneDataS = async () => {

    const url = '../../data.json';
    try {
        const res = await fetch(url);
        const data = await res.json();
        phoneData = data
        displayData(data)
    } catch (error) {
        console.error(error)
    }
};
phoneDataS()

// show phone card in display
const displayData = (data) => {
    const cardContainer = document.getElementById('homepage-content');
    cardContainer.textContent = ''
    data?.forEach(product => {
        const { name, img, id, price } = product;

        const divContent = document.createElement('div');
        divContent.classList.add('card', 'w-96', 'bg-base-100', 'shadow-2xl')
        divContent.innerHTML = `
                <div class="p-4">
                    <figure>
                        <img class="rounded-md" src=${img} />
                    </figure>
                </div>
                <div class="card-body ">
                    <div class="flex items-center justify-between">
                        <h2 class="card-title">${name}</h2>
                        <div class="text-lg">
                            <span class="mr-2 cursor-pointer text-red-400"><i class="fa fa-heart"></i></span>
                            <span class="cursor-pointer text-red-700"><i class="fas fa-minus-square"></i></span>
                        </div>
                    </div>
                    <h2 class="card-title">Price: ${price}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="flex items-center justify-between ">
                        <!-- The button to open modal -->
                        <label onclick="handleModal('${id}')" for="my-modal-3" class="btn modal-button btn-outline btn-primary w-[45%]">
                            <i class="fas fa-info-circle mr-2"></i>
                            Details
                        </label>
                        <button onclick="handleBuyNow('${id}')" class="btn btn-outline btn-secondary w-[45%]">
                            <i class="fas fa-sack-dollar mr-2"></i>
                            Buy Now
                        </button>
                    </div>
                </div>
        `

        cardContainer.appendChild(divContent)
    })
};






//show product details in modal
const handleModal = (id) => {
    const product = phoneData.find(product => product.id === id);
    const { name, price, img } = product;
    const modalContent = document.getElementById('modal-info');
    modalContent.innerHTML = `
    <img class="w-full h-[350px] rounded-md" src=${img}
    alt="" srcset="">
    <h1 class="text-xl font-bold"><span class="text-yellow-500">Name : ${name}</span> </h1>
    <h1 class="font-bold"><span class="text-yellow-500 ">Price : ${price}</span> </h1>
    <p class="text-lg mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        fugit consequuntur ab,
        libero officia expedita illum deleniti delectus praesentium doloremque. Maxime sint
        delectus molestias iste.</p>
    `
};

// increase quantity value
let count = 0;
let price = 0;
// buy now click function to cart added
const handleBuyNow = (id) => {
    count++
    const product = phoneData.find(product => product.id === id);
    console.log(product)
    const { name, price, img } = product;
    const cartItems = document.getElementById('cart-items');
    const div = document.createElement('div');
    div.classList.add(
        'rounded-md',
        'flex',
        'items-center',
        'justify-between',
        'p-2',
        'border-2',
        'border-purple-400'
        )
    div.innerHTML = `
        <div class="flex items-center">
            <img class=" h-[35px] w-[35px] rounded-sm"
                src=${img} alt="" srcset="">
            <span class="ml-3">${name.slice(0, 10) + '...'}</span>
        </div>
        <h3>1</h3>
        <button class="text-red-600"><i class="fas fa-trash mr-1"></i></button>
    `
    cartItems.appendChild(div)

        // set count quantity
        let setCount = document.getElementById('badge-count');
        setCount.innerText = count
        document.getElementById('product-count').innerText = count

};

const clearCart =() => {
    const cartItems = document.getElementById('cart-items');
    cartItems.textContent = ''
};


















