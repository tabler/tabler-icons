import { Icon } from '@/components/Icon';
import { getAllIcons } from '@/lib/icons';

export default async function TagsPage() {
  const icons = await getAllIcons();

  return (
    <div>
      <div className="container">
        <div className="box">
          <table className="table mb">
            <tbody>
              {icons.map((icon) => (
                <tr key={icon.slug}>
                  <td className="td-1">
                    <Icon icon={icon} />
                    {icon.svgs.solid && <Icon icon={icon} type="solid" />}
                  </td>
                  <th>{icon.slug}</th>
                  <td>{(icon.data.tags || []).join(', ')}</td>
                  <td>{icon.data.category}</td>
                  <td>{icon.data.version}</td>
                  <td>{icon.data.unicode}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <p>Untagged: { i }</p> */}
        </div>
      </div>
    </div>
  );
}
