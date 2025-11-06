let softwareHouses = ["Abrisoft", "10Pearls", "NetSol", "Techlogix", "Belitsoft"];
console.log("Original Array:", softwareHouses);
softwareHouses.shift();
console.log("After removing first name:", softwareHouses);
softwareHouses.splice(2, 1, "Arpatech");  
console.log("After replacing middle name:", softwareHouses);
softwareHouses.push("Qbatch");
console.log("After adding new name at the end:", softwareHouses);
