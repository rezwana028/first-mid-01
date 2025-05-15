// --- Chillies  quantity Controls ---

const chilliesQty = document.getElementById("chillies-qty");
const chilliesTotal = document.getElementById("clilies-total");
const chilliesPrice = 59;

document.getElementById("clilies-plus").addEventListener("click", () => {
    chilliesQty.textContent = parseInt(chilliesQty.textContent) + 1;
    chilliesTotal.textContent = parseInt(chilliesQty.textContent) * chilliesPrice;
    updateTotal();
});

document.getElementById("clilies-minus").addEventListener("click", () => {
    let qty = parseInt(chilliesQty.textContent);
    if (qty > 1) {
        chilliesQty.textContent = qty - 1;
        chilliesTotal.textContent = (qty - 1) * chilliesPrice;
        updateTotal();
    }
});

document.getElementById("clilies-remove").addEventListener("click", () => {
    document.getElementById("clilies-total").closest(".flex").remove();
    updateTotal();
});

// --- Cardamom Controls ---
const cardamomQty = document.getElementById("siasid-qty");
const cardamomTotal = document.getElementById("siasid-total");
const cardamomPrice = 329;

document.getElementById("siasid-plus").addEventListener("click", () => {
    cardamomQty.textContent = parseInt(cardamomQty.textContent) + 1;
    cardamomTotal.textContent = parseInt(cardamomQty.textContent) * cardamomPrice;
    updateTotal();
});

document.getElementById("siasid-minus").addEventListener("click", () => {
    let qty = parseInt(cardamomQty.textContent);
    if (qty > 1) {
        cardamomQty.textContent = qty - 1;
        cardamomTotal.textContent = (qty - 1) * cardamomPrice;
        updateTotal();
    }
});

document.getElementById("siasid-remove").addEventListener("click", () => {
    document.getElementById("siasid-total").closest(".flex").remove();
    updateTotal();
});

//update total price
function updateTotal() {
    let total = 0;
    const chilliesTotal = document.getElementById("clilies-total");
    const cardamomTotal = document.getElementById("siasid-total");

    if (chilliesTotal) total += parseInt(chilliesTotal.textContent);
    if (cardamomTotal) total += parseInt(cardamomTotal.textContent);

    document.getElementById("388").textContent = total;
}


// Place Order → Open new page
document.getElementById("place-order").addEventListener("click", () => {
    window.open("Thank You");
});

// Initial total calculation
updateTotal();

