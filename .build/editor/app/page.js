// "use client"

// import { useState } from 'react'
import { groupByCategory } from '../../svg.mjs'
// import clsx from 'clsx'
// import { Icon } from '../components/Icon.js'
import { Sprite } from '../components/Sprite.js'
// import { Toolbar } from '../components/Toolbar.js'

// import icons from '../data/icons.json'

const icons = []
export default function Index () {
  // const [icon, setIcon] = useState(icons[0].name),
  //     [strokeWidth, setStrokeWidth] = useState(2),
  //     groups = groupByCategory(icons),
  //     newIcons = icons.filter(i => !i.version)

  return (
      <div className="container">
        index

        {/*<Sprite />*/}

        {/*<div className="box">*/}
        {/*  <div className="row mb">*/}
        {/*    <div className="col">*/}

        {/*      <div className="icon-preview-wrap">*/}
        {/*        <div className="icon-preview">*/}
        {/*          <Icon name={icon} strokeWidth={strokeWidth} />*/}
        {/*          <Icon name={icon} strokeWidth={strokeWidth} />*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="col-aside">*/}

        {/*      <h1 className="icon-title">{icon}</h1>*/}

        {/*      <div className="mb">*/}
        {/*        <button className="btn"><Icon name={icon} strokeWidth={strokeWidth} /> Button</button>*/}
        {/*        {' '}*/}
        {/*        <button className="btn btn-icon"><Icon name={icon} strokeWidth={strokeWidth} /></button>*/}
        {/*        {' '}*/}
        {/*        <button className="btn btn-link"><Icon name={icon} strokeWidth={strokeWidth} /> Button</button>*/}
        {/*      </div>*/}

        {/*      <div className="input-icon mb">*/}
        {/*        <input type="text" className="input" defaultValue="Input value" />*/}
        {/*        <Icon name={icon} strokeWidth={strokeWidth} />*/}
        {/*      </div>*/}

        {/*      <div className="input-icon icon-left mb">*/}
        {/*        <Icon name={icon} strokeWidth={strokeWidth} />*/}
        {/*        <input type="text" className="input" placeholder="Input placeholder" />*/}
        {/*      </div>*/}

        {/*      <div className="mb">*/}
        {/*        <div className="avatar"><Icon name={icon} strokeWidth={strokeWidth} /></div>*/}
        {/*        {' '}*/}
        {/*        <div className="avatar avatar-sm"><Icon name={icon} strokeWidth={strokeWidth} /></div>*/}
        {/*        {' '}*/}
        {/*        <a href="#"><Icon name={icon} strokeWidth={strokeWidth} /> Link</a>*/}
        {/*      </div>*/}

        {/*      <div className="tabs mb">*/}
        {/*        <a className="tab active"><Icon name={icon} strokeWidth={strokeWidth} /> Tab 1</a>*/}
        {/*        <a className="tab">Tab 2</a>*/}
        {/*        <a className="tab">Tab 3</a>*/}
        {/*      </div>*/}

        {/*      <div className="mb">*/}
        {/*        <textarea rows="10" className="input"></textarea>*/}
        {/*      </div>*/}


        {/*      <div className="mt-auto">*/}
        {/*        <input className="input-range" type="range" min="1" max="2.5" step=".25" value={strokeWidth} onChange={(e) => setStrokeWidth(e.target.value)}/>*/}
        {/*      </div>*/}

        {/*    </div>*/}
        {/*  </div>*/}

        {/*  <div className="mb">*/}
        {/*    <Toolbar*/}
        {/*        items="arrow-back-up,arrow-forward-up,printer,paint|bold,italic,underline,strikethrough,emphasis,baseline|align-left,align-center,align-right,align-justified,line-height|list,list-check,list-numbers|h-1,h-2,h-3,h-4,h-5,h-6,link,photo,table,regex|sort-ascending,sort-descending,sort-ascending-letters,sort-ascending-numbers|indent-increase,indent-decrease|subscript,superscript|minus,omega,chart-area-line,pencil|eraser,settings,typography,letters-case,clear-formatting|parentheses,brackets,braces,terminal|bike,run,swimming,walk,pray,fall,karate|heart,spade,diamonds,clubs|repeat,repeat-once,switch,player-record,player-play,player-pause,player-stop,power,player-skip-forward,player-skip-back,player-track-next,player-track-prev,player-eject" setIcon={setIcon} strokeWidth={strokeWidth}/>*/}
        {/*  </div>*/}

        {/*  {newIcons && <>*/}
        {/*    <h2 className="icon-subtitle">New icons ({newIcons.length})</h2>*/}

        {/*    <div className="mb">*/}
        {/*      <div className="icons-list">*/}
        {/*        {newIcons.map(i => (*/}
        {/*            <a href="#" className="icons-list-icon" title={i.name} style={!i.category ? { color: '#999' } : {}}>*/}
        {/*              <Icon name={i.name} strokeWidth={strokeWidth} />*/}
        {/*            </a>*/}
        {/*        ))}*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </>}*/}


          {/*<h2 className="icon-subtitle">{icons.length} icons</h2>*/}

          {/*<div className="mb">*/}
          {/*  {groups.map(category => (*/}
          {/*      <div key={category.name}>*/}
          {/*        <h3 className="category-subtitle">{category.name ? category.name : 'Uncategorized'} <span*/}
          {/*            className="text-muted">({category.items.length})</span></h3>*/}

          {/*        <div className="icons-list">*/}
          {/*          {category.items.map(i => (*/}
          {/*              <a href="#" className={clsx('icons-list-icon', {*/}
          {/*                'new-icon': !i.version*/}
          {/*              })} title={i.name} key={i.name} onClick={() => setIcon(i.name)}>*/}
          {/*                <Icon name={i.name} strokeWidth={strokeWidth} />*/}
          {/*              </a>*/}
          {/*          ))}*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
  )
}
