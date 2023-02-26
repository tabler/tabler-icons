import icons from '../data/icons.json'
import { Icon } from '../components/Icon.js'
import { Sprite } from '../components/Sprite.js'

export default function Icons() {
  return <>
    <div className="container">
      <Sprite />
      <div className="box">
        <div className="mb">
          <div className="icons-list">
            {icons.map(icon => (
                <div className="icons-list-icon js-icon" title={icon.name}>
                  <Icon name={icon.name}/>
                </div>
            ))}
          </div>
        </div>
      </div>
    {/*  {% if jekyll.environment != "development" %}*/}
    {/*  <div class="box">*/}
    {/*    <div class="mb">*/}
    {/*      <div class="icons-list">*/}
    {/*        {% for icon in site.icons %}*/}
    {/*        {% assign name = icon.slug %}*/}
    {/*        <div class="icons-list-icon js-icon" title="{{ icon.slug }}" data-icon="{{ name }}">*/}
    {/*          {% include_cached icon.html name=name stroke=1.5 %}*/}
    {/*        </div>*/}
    {/*        {% endfor %}*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*  <div class="box">*/}
    {/*    <div class="mb">*/}
    {/*      <div class="icons-list">*/}
    {/*        {% for icon in site.icons %}*/}
    {/*        {% assign name = icon.slug %}*/}
    {/*        <div class="icons-list-icon js-icon" title="{{ icon.slug }}" data-icon="{{ name }}">*/}
    {/*          {% include_cached icon.html name=name stroke=1 %}*/}
    {/*        </div>*/}
    {/*        {% endfor %}*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*  {% endif %}*/}
    </div>
  </>
}
