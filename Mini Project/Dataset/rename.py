import os

folder_path = 'E:/work/modular/Artificial Intelligence for Media/assignment/Dataset-/Dog_barking'  
new_prefix = 'Dog_barking_'
start_index = 1

for i, filename in enumerate(os.listdir(folder_path)):
    # get the full path of the file
    filepath = os.path.join(folder_path, filename)
    # check if the file is a regular file (not a directory)
    if os.path.isfile(filepath):
        # construct the new filename by adding the prefix and the index
        new_filename = f"{new_prefix}{start_index+i:03}.jpg" # change the file extension as needed
        # construct the full path of the new file
        new_filepath = os.path.join(folder_path, new_filename)
        # rename the file
        os.rename(filepath, new_filepath)
