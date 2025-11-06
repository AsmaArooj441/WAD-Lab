function toggleBulb() {
      let bulb = document.getElementById("bulbImage");
      if (bulb.src.includes("bulboff")) {
        bulb.src = "bulbon.jpg";
      } else {
        bulb.src = "bulboff.jpg";
      }
    }