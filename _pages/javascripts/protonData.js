async function getProton() {
  // Set up the URL for the text file
  const url = "https://services.swpc.noaa.gov/text/ace-swepam.txt";
  
  // Fetch the text file
  const response = await fetch(url);
  const data = await response.text();
  
  // Split the text file into lines
  const lines = data.split("\n");

  // Extract the most recent solar wind data from the second-to-last line
  const lastLine = lines[lines.length - 2];
  const fields = lastLine.split(" ");

  // Extract the solar wind speed, density, and temperature from the fields
  const s = fields[15];
  const density = fields[23];
  const speed = fields[29];
  const temperature = fields[34];

  // Returning values
  return { s, speed, density, temperature };
}

async function printProtonValues() {
  // Call the getProton function to retrieve the values
  const { s, speed, density, temperature } = await getProton();

  if (s == 0 || s == 1) {
    // if s<2 and then print if true
    console.log("Error level: ", s)
    console.log("Density:", density);
    console.log("Wind Speed:", speed);
    console.log("Temperature:", temperature);
  } else {
    // if s>2 and print error if true
    console.log("Error level is greater than 1, please try again later!")
  }
  
}

// Call the printProtonValues function to trigger the printing
printProtonValues();
