import os
import numpy as np
import torch
import torchvision.transforms as transforms
from PIL import Image
from torch.utils.data import Dataset

class DogBehaviorDataset(Dataset):
    def __init__(self, data_dir, split, input_shape, transform=None):
        self.data_dir = data_dir
        self.split = split
        self.input_shape = input_shape
        self.transform = transform
        self.image_paths, self.labels = self._load_data()

    def __len__(self):
        return len(self.image_paths)

    def __getitem__(self, idx):
        image_path = self.image_paths[idx]
        label = self.labels[idx]
        image = Image.open(image_path).convert('RGB')
        if self.transform:
            image = self.transform(image)
        return image, label

    def _load_data(self):
        if self.split == 'train':
            data_file = os.path.join(self.data_dir, 'train_data.txt')
        elif self.split == 'test':
            data_file = os.path.join(self.data_dir, 'test_data.txt')
        else:
            raise ValueError('Invalid split')

        with open(data_file, 'r') as f:
            lines = f.read().splitlines()

        image_paths = []
        labels = []
        for line in lines:
            image_path, label = line.split()
            image_paths.append(os.path.join(self.data_dir, image_path))
            labels.append(int(label))

        return image_paths, torch.tensor(labels, dtype=torch.float32)
