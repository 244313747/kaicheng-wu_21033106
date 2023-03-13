import os
import csv

# set the directory where the image files are stored
directory = 'E:/work/modular/Artificial Intelligence for Media/assignment/Dataset - 21033106'

# create a list to store the data
data = []

# loop through each folder in the directory
for folder in os.listdir(directory):
    folder_path = os.path.join(directory, folder)
    # loop through each file in the folder
    for file in os.listdir(folder_path):
        # add the file name and folder name to the data list
        data.append((file, folder))

# write the data to a CSV file
with open('image_data.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Image', 'Folder']) # write the header row
    writer.writerows(data) # write the data rows
