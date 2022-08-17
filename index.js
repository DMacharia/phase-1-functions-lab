function distanceFromHqInBlocks(start) {
  const scuberHQ = 42;
  return Math.abs(start - scuberHQ);
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(start1) {
  //1 block = 264feet
  return distanceFromHqInBlocks(start1) * 264;
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
  let feetTravelled = distanceTravelledInFeet(start, destination);
  if (feetTravelled <= 400) {
    return 0;
  } else if (feetTravelled < 2000) {
    return (feetTravelled - 400) * 0.02;
  } else if (feetTravelled > 2500) {
    return "cannot travel that far";
  } else {
    return 25;
  }
}

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);
