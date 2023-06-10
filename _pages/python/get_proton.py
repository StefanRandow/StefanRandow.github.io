def get_proton():
		# Set up the URL for the text file
		url = "https://services.swpc.noaa.gov/text/ace-swepam.txt"

		# Download the text file
		response = pyodide.http.open_url(url)
		data = response.read()

		# Split the text file into lines
		lines = data.split("\n")

		# Extract the most recent solar wind data from the second-to-last line
		last_line = lines[-2]
		fields = last_line.split()

		# Extract the solar wind speed, density, and temperature from the fields
		s = float(fields[6])
		density = float(fields[7])
		speed = float(fields[8])
		temperature = fields[9]

		# Returning values
		return s, speed, density, temperature

	s, speed, density, temperature = get_proton()
	print(f"The Current Error level is {s}, the current solar wind speed is {speed}km/s the current solar wind density is {density}p/cc and the solar wind temperature is currently {temperature}K.")