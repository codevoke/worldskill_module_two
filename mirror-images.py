from PIL import Image
import os


def reverse_images(path: str) -> None:
    directory = path
    for filename in os.listdir(directory):
        if filename.endswith('.png') and "mirror_" not in filename:  # .png and not mirror_filename.png
            with Image.open(os.path.join(directory, filename)) as im:
                im.transpose(method=Image.FLIP_LEFT_RIGHT).save(os.path.join(directory, 'mirror_' + filename))


project_sprite_directories = [
    "animation/knight/attack1",
    "animation/knight/attack2",
    "animation/knight/block",
    "animation/knight/death",
    "animation/knight/idle",
    "animation/knight/run",
    "animation/knight/sprint",
    "animation/knight/walk"
]

for sprite_folder_path in project_sprite_directories:
    reverse_images(sprite_folder_path)
