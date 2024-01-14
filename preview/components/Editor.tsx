'use client';

import { Icon, iconSvg } from '@/components/Icon';
import { IconType } from '@/types';
import { useState } from 'react';

const groupBy = function (xs: IconType[]) {
  return xs.reduce(function (rv: Record<string, IconType[]>, x: IconType) {
    const category = x.data.category || '';
    (rv[category] = rv[category] || []).push(x);
    return rv;
  }, {});
};

export function Editor({ icons }: { icons: IconType[] }) {
  const [currentIcon, setCurrentIcon] = useState(icons[0]),
    newIcons = icons.filter((icon) => icon.data.version === null),
    grouppedIcons = groupBy(icons);

  const Toolbar = ({ toolbar, icons }: { toolbar: string; icons: IconType[] }) => {
    const groups = toolbar.split('|').map((group) => {
      const buttons = group.split(',');

      return buttons.map((button) => {
        const icon = icons.find((icon) => icon.slug === button);

        return icon;
      });
    });

    return (
      <div className="toolbar">
        {groups.map((group, i) => (
          <div className="buttons" key={i}>
            {group.map((icon, j) => (
              <a className="button" key={j} onClick={() => icon && setCurrentIcon(icon)}>
                {icon ? <Icon icon={icon} /> : ''}
              </a>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="box">
        <div className="row mb js-icon-manager">
          <div className="col">
            <div className="icon-preview-wrap">
              <div className="icon-preview">
                <Icon icon={currentIcon} />
              </div>
            </div>
          </div>
          <div className="col-aside">
            <h1 className="icon-title js-icon-name">{currentIcon.slug}</h1>

            <div className="mb">
              <button className="btn">
                <Icon icon={currentIcon} /> Button
              </button>{' '}
              <button className="btn btn-icon">
                <Icon icon={currentIcon} />
              </button>{' '}
              <button className="btn btn-link">
                <Icon icon={currentIcon} /> Button
              </button>
            </div>

            <div className="input-icon mb">
              <input type="text" className="input" defaultValue="Input value" />
              <Icon icon={currentIcon} />
            </div>

            <div className="input-icon icon-left mb">
              <Icon icon={currentIcon} />
              <input type="text" className="input" placeholder="Input placeholder" />
            </div>

            <div className="mb">
              <div className="avatar">
                <Icon icon={currentIcon} />
              </div>
              <div className="avatar avatar-sm">
                <Icon icon={currentIcon} />
              </div>

              <a href="#">
                <Icon icon={currentIcon} /> Link
              </a>
            </div>

            <div className="tabs mb">
              <a className="tab active">
                <Icon icon={currentIcon} /> Tab 1
              </a>
              <a className="tab">Tab 2</a>
              <a className="tab">Tab 3</a>
            </div>

            <div className="mb">
              <textarea rows={10} className="input" defaultValue={iconSvg({ icon: currentIcon })} />
            </div>

            <div className="mt-auto">
              <input
                className="input-range js-input-range"
                type="range"
                min="1.25"
                max="2.75"
                step=".25"
                defaultValue="2"
              />
            </div>
          </div>
        </div>
        <div className="mb">
          <Toolbar
            toolbar="arrow-back-up,arrow-forward-up,printer,paint|bold,italic,underline,strikethrough,emphasis,baseline|align-left,align-center,align-right,align-justified,line-height|list,list-check,list-numbers|h-1,h-2,h-3,h-4,h-5,h-6,link,photo,table,regex|sort-ascending,sort-descending,sort-ascending-letters,sort-ascending-numbers|indent-increase,indent-decrease|subscript,superscript|minus,omega,chart-area-line,pencil|eraser,settings,typography,letters-case,clear-formatting|parentheses,brackets,braces,terminal|bike,run,swimming,walk,pray,fall,karate|heart,spade,diamonds,clubs|repeat,repeat-once,switch,player-record,player-play,player-pause,player-stop,power,player-skip-forward,player-skip-back,player-track-next,player-track-prev,player-eject"
            icons={icons}
          />
        </div>
        <h2 className="icon-subtitle">New icons ({newIcons.length})</h2>
        <div className="mb">
          <div className="icons-list">
            {newIcons.map((icon) => (
              <a
                href="#"
                className="icons-list-icon"
                title={icon.slug}
                key={icon.slug}
                style={{ color: '#999' }}
                onClick={() => setCurrentIcon(icon)}
              >
                <Icon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="box">
        <h2 className="icon-subtitle">{icons.length} icons</h2>

        {Object.entries(grouppedIcons).map(([category, icons]) => (
          <div className="mb" key={category}>
            <h3 className="category-subtitle">
              {category ? category : 'Uncategorized'}{' '}
              <span className="text-muted">({icons.length})</span>
            </h3>

            <div className="icons-list">
              {icons.map((icon) => (
                <a
                  href="#"
                  key={icon.slug}
                  className="icons-list-icon"
                  title={icon.slug}
                  onClick={() => setCurrentIcon(icon)}
                >
                  <Icon icon={icon} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
