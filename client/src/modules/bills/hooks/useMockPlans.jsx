
const _plans = {
    mobile_data: {
        'mtn': [],
        'airtel': [
            {
                "name": "Airtel Data - 50 Naira - 40MB  - 1Day",
                "code": "airt-50",
                "amount": 50
            },
            {
                "name": "Airtel Data - 100 Naira - 100MB - 1Day",
                "code": "airt-100",
                "amount": 100
            },
            {
                "name": "Airtel Data - 200 Naira - 200MB - 3Days",
                "code": "airt-200",
                "amount": 200
            },
            {
                "name": "Airtel Data - 350 Naira - 350MB - 7 Days",
                "code": "airt-350",
                "amount": 350
            },
            {
                "name": "Airtel Data - 500 Naira - 750MB - 7 Days",
                "code": "airt-500",
                "amount": 500
            },
            {
                "name": "Airtel Data - 1,000 Naira - 1.2GB - 30 Days",
                "code": "airt-1000",
                "amount": 1000
            },
            {
                "name": "Airtel Data - 1,500 Naira - 3GB - 30 Days",
                "code": "airt-1500",
                "amount": 1500
            },
            {
                "name": "Airtel Data - 2,000 Naira - 4.5GB - 30 Days",
                "code": "airt-2000",
                "amount": 2000
            },
            {
                "name": "Airtel Data - 3,000 Naira - 10GB - 30 Days",
                "code": "airt-3000",
                "amount": 3000
            },
            {
                "name": "Airtel Data - 4,000 Naira - 15GB - 30 Days",
                "code": "airt-4000",
                "amount": 4000
            },
            {
                "name": "Airtel Data - 5,000 Naira - 18GB - 30 Days",
                "code": "airt-5000",
                "amount": 5000
            },
            {
                "name": "Airtel Binge - 1,500 Naira (7 Days) - 5GB",
                "code": "airt-1500-2",
                "amount": 1500
            },
            {
                "name": "Airtel Data - 10,000 Naira - 40GB - 30 Days",
                "code": "airt-10000",
                "amount": 10000
            },
            {
                "name": "Airtel Data - 15,000 Naira - 75GB - 30 Days",
                "code": "airt-15000",
                "amount": 15000
            },
            {
                "name": "Airtel Data - 36,000 Naira - 280GB - 30 Days",
                "code": "airt-36000",
                "amount": 36000
            },
            {
                "name": "Airtel Data - 60,000 Naira - 500GB - 120 Days",
                "code": "airt-60000",
                "amount": 60000
            },
            {
                "name": "Airtel Data - 100,000 Naira - 1TB - 365 Days",
                "code": "airt-100000",
                "amount": 100000
            },
            {
                "name": "Airtel Data - 20,000 Naira - 120GB - 30 Days",
                "code": "airt-20000",
                "amount": 20000
            },
            {
                "name": "Airtel Data - 350 Naira - 1GB - 1 day",
                "code": "airt-350x",
                "amount": 350
            },
            {
                "name": "Airtel Data - 500 Naira - 2GB - 1 days",
                "code": "airt-500x",
                "amount": 500
            },
            {
                "name": "Airtel Data - 1,200 Naira - 1.5GB - 30 Days",
                "code": "airt-1200",
                "amount": 1200
            },
            {
                "name": "Airtel Data - 2,500 Naira - 6GB - 30 Days",
                "code": "airt-2500",
                "amount": 2500
            },
            {
                "name": "Airtel Data - 8,000 Naira - 30GB - 30 Days",
                "code": "airt-8000",
                "amount": 8000
            },
            {
                "name": "Airtel Data - 30,000 Naira - 240GB - 30 Days",
                "code": "airt-30000",
                "amount": 30000
            },
            {
                "name": "Airtel Data - 50,000 Naira - 400GB - 90 Days",
                "code": "airt-50000",
                "amount": 50000
            }
        ],
        'glo': [
            {
                "name": "Glo Data N100 -  150MB - 1 day",
                "code": "glo100",
                "amount": 100
            },
            {
                "name": "Glo Data N200 -  350MB - 2 days",
                "code": "glo200",
                "amount": 200
            },
            {
                "name": "Glo Data N500 -  1.35GB - 14 days",
                "code": "glo500",
                "amount": 500
            },
            {
                "name": "Glo Data N1000 -  2.9GB - 30 days",
                "code": "glo1000",
                "amount": 1000
            },
            {
                "name": "Glo Data N2000 -  5.8GB - 30 days",
                "code": "glo2000",
                "amount": 2000
            },
            {
                "name": "Glo Data N2500 -  7.7GB - 30 days",
                "code": "glo2500",
                "amount": 2500
            },
            {
                "name": "Glo Data N3000 -  10GB - 30 days",
                "code": "glo3000",
                "amount": 3000
            },
            {
                "name": "Glo Data N4000 -  13.25GB - 30 days",
                "code": "glo4000",
                "amount": 4000
            },
            {
                "name": "Glo Data N5000 -  18.25GB - 30 days",
                "code": "glo5000",
                "amount": 5000
            },
            {
                "name": "Glo Data N8000 -  29.5GB - 30 days",
                "code": "glo8000",
                "amount": 8000
            },
            {
                "name": "Glo Data N10000 -  50GB - 30 days",
                "code": "glo10000",
                "amount": 10000
            },
            {
                "name": "Glo Data N15000 -  93GB - 30 days",
                "code": "glo15000",
                "amount": 15000
            },
            {
                "name": "Glo Data N18000 -  119GB - 30 days",
                "code": "glo18000",
                "amount": 18000
            },
            {
                "name": "Glo Data N1500 -  4.1GB - 30 days",
                "code": "glo1500",
                "amount": 1500
            },
            {
                "name": "Glo Data N20000 -  138GB - 30 days",
                "code": "glo20000",
                "amount": 20000
            },
            {
                "name": "Glo Data  N25 -  250MB - 1 Night",
                "code": "glo25",
                "amount": 25
            },
            {
                "name": "Glo Data N50 -  500MB - (1 Night)",
                "code": "glo50",
                "amount": 50
            },
            {
                "name": "Glo Data N50 -  50MB - 1 day",
                "code": "glo50x",
                "amount": 50
            },
            {
                "name": "Glo Data N100 -  1GB - (5 Nights)",
                "code": "glo100x",
                "amount": 100
            },
            {
                "name": "Glo Data N200 - 1.25GB - (on Sunday)",
                "code": "glo200x",
                "amount": 200
            },
            {
                "name": "Glo Data N1500 -  7GB - 7 day",
                "code": "glo1500x",
                "amount": 1500
            },
            {
                "name": "Glo Data N30,000 -  225GB - 30 days",
                "code": "glo30000",
                "amount": 30000
            },
            {
                "name": "Glo Data N36,000 -  300GB - 30 days",
                "code": "glo36000",
                "amount": 36000
            },
            {
                "name": "Glo Data N50,000 -  425GB - 90 days",
                "code": "glo50000",
                "amount": 50000
            },
            {
                "name": "Glo Data N60,000 -  525GB - 120 days",
                "code": "glo60000",
                "amount": 60000
            },
            {
                "name": "Glo Data N75,000 -  675GB - 120 days",
                "code": "glo75000",
                "amount": 75000
            },
            {
                "name": "Glo Data N100,000 -  1TB - 365 days",
                "code": "glo100000",
                "amount": 100000
            },
            {
                "name": "Glo Data (SME) N50 -  200MB - 14 days",
                "code": "glo-dg-50",
                "amount": 50
            },
            {
                "name": "Glo Data (SME) N250 - 1GB 30 days",
                "code": "glo-dg-250",
                "amount": 250
            },
            {
                "name": "Glo Data (SME) N750 - 3GB 30 days",
                "code": "glo-dg-750",
                "amount": 750
            },
            {
                "name": "Glo Data (SME) N2500 - 10GB - 30 Days",
                "code": "glo-dg-2500",
                "amount": 2500
            },
            {
                "name": "Glo Data (SME) N500 - 2GB 30 days",
                "code": "glo-dg-500",
                "amount": 500
            },
            {
                "name": "Glo Data (SME) N125 - 500MB 14 days",
                "code": "glo-dg-125-14",
                "amount": 125
            },
            {
                "name": "Glo Data (SME) N125 - 500MB 30 days",
                "code": "glo-dg-125-30",
                "amount": 125
            },
            {
                "name": "Glo Data (SME) N1250 - 5GB 30 days",
                "code": "glo-dg-1250",
                "amount": 1250
            }
        ],
        '9mobile': [
            {
                "name": "9mobile 200MB - 100 Naira - 1 day",
                "code": "eti-100",
                "amount": 100
            },
            {
                "name": "9mobile 650MB - 200 Naira - 1 day",
                "code": "eti-200",
                "amount": 200
            },
            {
                "name": "9mobile 2GB +100MB - 500 Naira - 3 days",
                "code": "eti-500",
                "amount": 500
            },
            {
                "name": "9mobile 18.5GB (15GB+3.5GB Night) - 4,000 Naira - 30 days",
                "code": "eti-4000",
                "amount": 4000
            },
            {
                "name": "9mobile 9.5GB (5.5GB+4GB Night) - 2000 Naira - 30 Days",
                "code": "eti-2000",
                "amount": 2000
            },
            {
                "name": "9mobile 24GB - 5,000 Naira - 30 Days",
                "code": "eti-5000",
                "amount": 5000
            },
            {
                "name": "9mobile 50GB - 10,000 Naira - 30 days",
                "code": "eti-10000",
                "amount": 10000
            },
            {
                "name": "9mobile 80GB - 15,000 Naira - 30 Days",
                "code": "eti-15000",
                "amount": 15000
            },
            {
                "name": "9mobile 12GB - 3,000 Naira - 30 days",
                "code": "eti-3000",
                "amount": 3000
            },
            {
                "name": "9mobile 6.5GB (2.5GB+4GB Night) - 1,200 Naira - 30 Days",
                "code": "eti-1200",
                "amount": 1200
            },
            {
                "name": "9mobile 50MB - 50 Naira - 1 day",
                "code": "eti-50",
                "amount": 50
            },
            {
                "name": "9mobile 7GB - 1,500 Naira - 7 days",
                "code": "eti-1500",
                "amount": 1500
            },
            {
                "name": "9mobile 300MB (200MB all time + 100MB night) + 300secs - 150 Naira",
                "code": "eti-150",
                "amount": 150
            },
            {
                "name": "9mobile 1GB + 100MB (1 day) - 300 Naira",
                "code": "eti-300",
                "amount": 300
            },
            {
                "name": "9mobile 11GB (7GB+ 4GB Night) - 2,500 Naira - 30 days",
                "code": "eti-2500",
                "amount": 2500
            },
            {
                "name": "9mobile 35 GB - 7,000 Naira - 30 days",
                "code": "eti-7000",
                "amount": 7000
            },
            {
                "name": "9mobile 125GB - 20,000 Naira - 30 days",
                "code": "eti-20000",
                "amount": 20000
            }
        ]
    },
    cable: {
        dstv: [
            {
                "name": "DStv Padi N2,950",
                "code": "dstv-padi",
                "amount": 2950
            },
            {
                "name": "DStv Yanga N4,200",
                "code": "dstv-yanga",
                "amount": 4200
            },
            {
                "name": "Dstv Confam N7,400",
                "code": "dstv-confam",
                "amount": 7400
            },
            {
                "name": "DStv  Compact N12,500",
                "code": "dstv79",
                "amount": 12500
            },
            {
                "name": "DStv Premium N29,500",
                "code": "dstv3",
                "amount": 29500
            },
            {
                "name": "DStv Asia N9,900",
                "code": "dstv6",
                "amount": 9900
            },
            {
                "name": "DStv Compact Plus N19,800",
                "code": "dstv7",
                "amount": 19800
            },
            {
                "name": "DStv Premium-French N45,600",
                "code": "dstv9",
                "amount": 45600
            },
            {
                "name": "DStv Premium-Asia N33,000",
                "code": "dstv10",
                "amount": 33000
            },
            {
                "name": "DStv Confam + ExtraView N11,400",
                "code": "confam-extra",
                "amount": 11400
            },
            {
                "name": "DStv Yanga + ExtraView N8,200",
                "code": "yanga-extra",
                "amount": 8200
            },
            {
                "name": "DStv Padi + ExtraView N6,950",
                "code": "padi-extra",
                "amount": 6950
            },
            {
                "name": "DStv Compact + Asia N22,400",
                "code": "com-asia",
                "amount": 22400
            },
            {
                "name": "DStv Compact + Extra View N16,500",
                "code": "dstv30",
                "amount": 16500
            },
            {
                "name": "DStv Compact + French Touch N17,100",
                "code": "com-frenchtouch",
                "amount": 17100
            },
            {
                "name": "DStv Premium + Extra View N33,500",
                "code": "dstv33",
                "amount": 33500
            },
            {
                "name": "DStv Compact Plus + Asia N29,700",
                "code": "dstv40",
                "amount": 29700
            },
            {
                "name": "DStv Compact + French Touch + ExtraView N21,100",
                "code": "com-frenchtouch-extra",
                "amount": 21100
            },
            {
                "name": "DStv Compact + Asia + ExtraView N26,400",
                "code": "com-asia-extra",
                "amount": 26400
            },
            {
                "name": "DStv Compact Plus + French Plus N35,900",
                "code": "dstv43",
                "amount": 35900
            },
            {
                "name": "DStv Compact Plus + French Touch N24,400",
                "code": "complus-frenchtouch",
                "amount": 24400
            },
            {
                "name": "DStv Compact Plus + Extra View N23,800",
                "code": "dstv45",
                "amount": 23800
            },
            {
                "name": "DStv Compact Plus + FrenchPlus + Extra View N39,900",
                "code": "complus-french-extraview",
                "amount": 39900
            },
            {
                "name": "DStv Compact + French Plus N28,600",
                "code": "dstv47",
                "amount": 28600
            },
            {
                "name": "DStv Compact Plus + Asia + ExtraView N33,700",
                "code": "dstv48",
                "amount": 33700
            },
            {
                "name": "DStv Premium + Asia + Extra View N43,400",
                "code": "dstv61",
                "amount": 43400
            },
            {
                "name": "DStv Premium + French + Extra View N40,700",
                "code": "dstv62",
                "amount": 40700
            },
            {
                "name": "DStv French Plus Add-on N16,100",
                "code": "frenchplus-addon",
                "amount": 16100
            },
            {
                "name": "DStv Asian Add-on N9,900",
                "code": "asia-addon",
                "amount": 9900
            },
            {
                "name": "DStv Great Wall Standalone Bouquet N2,500",
                "code": "dstv-greatwall",
                "amount": 2500
            },
            {
                "name": "DStv French Touch Add-on N4,600",
                "code": "frenchtouch-addon",
                "amount": 4600
            },
            {
                "name": "ExtraView Access N4,000",
                "code": "extraview-access",
                "amount": 4000
            },
            {
                "name": "DStv French 11 N7,200",
                "code": "french11",
                "amount": 7200
            },
            {
                "name": "DStv Asian Bouquet E36 N9,900",
                "code": "dstv80",
                "amount": 9900
            },
            {
                "name": "DStv Yanga + Showmax N5,650",
                "code": "dstv-yanga-showmax",
                "amount": 5650
            },
            {
                "name": "DStv Great Wall Standalone Bouquet + Showmax N4,950",
                "code": "dstv-greatwall-showmax",
                "amount": 4950
            },
            {
                "name": "DStv Compact Plus + Showmax N21,250",
                "code": "dstv-compact-plus-showmax",
                "amount": 21250
            },
            {
                "name": "Dstv Confam + Showmax N8,850",
                "code": "dstv-confam-showmax",
                "amount": 8850
            },
            {
                "name": "DStv  Compact + Showmax N13,950",
                "code": "dstv-compact-showmax",
                "amount": 13950
            },
            {
                "name": "DStv Padi + Showmax N5,850",
                "code": "dstv-padi-showmax",
                "amount": 5850
            },
            {
                "name": "DStv Premium + Asia + Showmax N33,000",
                "code": "dstv-premium-asia-showmax",
                "amount": 33000
            },
            {
                "name": "DStv Premium + French + Showmax N45,600",
                "code": "dstv-premium-french-showmax",
                "amount": 45600
            },
            {
                "name": "DStv Premium + Showmax N29,500",
                "code": "dstv-premium-showmax",
                "amount": 29500
            },
            {
                "name": "DStv Premium Streaming Subscription - N29,500",
                "code": "dstv-premium-str",
                "amount": 29500
            },
            {
                "name": "DStv Prestige - N590,000",
                "code": "dstv-prestige",
                "amount": 590000
            },
            {
                "name": "DStv Yanga OTT Streaming Subscription - N4,200",
                "code": "dstv-yanga-stream",
                "amount": 4200
            },
            {
                "name": "DStv Compact Plus Streaming Subscription - N19,800",
                "code": "dstv-compact-plus-streem",
                "amount": 19800
            },
            {
                "name": "DStv Compact Streaming Subscription - N12,500",
                "code": "dstv-compact-stream",
                "amount": 12500
            },
            {
                "name": "DStv Comfam Streaming Subscription - N7,400",
                "code": "dstv-confam-stream",
                "amount": 7400
            }
        ],
        gotv: [
            {
                "name": "GOtv Max N5,700",
                "code": "gotv-max",
                "amount": 5700
            },
            {
                "name": "GOtv Jolli N3,950",
                "code": "gotv-jolli",
                "amount": 3950
            },
            {
                "name": "GOtv Jinja N2,700",
                "code": "gotv-jinja",
                "amount": 2700
            },
            {
                "name": "GOtv Smallie - monthly N1300",
                "code": "gotv-smallie",
                "amount": 1300
            },
            {
                "name": "GOtv Smallie - quarterly N3,450",
                "code": "gotv-smallie-3months",
                "amount": 3450
            },
            {
                "name": "GOtv Smallie - yearly N10,200",
                "code": "gotv-smallie-1year",
                "amount": 10200
            },
            {
                "name": "GOtv Supa - monthly N7,600",
                "code": "gotv-supa",
                "amount": 7600
            },
            {
                "name": "GOtv Supa Plus - monthly N12,500",
                "code": "gotv-supa-plus",
                "amount": 12500
            }
        ],
        startimes: [
            {
                "name": "Nova (Dish) - 1700 Naira - 1 Month",
                "code": "nova",
                "amount": 1700
            },
            {
                "name": "Basic (Antenna) - 3,000 Naira - 1 Month",
                "code": "basic",
                "amount": 3000
            },
            {
                "name": "Smart (Dish) - 3,800 Naira - 1 Month",
                "code": "smart",
                "amount": 3800
            },
            {
                "name": "Classic (Antenna) - 4,500 Naira - 1 Month",
                "code": "classic",
                "amount": 4500
            },
            {
                "name": "Super (Dish) - 7,500 Naira - 1 Month",
                "code": "super",
                "amount": 7500
            },
            {
                "name": "Nova (Antenna) - 500 Naira - 1 Week",
                "code": "nova-weekly",
                "amount": 500
            },
            {
                "name": "Basic (Antenna) - 1000 Naira - 1 Week",
                "code": "basic-weekly",
                "amount": 1000
            },
            {
                "name": "Smart (Dish) - 1,300 Naira - 1 Week",
                "code": "smart-weekly",
                "amount": 1300
            },
            {
                "name": "Classic (Antenna) - 1500 Naira - 1 Week",
                "code": "classic-weekly",
                "amount": 1500
            },
            {
                "name": "Super (Dish) - 2,500 Naira - 1 Week",
                "code": "super-weekly",
                "amount": 2500
            },
            {
                "name": "Chinese (Dish) - 14,000 Naira - 1 month",
                "code": "uni-1",
                "amount": 14000
            },
            {
                "name": "Nova (Antenna) - 1,700 Naira - 1 Month",
                "code": "uni-2",
                "amount": 1700
            },
            {
                "name": "Special (Dish) - 1800 Naira - 1 Week",
                "code": "special-weekly",
                "amount": 1800
            },
            {
                "name": "Special (Dish) - 5600 Naira - 1 Month",
                "code": "special-monthly",
                "amount": 5600
            },
            {
                "name": "Nova (Dish) - 600 Naira - 1 Week",
                "code": "nova-dish-weekly",
                "amount": 600
            },
            {
                "name": "Super (Antenna) - 2,500 Naira - 1 Week",
                "code": "super-antenna-weekly",
                "amount": 2500
            },
            {
                "name": "Super (Antenna) - 7,500 Naira - 1 Month",
                "code": "super-antenna-monthly",
                "amount": 7500
            },
            {
                "name": "Combo Smart and Basic (Dish) - 1,300 Naira - 1 Week",
                "code": "combo-smart-basic-weekly",
                "amount": 1300
            },
            {
                "name": "Combo Special and Basic (Dish) - 1,800 Naira - 1 Week",
                "code": "combo-special-basic-weekly",
                "amount": 1800
            },
            {
                "name": "Combo Super and Classic (Dish) - 2,500 Naira - 1 Week",
                "code": "combo-super-classic--weekly",
                "amount": 2500
            },
            {
                "name": "Combo Smart and Basic (Dish) - 3,800 Naira - 1 Month",
                "code": "combo-smart-basic-monthly",
                "amount": 3800
            },
            {
                "name": "Combo Special and Basic (Dish) - 5,600 Naira - 1 Month",
                "code": "combo-special-basic-monthly",
                "amount": 5600
            },
            {
                "name": "Combo Super and Classic (Dish) - 7,500 Naira - 1 Month",
                "code": "combo-super-classic--monthly",
                "amount": 7500
            }
        ]
    }
}
const useMockPlans = () => {

    const fetchPlans = ({ service, product }) => {
        service = service ? service.toLowerCase() : '';
        product = product ? product.toLowerCase() : '';

        let fetched_plans = (_plans[service] && _plans[service][product]);
        return {
            "response": fetched_plans ? 200 : 400,
            "status": fetched_plans ? "true" : 'false',
            "message": fetched_plans ? "Successful" : 'Failed to get plans',
            ...(fetched_plans ? {
                "details": {
                    "product": product.toUpperCase(),
                    "categories": _plans[service][product]
                }
            } : {})
        }
    }

    return { fetchPlans }
}

export default useMockPlans