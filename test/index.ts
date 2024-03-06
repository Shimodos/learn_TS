const dataFormatControl = {
  water: 200,
  electricity: 100,
};

function checkResulting(data: typeof dataFormatControl): boolean {
  const dataFromUser = {
    water: 200,
    electricity: 350,
  };

  if (data.electricity === dataFromUser.electricity && data.water === dataFromUser.water) {
    return true;
  } else return false;
}

const PI = 3.14;
let PICloned: typeof PI;
