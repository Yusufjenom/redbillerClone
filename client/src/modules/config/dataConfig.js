

export const __services = [
    {
        label: 'Records',
        id: 'records',
        services: [
            {
                label: 'Statement',
                value: 'statement',
                icon: 'ki-outline ki-notepad'
            },
            {
                label: 'Reversals',
                value: 'reversals',
                icon: 'ki-outline ki-arrow-circle-left'
            },
            {
                label: 'Withdrawals',
                value: 'withdrawals',
                icon: 'ki-outline ki-tablet-down'
            },
            {
                label: 'Deposits',
                value: 'deposits',
                icon: 'ki-outline ki-tablet-down'
            }
        ]
    },
    {
        label: 'Bills',
        id: 'bills',
        services: [
            {
                icon: 'la la-sim-card',
                label: 'Airtime',
                value: 'airtime'
            },
            {
                icon: 'la la-tty',
                label: 'Airtime PIN',
                value: 'airtime-pin'
            },
            {
                // icon: 'ki-outline ki-satellite',
                icon: 'la la-broadcast-tower',
                label: 'Mobile Data',
                value: 'mobile-data'
            },
            {
                icon: 'ki-outline ki-wifi-home',
                label: 'Internet',
                value: 'wifi-internet'
            },
            {
                icon: 'la la-gamepad',
                label: 'Betting',
                value: 'betting'
            },
            {
                icon: 'la la-tv',
                label: 'Television',
                value: 'cable'
            },
            {
                icon: 'ki-outline ki-electricity',
                label: 'Electricity',
                value: 'disco'
            },
        ]
    },
    {
        label: 'Payouts',
        id: 'payout',
        services: [
            {
                icon: 'ki-outline ki-bank',
                label: 'Bank Transfers',
                value: 'bank-transfer'
            },
            {
                icon: 'ki-outline ki-wallet',
                label: 'Redbiller Transfers',
                value: 'redbiller-transfer'
            },
            {
                icon: 'ki-outline ki-wallet',
                label: 'Wallet Transfers',
                value: 'wallet-transfer'
            }
        ]
    }
];

export const __bills_providers = {
    airtime: [
        {
            label: 'MTN',
            value: 'mtn',
            image: '/assets/product_img/mobile/mtn.png'
        },
        {
            label: 'Airtel',
            value: 'airtel',
            image: '/assets/product_img/mobile/airtel.jpg'
        },
        {
            label: 'Glo',
            value: 'glo',
            image: '/assets/product_img/mobile/glo.jpg'
        },
        {
            label: '9Mobile',
            value: '9mobile',
            image: '/assets/product_img/mobile/9mobile.png'
        }
    ],
    airtime_pin: [
        {
            label: 'MTN',
            value: 'mtn',
            image: '/assets/product_img/mobile/mtn.png'
        },
        {
            label: 'Airtel',
            value: 'airtel',
            image: '/assets/product_img/mobile/airtel.jpg'
        },
        {
            label: 'Glo',
            value: 'glo',
            image: '/assets/product_img/mobile/glo.jpg'
        },
        {
            label: '9Mobile',
            value: '9mobile',
            image: '/assets/product_img/mobile/9mobile.png'
        }
    ],
    mobile_data: [
        {
            label: 'MTN',
            value: 'mtn',
            image: '/assets/product_img/mobile/mtn.png'
        },
        {
            label: 'Airtel',
            value: 'airtel',
            image: '/assets/product_img/mobile/airtel.jpg'
        },
        {
            label: 'Glo',
            value: 'glo',
            image: '/assets/product_img/mobile/glo.jpg'
        },
        {
            label: '9Mobile',
            value: '9mobile',
            image: '/assets/product_img/mobile/9mobile.png'
        }
    ],
    wifi_internet: [
        {
            label: 'Spectranet',
            value: 'spectranet',
            image: '/assets/product_img/wifi/spectranet.jpg'
        },
        {
            label: 'Smile',
            value: 'smile',
            image: '/assets/product_img/wifi/smile.jpg'
        }
    ],
    cable: [
        {
            label: 'DSTV',
            value: 'DSTV',
            image: '/assets/product_img/cable/dstv.jpg'
        },
        {
            label: 'GoTV',
            value: 'gotv',
            image: '/assets/product_img/cable/gotv.jpg'
        },
        {
            label: 'Startimes',
            value: 'startimes',
            image: '/assets/product_img/cable/startimes.jpg'
        }
    ],
    disco: [
        {
            label: 'Eko',
            value: 'eko',
            image: '/assets/product_img/disco/eko.jpg'
        },
        {
            label: 'Ikeja',
            value: 'ikeja',
            image: '/assets/product_img/disco/ikeja.jpg'
        },
        {
            label: 'Abuja',
            value: 'abuja',
            image: '/assets/product_img/disco/abuja.jpg'
        },
        {
            label: 'Ibadan',
            value: 'ibadan',
            image: '/assets/product_img/disco/ibadan.jpg'
        },
        {
            label: 'Jos',
            value: 'jos',
            image: '/assets/product_img/disco/jos.jpg'
        },
        {
            label: 'Kaduna',
            value: 'kaduna',
            image: '/assets/product_img/disco/kaduna.jpg'
        },
        {
            label: 'Enugu',
            value: 'enugu',
            image: '/assets/product_img/disco/enugu.jpg'
        },
        {
            label: 'Kano',
            value: 'kano',
            image: '/assets/product_img/disco/kano.jpg'
        },
        {
            label: 'Port Harcourt',
            value: 'portharcourt',
            image: '/assets/product_img/disco/port_harcourt.jpg'
        },
        {
            label: 'Beni',
            value: 'benin',
            image: '/assets/product_img/disco/benin.jpg'
        },
        {
            label: 'Yola',
            value: 'yola',
            image: '/assets/product_img/disco/yola.jpg'
        }
    ]
}