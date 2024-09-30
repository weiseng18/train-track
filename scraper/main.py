import requests
from bs4 import BeautifulSoup


def scrape_station_data(station_id):
    url = f'https://www.metrocazar.com/php/index_tokyo.php?action=showStation&from={station_id}'
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')

        # Extract station name, latitude, and longitude
        station_name = soup.find('h2', string='Station').find_next('h2').text.strip()

        # Seems like the source swapped longitude and latitude
        latitude = soup.find('h2', string='Longitude').find_next('h2').text.strip()
        longitude = soup.find('h2', string='Latitude').find_next('h2').text.strip()

        return (float(latitude), float(longitude), station_name)
    else:
        print(f"Failed to retrieve data for station {station_id}: {response.status_code}")
        return None


def main():
    # Note that the entries go from index 0 to 213
    start = 0
    end = 213
    output_file_name = 'data-{0}-to-{1}'.format(start, end)

    output = "[\n"

    for station_id in range(start, end + 1):
        station_info = scrape_station_data(station_id)
        if station_info:
            lat, long, name = station_info
            output += '  {{ lat: {0}, lng: {1}, name: "{2}" }},\n'.format(lat, long, name)

    output += "]\n"

    with open(output_file_name, 'w') as file:
        file.write(output)


main()
