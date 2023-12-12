function distanceFromHqInBlocks(pickupLocation) {
    // Assuming Scuber's headquarters is at block 42
    const hqLocation = 42;
  
    // Calculate the distance in blocks
    const distance = Math.abs(pickupLocation - hqLocation);
  
    return distance;
  }
  
  // Example usage:
  console.log(distanceFromHqInBlocks(36)); // Output: 6
  console.log(distanceFromHqInBlocks(50)); // Output: 8
  
  // Assuming the number of feet per block is 264 (just as an example)


function distanceFromHqInBlocks(pickupLocation) {
  // Assuming Scuber's headquarters is at block 42
  const hqLocation = 42;

  // Calculate the distance in blocks
  const distance = Math.abs(pickupLocation - hqLocation);

  return distance;
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feet = blocks * feetPerBlock;
  
  return feet;
}

// Example usage:
console.log(distanceFromHqInFeet(36)); // Output: 1584
console.log(distanceFromHqInFeet(50)); // Output: 2112


// Assuming the number of feet per block is 264 (as mentioned)
const feetPerBlock = 264;

function distanceTravelledInFeet(startBlock, endBlock) {
  // Calculate the distance in blocks
  const distanceInBlocks = Math.abs(endBlock - startBlock);

  // Calculate the distance in feet
  const distanceInFeet = distanceInBlocks * feetPerBlock;

  return distanceInFeet;
}

// Example usage:
console.log(distanceTravelledInFeet(34, 45)); // Output: 2904
console.log(distanceTravelledInFeet(50, 38)); // Output: 3168

function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0; // The first 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      // Price for distance between 400 and 2000 feet (excluding the first 400)
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      // Flat fare for distance over 2000 feet and under 2500 feet
      return 25;
    } else {
      // Scuber does not allow rides over 2500 feet
      return 'cannot travel that far';
    }
  }
  
  // Example usage:
  console.log(calculatesFarePrice(34, 45)); // Output: 228
  console.log(calculatesFarePrice(50, 38)); // Output: 25
  console.log(calculatesFarePrice(34, 60)); // Output: cannot travel that far
  

