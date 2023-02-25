import icons from '../data/icons.json'
import { Icon } from '../components/Icon.js'
import { Sprite } from '../components/Sprite.js'

export default function Tags () {
  return <>
    <div class="container">
      <Sprite />

      <div class="box">
        <table class="table mb">
          {icons.map(icon => (
          <tr key={icon.name}>
            <td class="td-1">
              <Icon name={icon.name} />
            </td>
            <th>{ icon.name }</th>
            <td>{ (icon.tags || []).join(', ') }</td>
            <td>{ icon.category }</td>
            <td>{ icon.version }</td>
            <td>{ icon.unicode }</td>
          </tr>
              ))}
        </table>

        {/*<p>Untagged: {{ i }}</p>*/}
      </div>
    </div>
  </>
}
