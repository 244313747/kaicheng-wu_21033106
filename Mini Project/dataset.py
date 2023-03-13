import os

from torch.utils.data import Dataset

class DogBehaviorDataset(Dataset):
    def __init__(self, data_dir, split, input_shape, transform=None):
        self.image_list = []
        self.class_dict = {'barking': 0, 'not_barking': 1}

        with open(os.path.join(data_dir, split + '_data.txt')) as f:
            for line in f:
                if line:
                    image_path, label_name = line.strip().split()
                    try:
                        label = self.class_dict[label_name]
                    except KeyError:
                        print(f"KeyError: label_name '{label_name}' not found in class_dict")
                        continue
                    self.image_list.append((image_path, label))

        self.input_shape = input_shape
        self.transform = transform

    def __len__(self):
        return len(self.image_list)

    def __getitem__(self, idx):
        image_path, label = self.image_list[idx]
        img = Image.open(image_path).convert('RGB')
        img = self.transform(img)
        return img, label
