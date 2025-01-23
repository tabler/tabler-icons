import os
import sys
import fontforge

directory = sys.argv[1]

for filename in os.listdir(directory):
  if filename.endswith(".svg"):
    file_path = os.path.join(directory, filename)
    font = fontforge.font()
    print(f"Correcting outline for {file_path}")
    glyph = font.createChar(123, file_path)
    glyph.importOutlines(file_path)
    glyph.round()
    glyph.simplify()
    glyph.simplify()
    glyph.correctDirection()
    glyph.export(file_path)
    glyph.clear()

print ("Finished fixing svg outline directions!")
