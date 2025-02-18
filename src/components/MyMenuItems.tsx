import React from 'react';

import MyIcon from './MyIcon';
import MyMenuItem from './MyMenuItem';

const MyMenuItems: React.FC<{ mobile?: boolean; onClick?: () => void }> = (props) => {

    return (
        <>
            {/* <MyMenuItem
        link={'/whitelist'}
        active={location.pathname === '/whitelist'}
        onClick={props.onClick}
        className={`${props.mobile ? 'mb-3 ml-1' : ''}`}
        icon={'whitelist'}
      >
        {t('MyMenuItems.whitelist', 'Whitelist')}
      </MyMenuItem> */}
            {/* <MyMenuItem
        link={'/nft-dividends'}
        active={location.pathname === '/nft-dividends'}
        onClick={props.onClick}
        className={`${props.mobile ? 'mb-3 ml-1' : ''}`}
        icon={'rewards'}
      >
        {t('MyMenuItems.NFT.NftDividends', 'NFT Dividends')}
      </MyMenuItem> */}

            {/* <MyMenuItem
        link={'/bingo'}
        active={location.pathname === '/bingo'}
        className={`${props.mobile ? 'mb-3 ml-1' : ''}`}
        icon={'bingo'}
      >
        {t('MyMenuItems.MyDropdownMenu.bingo', 'Bingo')}
      </MyMenuItem> */}

            <MyMenuItem
                url={
                    'https://pancakeswap.finance/swap/0x8a5d7fcd4c90421d21d30fcc4435948ac3618b2f'
                }
                onClick={props.onClick}
                className={`${props.mobile ? 'mb-3 ml-1' : ''}`}
                icon={'dashboard'}
            >
                Buy
            </MyMenuItem>

            <div className="hidden sm:block flex justify-center my-8">
                <div className="w-56 h-px bg-gray-50"></div>
            </div>

            {/* <MyMenuItem
          url={'https://bingo.cake.monster'}
          className={`${props.mobile ? 'mb-3 ml-1' : ''}`}
          icon={'bingo'}
          >
          {t('MyMenuItems.bingo', 'Bingo')}
        </MyMenuItem> */}

            {/*
      <MyMenuItem
        url={'#'}
        onClick={props.onClick}
        className={`${props.mobile ? 'mb-3 ml-1' : ''}`}
        icon={'how_to'}
      >
        {t('MyMenuItems.howToBuy', 'How to buy?')}
      </MyMenuItem> */}

            {/* <div className="hidden sm:block flex justify-center my-8">
        <div className="w-56 h-px bg-gray-50"></div>
      </div> */}

            {/* <MyMenuItem
        url={
          'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8a5d7fcd4c90421d21d30fcc4435948ac3618b2f'
        }
        onClick={props.onClick}
        className={`${props.mobile ? 'mb-3 ml-1' : ''}`}
        icon={'buy'}
      >
        {t('MyMenuItems.buy', 'Buy')}
      </MyMenuItem> */}
        </>
    );
};

export default MyMenuItems;

