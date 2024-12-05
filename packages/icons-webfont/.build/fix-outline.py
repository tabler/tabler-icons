import os
import sys
import fontforge

file = sys.argv[1]

font = fontforge.font()
print (f"Correcting outline for {file}")
glyph = font.createChar(123, file)
glyph.importOutlines("./" + file)
glyph.round()
glyph.simplify()
glyph.simplify()
glyph.correctDirection()
glyph.export("./" + file)
glyph.clear()

print ("Finished fixing svg outline directions!")
