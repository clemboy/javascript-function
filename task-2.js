const developers = [
  {
    name: "Vee",
    laptops: [
      "Dell"
    ],
    phones: [
      "Samsung",
      "Xiaomi"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Katlego",
    laptops: [
      "HP",
      "Samsung"
    ],
    phones: [
      "Apple",
      "Samsung",
      "Tecno",
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Rethabile",
    laptops: [
      "Samsung"
    ],
    phones: [
      "Samsung",
      "Huawei",
      "Poco"
    ],
    computerSetups: [
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Acer",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Gift",
    laptops: [],
    phones: [
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Acer",
        monitors: 3,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "HP",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Thokozile",
    laptops: [
      "Lenovo"
    ],
    phones: [
      "Apple"
    ],
    computerSetups: [
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 0,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  }
]

//a, Create an array with the name of all the developers

function printDeveloperNames(developersArray) {
  const developerNames = developersArray.map(developer => developer.name);
  console.log(developerNames);
}

printDeveloperNames(developers)

//b, Count how many total phones all the developers have

function countTotalPhones(developersArray) {
  let totalPhones = 0;

  developersArray.forEach(developer => {
    totalPhones += developer.phones.length;
  });

  return totalPhones;
}

const totalPhones = countTotalPhones(developers);
console.log(`Total phones all developers have: ${totalPhones}`);




//c, Count the number of incomplete setups i.e. setups that have 0 mice, keyboards, speakers, or monitors.

function countIncompleteSetups(developersArray) {
  let incompleteSetupsCount = 0;

  developersArray.forEach(developer => {
    developer.computerSetups.forEach(setup => {
      if (setup.monitors === 0 || setup.keyboards === 0 || setup.mice === 0 || setup.speakers === 0) {
        incompleteSetupsCount++;
      }
    });
  });

  return incompleteSetupsCount;
}

const incompleteSetups = countIncompleteSetups(developers);
console.log(`Number of incomplete setups: ${incompleteSetups}`);

//d, Check what is the most trusted phone brand

function findMostTrustedPhoneBrand(developersArray) {
  const phoneBrandCounts = developersArray.reduce((counts, developer) => {
    developer.phones.forEach(phone => {
      counts[phone] = (counts[phone] || 0) + 1;
    });
    return counts;
  }, {});

 
  let mostTrustedBrand = null;
  let maxCount = 0;

  Object.keys(phoneBrandCounts).forEach(phoneBrand => {
    if (phoneBrandCounts[phoneBrand] > maxCount) {
      mostTrustedBrand = phoneBrand;
      maxCount = phoneBrandCounts[phoneBrand];
    }
  });

  return mostTrustedBrand;
}

const mostTrustedPhoneBrand = findMostTrustedPhoneBrand(developers);
console.log(`The most trusted phone brand is: ${mostTrustedPhoneBrand}`);



//e, Check what phone brand is least trusted

const phoneBrandCounts = {};

developers.forEach(developer => {
  developer.phones.forEach(phone => {
    if (phoneBrandCounts[phone]) {
      phoneBrandCounts[phone]++;
    } else {
      phoneBrandCounts[phone] = 1;
    }
  });
});

let leastTrustedBrand = null;
let minCount = Infinity;

Object.keys(phoneBrandCounts).forEach(phoneBrand => {
  if (phoneBrandCounts[phoneBrand] < minCount) {
    leastTrustedBrand = phoneBrand;
    minCount = phoneBrandCounts[phoneBrand];
  }
});

console.log(`The least trusted phone brand is: ${leastTrustedBrand}`);



//f, Check how many people do not have a phone

let developersWithoutPhoneCount = 0;

for (let i = 0; i < developers.length; i++) {
  if (developers[i].phones.length === 0) {
    developersWithoutPhoneCount++;
  }
}

console.log(`Number of developers without a phone: ${developersWithoutPhoneCount}`);

//g, Check how many people do not have a laptop

let developersWithoutLaptopCount = 0;
developers.forEach(developer => {
  if (developer.laptops.length === 0) {
    developersWithoutLaptopCount++;
  }
});

console.log(`Number of developers without a laptop: ${developersWithoutLaptopCount}`);


//h, Check how many people do not have a computer setup (desktop)

let developersWithoutComputerSetupCount = 0;

developers.forEach(developer => {
  if (developer.computerSetups.length === 0) {
    developersWithoutComputerSetupCount++;
  }
});

console.log(`Number of developers without a computer setup: ${developersWithoutComputerSetupCount}`);

//i, Check which developer has the most total gadgets. In your answer provide the name as well as all the gadgets they have.

function calculateTotalGadgets(developer) {
  let totalGadgets = 0;

  // Add laptops count
  totalGadgets += developer.laptops.length;

  // Add phones count
  totalGadgets += developer.phones.length;

  // Add computer setups count
  totalGadgets += developer.computerSetups.reduce((total, setup) => {
    return total + setup.monitors + setup.keyboards + setup.mice + setup.speakers;
  }, 0);

  return totalGadgets;
}

// Initialize variables to track the developer with the most gadgets
let maxGadgets = 0;
let developerWithMostGadgets = null;

// Iterate through each developer to find the one with the most gadgets
developers.forEach(developer => {
  const totalGadgets = calculateTotalGadgets(developer);
  
  if (totalGadgets > maxGadgets) {
    maxGadgets = totalGadgets;
    developerWithMostGadgets = {
      name: developer.name,
      gadgets: {
        laptops: developer.laptops,
        phones: developer.phones,
        computerSetups: developer.computerSetups
      }
    };
  }
});

// Output the developer with the most gadgets and their gadgets
console.log(`Developer with the most gadgets is: ${developerWithMostGadgets.name}`);
console.log("Gadgets:");
console.log("- Laptops:", developerWithMostGadgets.gadgets.laptops);
console.log("- Phones:", developerWithMostGadgets.gadgets.phones);
console.log("- Computer Setups:");
developerWithMostGadgets.gadgets.computerSetups.forEach(setup => {
  console.log(`  - ${setup.brand}: Monitors ${setup.monitors}, Keyboards ${setup.keyboards}, Mice ${setup.mice}, Speakers ${setup.speakers}`);
});

//j, Check which developer has the most phones. In your answer provide the name and the phones they have

let maxPhones = 0;
let developerWithMostPhones = null;


developers.forEach(developer => {
  const numPhones = developer.phones.length;
  
  if (numPhones > maxPhones) {
    maxPhones = numPhones;
    developerWithMostPhones = {
      name: developer.name,
      phones: developer.phones
    };
  }
});


console.log(`Developer with the most phones is: ${developerWithMostPhones.name}`);
console.log("Phones:");
console.log(developerWithMostPhones.phones);

//k, Check which developer has the most computer setups. In your answer provide the name as well as their computer setups.

let maxSetups = 0;
let developerWithMostSetups = null;


developers.forEach(developer => {
  const numSetups = developer.computerSetups.length;
  
  if (numSetups > maxSetups) {
    maxSetups = numSetups;
    developerWithMostSetups = {
      name: developer.name,
      computerSetups: developer.computerSetups
    };
  }
});


console.log(`Developer with the most computer setups is: ${developerWithMostSetups.name}`);
console.log("Computer Setups:");
developerWithMostSetups.computerSetups.forEach(setup => {
  console.log(`- ${setup.brand}: Monitors ${setup.monitors}, Keyboards ${setup.keyboards}, Mice ${setup.mice}, Speakers ${setup.speakers}`);
});

//l, Check which developer has the most monitors (combining all their computer setups). In your answer provide their name and the monitor count.

let maxMonitors = 0;
let developerWithMostMonitors = null;

developers.forEach(developer => {
  let totalMonitors = 0;
  
  
  developer.computerSetups.forEach(setup => {
    totalMonitors += setup.monitors;
  });
  
  
  if (totalMonitors > maxMonitors) {
    maxMonitors = totalMonitors;
    developerWithMostMonitors = {
      name: developer.name,
      monitorCount: totalMonitors
    };
  }
});


console.log(`Developer with the most monitors is: ${developerWithMostMonitors.name}`);
console.log(`Monitor Count: ${developerWithMostMonitors.monitorCount}`);

