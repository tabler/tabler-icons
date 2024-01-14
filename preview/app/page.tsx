import { getAllIcons } from '@/lib/icons';
import { Icon } from '@/components/Icon';

export default async function IndexPage() {
  const icons = await getAllIcons();

  return (
    <div className="container">
      <div className="box">
        <div className="mb">
          <div className="icons-list">
            {icons.map((icon) => (
              <div
                className="icons-list-icon js-icon"
                title="{{ icon.slug }}"
                data-icon="{{ name }}"
                key={icon.slug}
              >
                <Icon icon={icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {process.env.NODE_ENV === 'production' && (
        <>
          <div className="box">
            <div className="mb">
              <div className="icons-list">
                {icons.map((icon) => (
                  <div
                    className="icons-list-icon js-icon"
                    title="{{ icon.slug }}"
                    data-icon="{{ icon.slug }}"
                    key={icon.slug}
                  >
                    <Icon icon={icon} stroke={1.5} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="box">
            <div className="mb">
              <div className="icons-list">
                {icons.map((icon) => (
                  <div
                    className="icons-list-icon js-icon"
                    title="{{ icon.slug }}"
                    data-icon="{{ name }}"
                    key={icon.slug}
                  >
                    <Icon icon={icon} stroke={1} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
