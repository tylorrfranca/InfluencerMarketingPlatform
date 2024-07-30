# install from
# https://github.com/UB-Mannheim/tesseract/wiki
# Add to path  C:\Users\USER\AppData\Local\Tesseract-OCR or C:\Program Files\Tesseract-OCR
# pip install pytesseract

from PIL import Image
import pytesseract
import numpy as np

def ImageToText(filename):
  img1 = np.array(Image.open(filename))
  text = pytesseract.image_to_string(img1)
  return text

def AbbreviationToText(text):
  for line in text.split('\n'):
    for abreviation, fullName in abbreviation_dict.items():
      if abreviation in line:
        line = line.replace(abreviation,fullName)
    if line.isalnum() == False:
      listIngedients.append(line)


abbreviation_dict = {
  # Going to be a long list...
    "Lorem ipsum": "Chicken",
}

listIngedients = []
filename = 'imageone.png'

text = ImageToText(filename)
AbbreviationToText(text)

