import React, { Fragment } from 'react'
import { Popover, Image } from 'antd'

export default function Header() {
  const languageContent = (
    <Fragment>
      <ul>
        <li>English</li>
        <li>Vietnamese</li>
      </ul>
    </Fragment>
  )
  const currencyContent = (
    <Fragment>
      <ul>
        <li>BTC</li>
        <li>ETH</li>
      </ul>
    </Fragment>
  )
  return (
    <div className='header'>
      <div className='container'>
        <div className='header_left'>
          <div className='logo'>
              <Image src='./logo.png' preview={false} alt='logo'/>
          </div>
        </div>
        <div className='header_right'>
          <div className='options'>
            <Popover placement='bottom' content={languageContent}>
              <span>English</span>
            </Popover>
            <Popover placement='bottom' content={currencyContent}>
              <span>BTC</span>
            </Popover>
          </div>
          <div className='username'>
            <Image 
              width={44}
              height={44}
              src='./Ellipse 1.png' 
              preview={false} 
              placeholder={true} 
              alt='avatar'
            />
            <div className='user_info'>
              <span className='user_name'>Username001</span>
              <div className='user_coin'>
                <span className='coin'>0x69...DE71c</span>
                <Image src='./icon_header.png' preview={false} alt='icon' />
              </div>
            </div>
          </div>
          <div className='log'>
              <div className='log_out'>
                <span>log out</span>
                <Image src='./logout_icon.png' preview={false} alt='icon'/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
