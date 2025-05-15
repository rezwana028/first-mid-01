// --- Chillies  quantity Controls ---

const chilliesQtyEl = document.getElementById("chillies-qty");
const chilliesTotalEl = document.getElementById("clilies-total");
const chilliesPrice = 59;

document.getElementById("clilies-plus").addEventListener("click", () => {
    chilliesQtyEl.textContent = parseInt(chilliesQtyEl.textContent) + 1;
    chilliesTotalEl.textContent = parseInt(chilliesQtyEl.textContent) * chilliesPrice;
    updateTotal();
});

document.getElementById("clilies-minus").addEventListener("click", () => {
    let qty = parseInt(chilliesQtyEl.textContent);
    if (qty > 1) {
        chilliesQtyEl.textContent = qty - 1;
        chilliesTotalEl.textContent = (qty - 1) * chilliesPrice;
        updateTotal();
    }
});

document.getElementById("clilies-remove").addEventListener("click", () => {
    document.getElementById("clilies-total").closest(".flex").remove();
    updateTotal();
});

// --- Cardamom Controls ---
const cardamomQtyEl = document.getElementById("siasid-qty");
const cardamomTotalEl = document.getElementById("siasid-total");
const cardamomPrice = 329;

document.getElementById("siasid-plus").addEventListener("click", () => {
    cardamomQtyEl.textContent = parseInt(cardamomQtyEl.textContent) + 1;
    cardamomTotalEl.textContent = parseInt(cardamomQtyEl.textContent) * cardamomPrice;
    updateTotal();
});

document.getElementById("siasid-minus").addEventListener("click", () => {
    let qty = parseInt(cardamomQtyEl.textContent);
    if (qty > 1) {
        cardamomQtyEl.textContent = qty - 1;
        cardamomTotalEl.textContent = (qty - 1) * cardamomPrice;
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


// --- Place Order: redirect to thank-you page ---
document.getElementById("place-order").addEventListener("click", () => {
    window.location.href = "Thank You For Shopping With Us !";
});

// Initial total calculation
updateTotal();

