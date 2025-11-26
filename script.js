// 記錄次數
const counts = {
  add_to_cart: 0,
  begin_checkout: 0,
  purchase: 0
};

// 更新畫面
function updateCountDisplay() {
  document.getElementById("count-add-to-cart").textContent =
    counts.add_to_cart;
  document.getElementById("count-begin-checkout").textContent =
    counts.begin_checkout;
  document.getElementById("count-purchase").textContent = counts.purchase;
}

// 寫入 dataLayer 並更新畫面
function pushEcommerceEvent(eventName) {
  // 更新次數
  counts[eventName]++;
  updateCountDisplay();

  // 準備 GA4 事件 payload
  const payload = {
    event: eventName,
    ecommerce: {
      currency: "TWD",
      value: 980,
      items: [
        {
          item_id: "DEMO-001",
          item_name: "Oversize 帽T",
          price: 980,
          quantity: 1
        }
      ]
    }
  };

  // 推送到 dataLayer
  window.dataLayer.push(payload);

  console.log(" pushed → ", payload);
}

// 綁定按鈕事件
document
  .getElementById("btn-add-to-cart")
  .addEventListener("click", () => pushEcommerceEvent("add_to_cart"));

document
  .getElementById("btn-begin-checkout")
  .addEventListener("click", () => pushEcommerceEvent("begin_checkout"));

document
  .getElementById("btn-purchase")
  .addEventListener("click", () => pushEcommerceEvent("purchase"));

// 初始化
updateCountDisplay();