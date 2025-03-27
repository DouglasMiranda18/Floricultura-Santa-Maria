
const cart = [];
function addToCart(name, price) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}
function updateCartUI() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<li class='cart-item'>
                    ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}
                    <button onclick='removeFromCart(${index})'>🗑</button>
                </li>`;
        total += item.price * item.quantity;
    });
    totalPrice.innerHTML = `<strong>Total:</strong> R$ ${total.toFixed(2)}`;
}
function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}
function sendOrder() {
    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const address = document.getElementById("customerAddress").value;
    let message = `Pedido de ${name}%0AEndereço: ${address}%0AItens:`;
    cart.forEach(item => {
        message += `%0A- ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`;
    });
    message += `%0ATotal: R$ ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`;
    window.open(`https://wa.me/5581986103152?text=${message}`, '_blank');
}
function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
}

let currentIndex = 0;
const images = document.querySelectorAll(".carousel img");

function showSlide(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// Alterna automaticamente a cada 3 segundos
setInterval(nextSlide, 3000);

lista = [
    {
        "nome": "Coroa de flores",
        "tamanho": {
            "p": 150,
            "m": 200,
            "g": 250
        }
    },
    {
        "nome": "Flor 2",
        "tamanho": {
            "p": 150,
            "m": 200,
            "g": 250
        }
    },
    {
        "nome": "Flor 3",
        "tamanho": {
            "p": 150,
            "m": 200,
            "g": 250
        }
    },
    {
        "nome": "Flor 4",
        "tamanho": {
            "p": 150,
            "m": 200,
            "g": 250
        }
    }
]
function getPrice(id, tipo) {
    var tamanho = document.getElementById(id).value

    const flor = lista.find(item => item.nome === tipo);

    if (!flor) {
        return "Flor não encontrada";
    }

    const preco = flor.tamanho[tamanho];

    var id_span = `${id}-price`
    var span = document.getElementById(id_span)

    span.innerText = ''
    span.innerText = preco

    return preco ? preco : "Tamanho inválido";
}