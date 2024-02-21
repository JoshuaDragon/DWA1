const provinces = [
    "Western Cape",
    "Gauteng",
    "Northern Cape",
    "Eastern Cape",
    "KwaZulu-Natal",
    "Free State",
  ];
  const names = [
    "Ashwin",
    "Sibongile",
    "Jan-Hendrik",
    "Sifso",
    "Shailen",
    "Frikkie",
  ];
  
  //Console each name
  names.forEach((name) => {
    console.log(name);
  });
  
  //console each province
  provinces.forEach((provinceName) => {
    console.log(provinceName);
  });
  
  //log both the province and name with their indeces.
  names.forEach((name, index) => {
    const province = provinces[index] || ""; // Use an empty string if the array is shorter
    console.log(` ${name}( ${province})`);
  });
  
  //Province to uppercase
  provinces.map((province) => {
    console.log(province.toUpperCase());
  });
  
  //Amount of characters in each name
  names.map((name) => {
    const nameLength = name.length;
    console.log(nameLength);
  });
  
  //Province in alphabetical Order
  const provincesSort = provinces.toSorted();
  console.log(provincesSort);
  
  //Provinces without Cape
  const provincesRemaining = provinces.filter(
    (province) => !province.includes("Cape")
  );
  
  console.log(provincesRemaining);
  
  //array of names that has 's'
  const hasSArray = names.map((name) => {
    const namesUppercase = name.toUpperCase();
    return namesUppercase.includes("S");
  });
  
  console.log(hasSArray);
  
  //combine name and province
  const combinedArray = provinces.reduce((result, province, index) => {
    result.push(`${province}: ${names[index]}`);
    return result;
  }, []);
  
  console.log(combinedArray);
  
  const products = [
    { product: "banana", price: "2" },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: "8" },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
  ];
  
  //one console
  products.forEach((product) => {
    console.log(product.product);
  });
  
  //second console
  const productsFilter = products.filter((product) => {
    return product.product.length <= 5;
  });
  
  console.log(productsFilter)
  
  
  // convert prices to a number
  const filteredAndMappedProducts = products.filter((product) => 
  typeof product.price === 'number' || !isNaN(parseFloat(product.price)))
    .map((product) => ({
      price: typeof product.price === 'number' ? product.price : parseFloat(product.price)
    }));
  
  const combinedPrice = filteredAndMappedProducts.reduce((total, product) => total + product.price, 0);
  
  console.log(combinedPrice);
  
  
  //combine all the products name
  const reducedProducts = products.reduce((result, product, index) => {
    const separator = index === 0 ? '' : ', '; // Add a comma and space except for the first item
    return `${result}${separator}${product.product}`;
  }, '');
  
  console.log(reducedProducts);
  
  const HighestAndLowest = products.reduce((result, product, index) => {
  
    const Highest =Math.max(product.price)
    console.log(Highest)
    const lowest = Math.min(product.price)
    console.log(lowest)
  
    const together =`highest${result}${Highest}. Lowest${result}${lowest}`
  }, ':');
  
  console.log(HighestAndLowest)