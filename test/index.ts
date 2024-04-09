const myCar = {
  fule: '60%',
  open: true,
  freeSeats: 4,
  isOpen() {
    console.log(this.fule);
    return this.open ? 'open' : 'closed';
  },
};

function closeCare(car: typeof myCar) {
  car.open = false;
  console.log('Car is closed');
  return car;
}

function addFuel(car: typeof myCar) {
  car.fule = '100%';
  console.log('Car is full');
  return car;
}

addFuel(closeCare(myCar)).isOpen();
