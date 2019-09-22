import os
folder = input('putanja foldera:')

datoteke = os.listdir(folder)

for datoteka in datoteke:
    ime_fajla, ekstenzija = datoteka.split('.')
    full_path = os.path.join(folder, datoteka)
    if ekstenzija in ['mp3','wav']:
        datoteka = ime_fajla.split(' ')[0]+'.'+ekstenzija
        new_path = os.path.join(folder, datoteka)
        os.rename(full_path, new_path)
