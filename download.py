import requests
import os
from bs4 import BeautifulSoup
from urllib.parse import urljoin

url = 'https://www.istockphoto.com/search/2/image?family=creative&phrase=dog%20barking'  # Replace with the URL of the website you want to download images from
output_dir = 'E:\\work\\trashers\\test'  # Replace with the directory where you want to save the images

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
img_tags = soup.find_all('img')

for img_tag in img_tags:
    img_url = img_tag.get('src')
    if img_url:
        img_url = urljoin(url, img_url)
        response = requests.get(img_url)
        if response.status_code == 200:
            filename = os.path.join(output_dir, img_url.split('/')[-1])
            with open(filename, 'wb') as f:
                f.write(response.content)
                print(f'Saved {filename}')
        else:
            print(f'Error downloading {img_url}: status code {response.status_code}')
