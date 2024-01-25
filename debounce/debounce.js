// debounce is not a js concept its a programming concept

const input = document.getElementById("input");

input.addEventListener("input", async(e) => {
    const inputValue=e.target.value
    const response=await fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
      const data= await response.json();
      console.log(data.products)
});
