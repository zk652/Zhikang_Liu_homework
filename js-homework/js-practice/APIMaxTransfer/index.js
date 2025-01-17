const API_URL = "https://jsonmock.hackerrank.com/api/transactions";

async function maximumTransfer(name, city) {
  let page = 1;
  let maxCredit = 0;
  let maxDebit = 0;

  while (true) {
    const res = await fetch(`${API_URL}?page=${page}`);
    const data = await res.json();
    for (const transaction of data.data) {
      if (transaction.userName === name && transaction.location.city === city) {
        const amount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, ""));
        if (transaction.txnType === "credit") {
          maxCredit = Math.max(maxCredit, amount);
        } else {
          maxDebit = Math.max(maxDebit, amount);
        }
      }
    }

    if (page >= data.total_pages) break;

    page++;
  }
  return [maxCredit, maxDebit];
}

(async () => {
  try {
    const name = "John Oliver";
    const city = "Bourg";
    const res = await maximumTransfer(name, city);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
})();
