const cart = [];

lista = [
    {
        "nome": "Monsenhor branco com rosas champanhe",
        "tamanho": {
            "p": 150,
            "m": 250,
            "g": 400
        }
    },
    {
        "nome": "Monsenhor branco com rosas brancas",
        "tamanho": {
            "p": 150,
            "m": 250,
            "g": 400
        }
    },
    {
        "nome": "Buquê de girassóis",
        "tamanho": {
            "p": 150
        }
    },
    {
        "nome": "Buquê simples de rosas vermelhas",
        "tamanho": {
            "p": 70
        }
    },
    {
        "nome": "Buque luxo de rosas vermelhas com 30 rosas",
        "tamanho": {
            "p": 150
        }
    },
    {
        "nome": "Buquê top de rosas vermelhos com 50 rosas e Gpison fila",
        "tamanho": {
            "p": 250
        }
    },
    {
        "nome": "Buquê simples de rosas amarelas",
        "tamanho": {
            "p": 70
        }
    },
    {
        "nome": "Buquê simples de rosas champanhe",
        "tamanho": {
            "p": 70
        }
    },
    {
        "nome": "Mix colorido",
        "tamanho": {
            "p": 80
        }
    },
    {
        "nome": "Buquê simples de flores do campo",
        "tamanho": {
            "p": 80
        }
    },
    {
        "nome": "Buquê luxo de flores do campo",
        "tamanho": {
            "p": 150
        }
    }
]

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

    let message = `🌸 *Novo Pedido!* 🌸%0A%0A`;
    message += `👤 *Cliente:* ${name}%0A📞 *Telefone:* ${phone}%0A🏠 *Endereço:* ${address}%0A%0A`;
    message += `🛍 *Itens do Pedido:*%0A`;

    cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name} (Tamanho: ${item.size.toUpperCase()}) - R$ ${(item.price * item.quantity).toFixed(2)}%0A`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `%0A💰 *Total:* R$ ${total.toFixed(2)}%0A%0A`;

    // Finaliza a mensagem
    message += `🕒 *Aguardamos a confirmação do pedido!*\n`;

    // Envia a mensagem pelo WhatsApp
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
