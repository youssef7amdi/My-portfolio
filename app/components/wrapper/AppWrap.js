import React from 'react'
import NavigationDots from './NavigationDots'
import SocialMedia from './SocialMedia'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app-container ${classNames}`}>
      <SocialMedia />
      <div className='app-wrapper app-flex'>
        <Component />
        <div className='copyright'>
          <p className="p-text">@2023 YOUSSEF</p>
          <p className="p-text">&copy; All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap