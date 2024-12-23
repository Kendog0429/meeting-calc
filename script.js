document.getElementById('calculateButton').addEventListener('click', function() {
    // Get values for Person 1
    const name1 = document.getElementById('name1').value;
    const age1 = parseInt(document.getElementById('age1').value);
    const birthplace1 = document.getElementById('birthplace1').value;
    const race1 = document.getElementById('race1').value;
  
    // Get values for Person 2
    const name2 = document.getElementById('name2').value;
    const age2 = parseInt(document.getElementById('age2').value);
    const birthplace2 = document.getElementById('birthplace2').value;
    const race2 = document.getElementById('race2').value;
  
    // Ensure both persons have entered their details
    if (name1 && age1 && birthplace1 && race1 && name2 && age2 && birthplace2 && race2) {
      const chances = calculateMeetingChances(age1, birthplace1, race1, age2, birthplace2, race2);
      document.getElementById('result').innerText = 
        `The likelihood of ${name1} meeting ${name2} is ${chances}% based on your details!`;
    } else {
      document.getElementById('result').innerText = 'Please fill in all fields for both persons!';
    }
  });
  
  function calculateMeetingChances(age1, birthplace1, race1, age2, birthplace2, race2) {
    let chance = 50; // Start with a base chance of 50%
  
    // Compare ages
    if (Math.abs(age1 - age2) <= 5) {
      chance += 10;  // If ages are within 5 years, increase chance
    } else if (Math.abs(age1 - age2) > 20) {
      chance -= 10;  // If ages differ by more than 20 years, decrease chance
    }
  
    // Compare birthplaces
    if (birthplace1.toLowerCase() === birthplace2.toLowerCase()) {
      chance += 15;  // Same birthplace increases the chance
    }
  
    // Compare races (simplified for this example, could be more detailed)
    if (race1.toLowerCase() === race2.toLowerCase()) {
      chance += 5;  // Same race adds a small boost
    } else {
      chance -= 5;  // Different races decrease the chance slightly
    }
  
    // Ensure the chance is between 0% and 100%
    if (chance > 100) chance = 100;
    if (chance < 0) chance = 0;
  
    return chance;
  }
  
  