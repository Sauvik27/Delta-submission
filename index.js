const prices = {
    "Apple": 35,
    "Banana": 20,
    "Melon": 50,
    "Lime": 15
  };
  
  const items = document.querySelectorAll('.item');
  
  items.forEach(item => {
    const incrementBtn = item.querySelector('.increment');
    const decrementBtn = item.querySelector('.decrement');
    const countSpan = item.querySelector('.count');
    const itemName = item.querySelector('.item-name').textContent;
  
    let count = 0;
  
    incrementBtn.addEventListener('click', () => {
      count++;
      countSpan.textContent = count;
      calculateTotal();
    });
  
    decrementBtn.addEventListener('click', () => {
      if (count > 0) {
        count--;
        countSpan.textContent = count;
        calculateTotal();
      }
    });
  });
  
  function calculateTotal() {
    let total = 0;
    let melonCount = 0;
    let limeCount = 0;
  
    items.forEach(item => {
      const itemName = item.querySelector('.item-name').textContent;
      const count = parseInt(item.querySelector('.count').textContent);
  
      if (itemName === 'Melon') {
        melonCount += count;
        total += Math.ceil(melonCount / 2) * prices[itemName];
      } else if (itemName === 'Lime') {
        limeCount += count;
        total += Math.floor(limeCount / 3) * (2 * prices[itemName]) + (limeCount % 3) * prices[itemName];
      } else {
        total += count * prices[itemName];
      }
    });
  
    document.getElementById("total").textContent = total + " rs";
  }
  