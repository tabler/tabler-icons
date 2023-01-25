import os
import fontforge

# svg2ttf library does not support fill-rule="evenodd" so after converting icons to outlineStroke we fix path directions to work with "nonzero"
# more: https://github.com/tabler/tabler-icons/issues/13 - thanks for awesome suggestions in the issue


print ("Running fontforge to fix svg outline directions!")

def files(path):
    for file in os.listdir(path):
        if os.path.isfile(os.path.join(path, file)):
            yield file

# refer to https://fontforge.org/docs/scripting/python/fontforge.html for documentation
# inspiration from https://github.com/FontCustom/fontcustom/blob/master/lib/fontcustom/scripts/generate.py

font = fontforge.font()
for file in files("./icons-outlined"):
    print (f"Correcting outline for {file}")
    glyph = font.createChar(123, file)
    glyph.importOutlines("./icons-outlined/" + file)
    glyph.round()
    glyph.simplify()
    glyph.simplify()
    glyph.correctDirection()
    glyph.export("./icons-outlined/" + file)
    glyph.clear()


print ("Finished fixing svg outline directions!")
