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


output = ""
start = 61
for station_id in range(start, 81):
    station_info = scrape_station_data(station_id)
    if station_info:
        lat, long, name = station_info
        id = station_id - start + 1
        id = str(id).zfill(2)
        output += '{{ lat: {0}, lng: {1} }}, // T{2}: {3}\n'.format(lat, long, id, name)


print(output)
