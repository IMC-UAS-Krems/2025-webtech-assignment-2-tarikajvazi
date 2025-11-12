// Products pre-added as a list of objects

const products = [
    {
        product_id: 1,
        product_name: "Mouse",
        product_type: "Device",
        product_price: 20,
        product_image: "./imgs/mouse.png",
        product_description: "Hardly used device"
    },
    {
        product_id: 2,
        product_name: "Keyboard",
        product_type: "Device",
        product_price: 40,
        product_image: "./imgs/keyboard.png",
        product_description: "Developer's best friend"
    },
    {
        product_id: 3,
        product_name: "Headphones",
        product_type: "Device",
        product_price: 35,
        product_image: "./imgs/headphones.png",
        product_description: "Great bluetooth headphones"
    },
    {
        product_id: 4,
        product_name: "Laptop",
        product_type: "Device",
        product_price: 300,
        product_image: "./imgs/laptop.png",
        product_description: "Newest laptop on the market"
    },
    {
        product_id: 5,
        product_name: "Coffe",
        product_type: "Beverage",
        product_price: 3,
        product_image: "./imgs/coffee.png",
        product_description: "A refuel for some, nothing for others"
    },
    {
        product_id: 6,
        product_name: "Tea",
        product_type: "Beverage",
        product_price: 2,
        product_image: "./imgs/tea.png",
        product_description: "Great to sip while resting"
    },
    {
        product_id: 7,
        product_name: "Ice Tea",
        product_type: "Beverage",
        product_price: 4,
        product_image: "./imgs/icetea.png",
        product_description: "Fuel for creating this website"
    },
    {
        product_id: 8,
        product_name: "Water",
        product_type: "Beverage",
        product_price: 1,
        product_image: "./imgs/water.png",
        product_description: "A basic need for every non-/developer"
    },
    {
        product_id: 9,
        product_name: "Mealbox",
        product_type: "Essential",
        product_price: 15,
        product_image: "./imgs/mealbox.png",
        product_description: "One meal a day is enough to survive"
    },
    {
        product_id: 10,
        product_name: "Blanket",
        product_type: "Essential",
        product_price: 25,
        product_image: "./imgs/blanket.png",
        product_description: "Survive the cold days in/outside"
    },
    {
        product_id: 11,
        product_name: "Pillow",
        product_type: "Essential",
        product_price: 18,
        product_image: "./imgs/pillow.png",
        product_description: "Rest your head comfortably"
    },
    {
        product_id: 12,
        product_name: "Mattress",
        product_type: "Essential",
        product_price: 80,
        product_image: "./imgs/mattress.png",
        product_description: "This is a luxury only given to senior developers"
    }
];

// Display & Filters for products (If we could use jQuery it would be easier (and more beautiful))

// It didnt work without DOMContentLoaded - They need to load before displaying and selecting them
document.addEventListener('DOMContentLoaded', function () {

    for (let product of products) {

        let type = "";

        switch (product.product_type) {
            case "Device":
                type = "success";
                break;
            case "Beverage":
                type = "info";
                break;
            case "Essential":
                type = "warning";
                break;
        }

        // Main div (card)
        let card = document.createElement("div");
        card.setAttribute("style", "width: 18rem");
        card.className = "card " + product.product_type;
        // `` used these for being able to put code inside and not create elements one by one
        card.innerHTML = `<img src="${product.product_image}" class="card-img-top" style="object-fit: contain; height: 200px" alt="${product.product_name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.product_name} <span class="badge text-bg-${type}">${product.product_type}</span></h5>
                            <p class="card-text">${product.product_description}</p>
                            <button href="#" class="btn btn-primary mt-auto" onclick="addToCart('${product.product_name}', '${product.product_type}', ${product.product_price}, '${product.product_image}')"><svg style="position: relative; top: -2px; left: -6px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                            </svg>Add to cart</button>
                        </div>`

        document.getElementById("card-container").appendChild(card);

    }

    // Select the buttons-radios that need to have a onclick
    // I used addEventListener instead of creating new functions
    // The logic is to first display all and then hide the needed through a parameter

    const all = document.getElementById("btnradio1");
    const devices = document.getElementById("btnradio2");
    const beverages = document.getElementById("btnradio3");
    const essentials = document.getElementById("btnradio4");

    function hideProducts(className) {
        const products = document.getElementsByClassName(className);
        for (let product of products) {
            product.classList.add("d-none");
        }
    }

    function showAllProducts() {
        const allProducts = document.getElementsByClassName('card');
        for (let product of allProducts) {
            product.classList.remove("d-none");
        }
    }

    all.addEventListener("click", function () {
        showAllProducts();
    });

    devices.addEventListener("click", function () {
        showAllProducts();
        hideProducts("Beverage");
        hideProducts("Essential");
    });

    beverages.addEventListener("click", function () {
        showAllProducts();
        hideProducts("Device");
        hideProducts("Essential");
    });

    essentials.addEventListener("click", function () {
        showAllProducts();
        hideProducts("Device");
        hideProducts("Beverage");
    });
});

// _____________________________________________________________________

// Add to cart functionalities
// I am not using ID and instead almost all parameters because it is not a large project
// So it is easier for me to just loop through the cart array than retreive the information as I do in PHP for example

cart = []

function addToCart(name, type, price, image) {
    // Check if it is in cart, if yes no need to add other, just increment quantity (default is 1)
    alreadyInCart = false

    for (let item of cart) {
        if (item.product_name == name) {
            item.quantity++
            alreadyInCart = true
            console.log("Added +1 to " + item.product_name)
        }
    }

    if (!alreadyInCart) {
        cart.push({
            product_name: name,
            product_type: type,
            product_price: price,
            product_image: image,
            quantity: 1
        })
    }

    document.getElementById("toast-container").innerHTML += `<div class="toast show bg-success text-white" data-bs-autohide="false" role="alert" aria-live="assertive"
                aria-atomic="true">
                <div class="toast-header bg-success text-white">
                    <strong class="me-auto">HHF - Helpless & Hopeless</strong>
                    <small class="text-white-50">just now</small>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"
                        aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    <b>${name}</b> was added to cart (+${price}.00€)
                </div>
            </div>`;

    // count items dynamically (with length of array it is not possible bcs some product may have quantity 1+)

    item_count = 0;
    for (let item of cart) {
        item_count += item.quantity;
    }
    document.getElementById("items-in-cart").innerHTML = item_count

    console.log(name + " added")
    console.log(cart)
}