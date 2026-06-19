
// ======================================================
//  Luminous Dealer Price List - interactive app
// ======================================================

const DATA = {
  "meta": {
    "effectiveDate": "09th June 2026",
    "applicableRegion": "South Region (excl. Kerala) / PAN India for Solar & GTI",
    "brand": "Luminous Power Technologies Pvt. Ltd."
  },
  "sources": {
    "INBT": {
      "label": "INBT – Inverter & Battery Price List",
      "color": "#3b82f6"
    },
    "HKVA": {
      "label": "HKVA – High KVA Price List (South)",
      "color": "#10b981"
    },
    "HELIOS": {
      "label": "HELIOS – Li-Ion Battery Price List",
      "color": "#ef4444"
    },
    "SOLAR": {
      "label": "SOLAR – Solar Price List (PAN India)",
      "color": "#f59e0b"
    },
    "GTI": {
      "label": "GTI – Grid Tie Inverter Price List",
      "color": "#a855f7"
    }
  },
  "products": [
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ICON 1100",
      "dcV": "12V",
      "gstPrice": 9580,
      "mrp": 14500,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ICON 1600",
      "dcV": "12V",
      "gstPrice": 13096,
      "mrp": 17500,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "OPTIMUS 1250+",
      "dcV": "12V",
      "gstPrice": 7701,
      "mrp": 10500,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ECO VOLT NEO 750",
      "dcV": "12V",
      "gstPrice": 4767,
      "mrp": 7190,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ECO VOLT NEO 850",
      "dcV": "12V",
      "gstPrice": 5009,
      "mrp": 7540,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ECO VOLT NEO 1050",
      "dcV": "12V",
      "gstPrice": 5771,
      "mrp": 9690,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ECO VOLT NEO 1250+",
      "dcV": "12V",
      "gstPrice": 6734,
      "mrp": 9750,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ECO VOLT NEO 1550",
      "dcV": "12V",
      "gstPrice": 9270,
      "mrp": 14500,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ECO VOLT NEO 1650",
      "dcV": "24V",
      "gstPrice": 8464,
      "mrp": 12000,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ZELIO S 1150",
      "dcV": "12V",
      "gstPrice": 7337,
      "mrp": 10000,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ZELIO S 1250",
      "dcV": "12V",
      "gstPrice": 7923,
      "mrp": 10250,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "ZELIO S 1550",
      "dcV": "12V",
      "gstPrice": 10512,
      "mrp": 14950,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "EVO S 750",
      "dcV": "12V",
      "gstPrice": 4767,
      "mrp": 7190,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "EVO S 850",
      "dcV": "12V",
      "gstPrice": 5009,
      "mrp": 7540,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "EVO S 1050",
      "dcV": "12V",
      "gstPrice": 5771,
      "mrp": 9690,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "EVO S 1250",
      "dcV": "12V",
      "gstPrice": 6734,
      "mrp": 9750,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "EVO S 1550",
      "dcV": "12V",
      "gstPrice": 9270,
      "mrp": 14500,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Sine Wave",
      "model": "EVO S 1650",
      "dcV": "24V",
      "gstPrice": 8464,
      "mrp": 12000,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "ECO WATT NEO 800",
      "dcV": "12V",
      "gstPrice": 4437,
      "mrp": 6200,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "ECO WATT NEO 900",
      "dcV": "12V",
      "gstPrice": 4772,
      "mrp": 6700,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "ECO WATT NEO 1050",
      "dcV": "12V",
      "gstPrice": 5148,
      "mrp": 8550,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "ECO WATT NEO 1250 PRO",
      "dcV": "12V",
      "gstPrice": 6143,
      "mrp": 9550,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "ECO WATT NEO 1650",
      "dcV": "24V",
      "gstPrice": 7417,
      "mrp": 11500,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "SHAKTI CHARGE NEO 1150 PRO",
      "dcV": "12V",
      "gstPrice": 5986,
      "mrp": 9150,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "SHAKTI CHARGE NEO 1450 PRO",
      "dcV": "12V",
      "gstPrice": 6741,
      "mrp": 9750,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "SHAKTI CHARGE NEO 1750 PRO",
      "dcV": "12V",
      "gstPrice": 8330,
      "mrp": 14000,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "EVO D 700",
      "dcV": "12V",
      "gstPrice": 4244,
      "mrp": 5900,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "EVO D 800",
      "dcV": "12V",
      "gstPrice": 4437,
      "mrp": 6200,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "EVO D 900",
      "dcV": "12V",
      "gstPrice": 4772,
      "mrp": 6700,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "EVO D 1050",
      "dcV": "12V",
      "gstPrice": 5148,
      "mrp": 8550,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "EVO D 1250",
      "dcV": "12V",
      "gstPrice": 6143,
      "mrp": 9550,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Inverter",
      "wave": "Square Wave",
      "model": "EVO D 1650",
      "dcV": "24V",
      "gstPrice": 7417,
      "mrp": 11500,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Accessory",
      "wave": "",
      "model": "DONGLE CONNECT WiFi",
      "dcV": "–",
      "gstPrice": 118,
      "mrp": 2100,
      "warranty": "3 Years"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 80,
      "model": "ILST 10036 (80Ah)",
      "dcV": "–",
      "gstPrice": 7853,
      "mrp": 10200,
      "warranty": "24+12 Months*",
      "range": "Short Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "range": "Short Tubular",
      "ah": 100,
      "model": "BC 12036ST (100Ah)",
      "dcV": "–",
      "gstPrice": 8364,
      "mrp": null,
      "warranty": "Not Mentioned"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 100,
      "model": "ILST 12042 (100Ah)",
      "dcV": "–",
      "gstPrice": 9544,
      "mrp": 12300,
      "warranty": "24+18 Months*",
      "range": "Short Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 120,
      "model": "RC 15000 Pro (120Ah)",
      "dcV": "–",
      "gstPrice": 10213,
      "mrp": 13800,
      "warranty": "24+24 Months*",
      "range": "Short Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "range": "Short Tubular",
      "ah": 135,
      "model": "BC 16048ST (135Ah)",
      "dcV": "–",
      "gstPrice": 9428,
      "mrp": null,
      "warranty": "Not Mentioned"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 135,
      "model": "SC 16060 (135Ah)",
      "dcV": "–",
      "gstPrice": 11576,
      "mrp": 16100,
      "warranty": "36+24 Months*",
      "range": "Short Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "ILTJ 18148 (150Ah)",
      "dcV": "–",
      "gstPrice": 12726,
      "mrp": 17900,
      "warranty": "36+12 Months*",
      "range": "Jumbo Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "RC 18000ST (150Ah)",
      "dcV": "–",
      "gstPrice": 11564,
      "mrp": 16700,
      "warranty": "18+18 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "range": "Short Tubular",
      "ah": 150,
      "model": "BC 18048ST (150Ah)",
      "dcV": "–",
      "gstPrice": 11247,
      "mrp": null,
      "warranty": "Not Mentioned"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "RC 18000ST PRO (150Ah)",
      "dcV": "–",
      "gstPrice": 11869,
      "mrp": 17200,
      "warranty": "24+24 Months*",
      "range": "Short Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "NEO 18030 (150Ah)",
      "dcV": "–",
      "gstPrice": 12566,
      "mrp": 16200,
      "warranty": "15+15 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "RC 18000 (150Ah)",
      "dcV": "–",
      "gstPrice": 12697,
      "mrp": 16900,
      "warranty": "18+18 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "RC 18000 Pro (150Ah)",
      "dcV": "–",
      "gstPrice": 12900,
      "mrp": 17400,
      "warranty": "24+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "PC 18054 PRO (150Ah)",
      "dcV": "–",
      "gstPrice": 13146,
      "mrp": 18000,
      "warranty": "30+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "PC 18054 TJ PRO (150Ah)",
      "dcV": "–",
      "gstPrice": 12154,
      "mrp": 17700,
      "warranty": "30+24 Months*",
      "range": "Jumbo Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "SC 18060 (150Ah)",
      "dcV": "–",
      "gstPrice": 13476,
      "mrp": 18100,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "ECO 18000 (150Ah)",
      "dcV": "–",
      "gstPrice": 12699,
      "mrp": 17300,
      "warranty": "24+18 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "ILTT 18060 PRO (150Ah)",
      "dcV": "–",
      "gstPrice": 12922,
      "mrp": 18600,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "EC 18060 (150Ah)",
      "dcV": "–",
      "gstPrice": 13886,
      "mrp": 18200,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "LM 18075 (150Ah)",
      "dcV": "–",
      "gstPrice": 17282,
      "mrp": 23900,
      "warranty": "60+15 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 150,
      "model": "UCTT 18066 (150Ah)",
      "dcV": "–",
      "gstPrice": 14724,
      "mrp": 20400,
      "warranty": "42+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 160,
      "model": "PC 20042 (160Ah)",
      "dcV": "–",
      "gstPrice": 13412,
      "mrp": 17700,
      "warranty": "21+21 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 180,
      "model": "RC 24000 PRO (180Ah)",
      "dcV": "–",
      "gstPrice": 15317,
      "mrp": 19900,
      "warranty": "24+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 160,
      "model": "ILTT 20060 (160Ah)",
      "dcV": "–",
      "gstPrice": 14169,
      "mrp": 18500,
      "warranty": "30+30 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 160,
      "model": "ILTT 20066 (160Ah)",
      "dcV": "–",
      "gstPrice": 14674,
      "mrp": 19400,
      "warranty": "36+30 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 180,
      "model": "ILTT 24060 (180Ah)",
      "dcV": "–",
      "gstPrice": 17070,
      "mrp": 22100,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 180,
      "model": "UCTT 24066 (180Ah)",
      "dcV": "–",
      "gstPrice": 17425,
      "mrp": 23200,
      "warranty": "42+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 200,
      "model": "RC 25000 (200Ah)",
      "dcV": "–",
      "gstPrice": 16333,
      "mrp": 21100,
      "warranty": "18+18 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 200,
      "model": "RC 25000 PRO (200Ah)",
      "dcV": "–",
      "gstPrice": 16569,
      "mrp": 21500,
      "warranty": "24+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 200,
      "model": "ILTT 25060 (200Ah)",
      "dcV": "–",
      "gstPrice": 18313,
      "mrp": 23600,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 200,
      "model": "UCTT 25066 (200Ah)",
      "dcV": "–",
      "gstPrice": 18830,
      "mrp": 24700,
      "warranty": "42+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 200,
      "model": "UCTT 25072 (200Ah)",
      "dcV": "–",
      "gstPrice": 19375,
      "mrp": 25800,
      "warranty": "48+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 220,
      "model": "RC 26000 PRO (220Ah)",
      "dcV": "–",
      "gstPrice": 18082,
      "mrp": 23500,
      "warranty": "24+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 220,
      "model": "ILTT 26060 (220Ah)",
      "dcV": "–",
      "gstPrice": 19846,
      "mrp": 25600,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 220,
      "model": "UCTT 26066 (220Ah)",
      "dcV": "–",
      "gstPrice": 20205,
      "mrp": 26900,
      "warranty": "42+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 250,
      "model": "UCTT 28066 (250Ah)",
      "dcV": "–",
      "gstPrice": 22223,
      "mrp": 29500,
      "warranty": "42+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 250,
      "model": "ILTT 28060 (250Ah)",
      "dcV": "–",
      "gstPrice": 21970,
      "mrp": 28300,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 260,
      "model": "UCTT 29072 (260Ah)",
      "dcV": "–",
      "gstPrice": 22768,
      "mrp": 32200,
      "warranty": "48+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 300,
      "model": "ILTT 32060 (300Ah)",
      "dcV": "–",
      "gstPrice": 25166,
      "mrp": 31300,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 200,
      "model": "ECO 25048 (200Ah)",
      "dcV": "–",
      "gstPrice": 17399,
      "mrp": 22799,
      "warranty": "24+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 200,
      "model": "ECO 25060 (200Ah)",
      "dcV": "–",
      "gstPrice": 19227,
      "mrp": 24999,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 220,
      "model": "ECO 26060 (220Ah)",
      "dcV": "–",
      "gstPrice": 20838,
      "mrp": 27199,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Battery",
      "ah": 250,
      "model": "ECO 28060 (250Ah)",
      "dcV": "–",
      "gstPrice": 23070,
      "mrp": 29999,
      "warranty": "36+24 Months*",
      "range": "Tall Tubular"
    },
    {
      "src": "INBT",
      "type": "Boost Charge",
      "series": "Boost Charge Series",
      "model": "LD 1000 Pro",
      "dcV": "36V",
      "gstPrice": 17261,
      "mrp": null,
      "warranty": "2 Years",
      "inbuiltBattery": "—",
      "maxExternalAh": "65 Ah"
    },
    {
      "src": "INBT",
      "type": "Boost Charge",
      "series": "Boost Charge Series",
      "model": "LD 1000 Inbuilt",
      "dcV": "36V",
      "gstPrice": 19387,
      "mrp": null,
      "warranty": "2 Years",
      "inbuiltBattery": "7Ah x 3",
      "maxExternalAh": "7 Ah"
    },
    {
      "src": "INBT",
      "type": "Boost Charge",
      "series": "Boost Charge Series",
      "model": "LD 2000",
      "dcV": "72V",
      "gstPrice": 26892,
      "mrp": null,
      "warranty": "2 Years",
      "inbuiltBattery": "—",
      "maxExternalAh": "65 Ah"
    },
    {
      "src": "INBT",
      "type": "Boost Charge",
      "series": "Boost Charge Series",
      "model": "LD 2000 Inbuilt",
      "dcV": "72V",
      "gstPrice": 30646,
      "mrp": null,
      "warranty": "2 Years",
      "inbuiltBattery": "7Ah x 6",
      "maxExternalAh": "7 Ah"
    },
    {
      "src": "INBT",
      "type": "Boost Charge",
      "series": "Boost Charge Series",
      "model": "LD 3000 Pro",
      "dcV": "72V",
      "gstPrice": 31895,
      "mrp": null,
      "warranty": "2 Years",
      "inbuiltBattery": "—",
      "maxExternalAh": "65 Ah"
    },
    {
      "src": "INBT",
      "type": "Boost Charge",
      "series": "Boost Charge Series",
      "model": "LD 3000 Inbuilt",
      "dcV": "72V",
      "gstPrice": 38024,
      "mrp": null,
      "warranty": "2 Years",
      "inbuiltBattery": "9Ah x 6",
      "maxExternalAh": "9 Ah"
    },
    {
      "src": "INBT",
      "type": "Boost Charge",
      "series": "Boost Charge Series",
      "model": "LD 6000 External",
      "dcV": "192V",
      "gstPrice": 57537,
      "mrp": null,
      "warranty": "2 Years",
      "inbuiltBattery": "—",
      "maxExternalAh": "65 Ah"
    },
    {
      "src": "INBT",
      "type": "Boost Charge",
      "series": "Boost Charge Series",
      "model": "LD 10000 Pro",
      "dcV": "192V-240V (variable)",
      "gstPrice": 86931,
      "mrp": null,
      "warranty": "2 Years",
      "inbuiltBattery": "—",
      "maxExternalAh": "65 Ah"
    },

      {
        "src": "INBT",
        "type": "Boost Charge",
        "series": "Boost Charge Series",
        "model": "LD 10K3P1P (3:1)",
        "dcV": "240V",
        "gstPrice": 137588,
        "mrp": null,
        "warranty": "2 Years",
        "inbuiltBattery": "—",
        "maxExternalAh": "65 Ah"
      },
      {
        "src": "INBT",
        "type": "Boost Charge",
        "series": "Boost Charge Series",
        "model": "LD 20000 (3:1)",
        "dcV": "240V",
        "gstPrice": 231398,
        "mrp": null,
        "warranty": "2 Years",
        "inbuiltBattery": "—",
        "maxExternalAh": "65 Ah"
      },
      {
        "src": "INBT",
        "type": "Boost Charge",
        "series": "Boost Charge Series",
        "model": "LD 2000S (3:1)",
        "dcV": "240V",
        "gstPrice": 225144,
        "mrp": null,
        "warranty": "2 Years",
        "inbuiltBattery": "—",
        "maxExternalAh": "65 Ah"
      },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "ECO WATT NEO 2300 (2KVA/24V)",
      "dcV": "24V",
      "gstPrice": 9685,
      "mrp": 17500,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "EVO D 2300",
      "dcV": "24V",
      "gstPrice": 9685,
      "mrp": 17500,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "EVO S 2300",
      "dcV": "24V",
      "gstPrice": 10793,
      "mrp": 19500,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "Eco Volt Neo 2300+ (2KVA/24V)",
      "dcV": "24V",
      "gstPrice": 10793,
      "mrp": 19500,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "OPTIMUS 2300+ (2KVA/24V)",
      "dcV": "24V",
      "gstPrice": 12536,
      "mrp": 20000,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "OPTIMUS 2800+ (2.5KVA/24V)",
      "dcV": "24V",
      "gstPrice": 15242,
      "mrp": 25990,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "OPTIMUS 3500+ (3KVA/24V)",
      "dcV": "24V",
      "gstPrice": 17629,
      "mrp": 30990,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "OPTIMUS 3800+ (3.5KVA/36V)",
      "dcV": "36V",
      "gstPrice": 18771,
      "mrp": 34990,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "OPTIMUS 4300+ (4KVA/36V)",
      "dcV": "36V",
      "gstPrice": 26002,
      "mrp": 34490,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "OPTIMUS 4500+ (4KVA/48V)",
      "dcV": "48V",
      "gstPrice": 22094,
      "mrp": 39990,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "OPTIMUS 6000+ (5KVA/48V)",
      "dcV": "48V",
      "gstPrice": 31269,
      "mrp": 49990,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "OPTIMUS 6500+ (5.5KVA/72V)",
      "dcV": "72V",
      "gstPrice": 31541,
      "mrp": 59990,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "I-CRUZE 7000+ (6KVA/96V)",
      "dcV": "96V",
      "gstPrice": 46425,
      "mrp": 71990,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "OPTIMUS 8000+ (7.5KVA/96V)",
      "dcV": "96V",
      "gstPrice": 63118,
      "mrp": 99990,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "I-CRUZE 9000+ (7.5KVA/120V)",
      "dcV": "120V",
      "gstPrice": 58951,
      "mrp": 85990,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Inverter",
      "series": "HKVA UPS",
      "model": "OPTIMUS 11000+ (10KVA/120V)",
      "dcV": "120V",
      "gstPrice": 83258,
      "mrp": 109990,
      "warranty": "3 Years"
    },
    {
      "src": "HKVA",
      "type": "Accessory",
      "series": "HKVA",
      "model": "SYNC-X WI-FI DATA LOGGER",
      "dcV": "–",
      "gstPrice": 118,
      "mrp": 4200,
      "warranty": "No Warranty"
    },
    {
      "src": "HELIOS",
      "type": "Helios Li-Ion",
      "series": "Helios Series",
      "model": "BATT LI-ION HELIOS HL 12X100 12.8V 100AH",
      "dcV": "12.8V",
      "gstPrice": 22923,
      "mrp": null,
      "warranty": "5 Years or 2000 Cycles"
    },
    {
      "src": "HELIOS",
      "type": "Helios Li-Ion",
      "series": "Helios Series",
      "model": "BATT LI-ION HELIOS HL 25X100 25.6V 100AH",
      "dcV": "25.6V",
      "gstPrice": 39045,
      "mrp": null,
      "warranty": "5 Years or 2000 Cycles"
    },
    {
      "src": "HELIOS",
      "type": "Helios Li-Ion",
      "series": "Helios Series",
      "model": "BATT LI-ION HELIOS HL 51X100 51.2V 100AH",
      "dcV": "51.2V",
      "gstPrice": 76012,
      "mrp": null,
      "warranty": "5 Years or 2000 Cycles"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "NXG e Series (PWM Solar Inverters)",
      "model": "NXG 850e",
      "dcV": "12V",
      "gstPrice": 5311,
      "mrp": 7000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "NXG e Series (PWM Solar Inverters)",
      "model": "NXG 1150e",
      "dcV": "12V",
      "gstPrice": 6773,
      "mrp": 10000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "NXG e Series (PWM Solar Inverters)",
      "model": "NXG 1450e",
      "dcV": "12V",
      "gstPrice": 8188,
      "mrp": 12000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "NXG e Series (PWM Solar Inverters)",
      "model": "NXG 1850e",
      "dcV": "24V",
      "gstPrice": 9651,
      "mrp": 14000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "NXG e Series (PWM Solar Inverters)",
      "model": "NXG 2350",
      "dcV": "24V",
      "gstPrice": 12234,
      "mrp": 24500,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "NXG PRO Series (MPPT Solar Inverters)",
      "model": "SOLAR S/W UPS NXG PRO e 1KVA/12V",
      "dcV": "12V",
      "gstPrice": 11487,
      "mrp": 17500,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "NXG PRO Series (MPPT Solar Inverters)",
      "model": "S/W UPS SOLAR NXG PRO e 1KVA/24V",
      "dcV": "24V",
      "gstPrice": 11487,
      "mrp": 18000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "Solarverter Series (PWM Solar PCUs)",
      "model": "SOLARVERTER 3KVA/48V",
      "dcV": "48V",
      "gstPrice": 20602,
      "mrp": 30000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "Solarverter Series (PWM Solar PCUs)",
      "model": "SOLARVERTER 5KVA/48V (PWM)",
      "dcV": "48V",
      "gstPrice": 38697,
      "mrp": 60000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "NXP Series (PWM)",
      "model": "NXP 3500",
      "dcV": "24V",
      "gstPrice": 17331,
      "mrp": 25000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "NXP Pro (MPPT)",
      "model": "NXP PRO 3500",
      "dcV": "24V",
      "gstPrice": 28472,
      "mrp": 50000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "Solarverter PRO Series (MPPT Solar PCUs)",
      "model": "SOLARVERTER PRO 2KVA/24V eco",
      "dcV": "24V",
      "gstPrice": 20748,
      "mrp": 40000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "Solarverter PRO Series (MPPT Solar PCUs)",
      "model": "SOLARVERTER PRO 3KVA/36V Eco",
      "dcV": "36V",
      "gstPrice": 30080,
      "mrp": 60000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "Solarverter PRO Series (MPPT Solar PCUs)",
      "model": "SOLARVERTER PRO 3.5KVA/48V",
      "dcV": "48V",
      "gstPrice": 38836,
      "mrp": 70000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "Solarverter PRO Series (MPPT Solar PCUs)",
      "model": "SOLARVERTER PRO 5KVA/48V",
      "dcV": "48V",
      "gstPrice": 51443,
      "mrp": 100000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "Solarverter PRO Series (MPPT Solar PCUs)",
      "model": "SOLARVERTER PRO 6KVA/96V",
      "dcV": "96V",
      "gstPrice": 57442,
      "mrp": 120000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "Solarverter PRO Series (MPPT Solar PCUs)",
      "model": "SOLARVERTER PRO 7.5KVA/96V ECO",
      "dcV": "96V",
      "gstPrice": 78130,
      "mrp": 150000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "Solarverter PRO Series (MPPT Solar PCUs)",
      "model": "SOLARVERTER PRO 10.1KVA/120V ECO",
      "dcV": "120V",
      "gstPrice": 100684,
      "mrp": 200000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "NXT+ Series (MPPT Solar PCUs)",
      "model": "PCU NXT+ 7.5 KVA/96V",
      "dcV": "96V",
      "gstPrice": 70606,
      "mrp": 149900,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Inverter",
      "series": "Solar NXE PRO Series",
      "model": "SOLAR NXE PRO 15KVA/240V",
      "dcV": "240V",
      "gstPrice": 152930,
      "mrp": 299550,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "Hybrid TX Series (Hybrid Inverters)",
      "model": "HYBRID TX 3KVA + Dongle (PV 3KW)",
      "dcV": "48V",
      "gstPrice": 38600,
      "mrp": 82000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "Hybrid TX Series (Hybrid Inverters)",
      "model": "HYBRID TX 4KVA + Dongle (PV 4KW)",
      "dcV": "48V",
      "gstPrice": 50440,
      "mrp": 98000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "Hybrid TX Series (Hybrid Inverters)",
      "model": "HYBRID TX 5KVA + Dongle (PV 5KW)",
      "dcV": "48V",
      "gstPrice": 54097,
      "mrp": 110000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "Hybrid TX Series (Hybrid Inverters)",
      "model": "HYBRID TX 3.75KVA/48V",
      "dcV": "48V",
      "gstPrice": 38600,
      "mrp": 82000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "HYBRID High Frequency (1 phase) Wall Mount",
      "model": "SOLAR HYBRID INV HF NXH 130 A48 3kW",
      "dcV": "48V",
      "gstPrice": 78795,
      "mrp": 138000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "HYBRID High Frequency (1 phase) Wall Mount",
      "model": "SOLAR HYBRID INV HF NXH 150 A48 5KW",
      "dcV": "48V",
      "gstPrice": 93976,
      "mrp": 165000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "HYBRID High Frequency (3 phase) Wall Mount",
      "model": "SOLAR HYBRID INV HF NXH 308 A 8KW",
      "dcV": "120V-600V",
      "gstPrice": 203447,
      "mrp": 357000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "HYBRID High Frequency (3 phase) Wall Mount",
      "model": "SOLAR HYBRID INV HF NXH 310 A 10KW",
      "dcV": "120V-600V",
      "gstPrice": 217688,
      "mrp": 382000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "HYBRID High Frequency (3 phase) Wall Mount",
      "model": "SOLAR HYBRID INV HF NXH 312 A 12KW",
      "dcV": "120V-600V",
      "gstPrice": 226835,
      "mrp": 402000,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Battery",
      "series": "Tubular Solar Batteries",
      "model": "LPT 1240L",
      "dcV": "12V",
      "gstPrice": 5534,
      "mrp": 7200,
      "warranty": "60 Months* (36+24)"
    },
    {
      "src": "SOLAR",
      "type": "Solar Battery",
      "series": "Tubular Solar Batteries",
      "model": "LPT 1240H",
      "dcV": "12V",
      "gstPrice": 6131,
      "mrp": 8000,
      "warranty": "72 Months* (60+12)"
    },
    {
      "src": "SOLAR",
      "type": "Solar Battery",
      "series": "Tubular Solar Batteries",
      "model": "LPT 1280H",
      "dcV": "12V",
      "gstPrice": 9755,
      "mrp": 12800,
      "warranty": "72 Months* (60+12)"
    },
    {
      "src": "SOLAR",
      "type": "Solar Battery",
      "series": "Tall Tubular Solar Batteries",
      "model": "LPTT 12100H",
      "dcV": "12V",
      "gstPrice": 12043,
      "mrp": 15700,
      "warranty": "72 Months* (60+12)"
    },
    {
      "src": "SOLAR",
      "type": "Solar Battery",
      "series": "Tall Tubular Solar Batteries",
      "model": "LPTT 12120H",
      "dcV": "12V",
      "gstPrice": 12862,
      "mrp": 16700,
      "warranty": "72 Months* (60+12)"
    },
    {
      "src": "SOLAR",
      "type": "Solar Battery",
      "series": "Tall Tubular Solar Batteries",
      "model": "LPTT 12150L",
      "dcV": "12V",
      "gstPrice": 14778,
      "mrp": 19400,
      "warranty": "60 Months* (36+24)"
    },
    {
      "src": "SOLAR",
      "type": "Solar Battery",
      "series": "Tall Tubular Solar Batteries",
      "model": "LPTT 12150H",
      "dcV": "12V",
      "gstPrice": 16133,
      "mrp": 21200,
      "warranty": "72 Months* (60+12)"
    },
    {
      "src": "SOLAR",
      "type": "Solar Battery",
      "series": "Tall Tubular Solar Batteries",
      "model": "LPTT 12200L",
      "dcV": "12V",
      "gstPrice": 19994,
      "mrp": 25900,
      "warranty": "60 Months* (36+24)"
    },
    {
      "src": "SOLAR",
      "type": "Solar Battery",
      "series": "Tall Tubular Solar Batteries",
      "model": "LPTT 12200H",
      "dcV": "12V",
      "gstPrice": 20957,
      "mrp": 27200,
      "warranty": "72 Months* (60+12)"
    },
    {
      "src": "SOLAR",
      "type": "Charge Controller",
      "series": "Solar Charge Controllers",
      "model": "SCC 1206",
      "dcV": "–",
      "gstPrice": 365,
      "mrp": 745,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Charge Controller",
      "series": "Solar Charge Controllers",
      "model": "SCC 1210",
      "dcV": "–",
      "gstPrice": 514,
      "mrp": 1120,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Charge Controller",
      "series": "Solar Charge Controllers",
      "model": "SCC 1220",
      "dcV": "–",
      "gstPrice": 772,
      "mrp": 2150,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Charge Controller",
      "series": "Solar Charge Controllers",
      "model": "SCC 1206e",
      "dcV": "–",
      "gstPrice": 365,
      "mrp": 745,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Charge Controller",
      "series": "Solar Charge Controllers",
      "model": "SCC 1210e",
      "dcV": "–",
      "gstPrice": 514,
      "mrp": 1120,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Charge Controller",
      "series": "Solar Charge Controllers",
      "model": "SCC 1220e",
      "dcV": "–",
      "gstPrice": 772,
      "mrp": 2150,
      "warranty": "3 Years"
    },
    {
      "src": "SOLAR",
      "type": "Charge Controller",
      "series": "Solar Charge Controllers",
      "model": "SCC 1250",
      "dcV": "–",
      "gstPrice": 1105,
      "mrp": 5150,
      "warranty": "3 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (1-Phase)",
      "model": "NXIT130 3KW/1P + Dongle",
      "dcV": "–",
      "gstPrice": 18143,
      "mrp": 74000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (1-Phase)",
      "model": "NXIT150 5KW/1P + Dongle",
      "dcV": "–",
      "gstPrice": 30817,
      "mrp": 115000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (1-Phase)",
      "model": "NXI 140 (4kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 29934,
      "mrp": 98000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (1-Phase)",
      "model": "NXI 150 (5kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 32033,
      "mrp": 105000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 305 (5kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 47980,
      "mrp": 121000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 306 (6kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 53767,
      "mrp": 148000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 308 (8kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 60523,
      "mrp": 187000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 310 (10kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 62065,
      "mrp": 202000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXIT310 (10KW) + Dongle",
      "dcV": "–",
      "gstPrice": 59637,
      "mrp": 223000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 312 (12kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 66738,
      "mrp": 225000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 315 (15kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 69656,
      "mrp": 272000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 320 (20kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 83400,
      "mrp": 326000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 325 (25kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 102039,
      "mrp": 345000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 330 (30kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 115579,
      "mrp": 365000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 350 (50kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 158458,
      "mrp": 571000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 360 (60kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 169258,
      "mrp": 686000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 380 (80kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 264167,
      "mrp": 750000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI 3100 (100kW) (exc. Dongle)",
      "dcV": "–",
      "gstPrice": 282241,
      "mrp": 937000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI A3250-HV (250kW) (800Vac Utility Grade GTI)",
      "dcV": "–",
      "gstPrice": 438697,
      "mrp": 1621000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Grid Tie Inverter",
      "series": "NXI Series (3-Phase)",
      "model": "NXI A3350-HV (350kW) (800Vac Utility Grade GTI)",
      "dcV": "–",
      "gstPrice": 583267,
      "mrp": 2137000,
      "warranty": "10 Years"
    },
    {
      "src": "GTI",
      "type": "Accessory",
      "series": "GTI Accessories",
      "model": "S3-WIFI-ST (GTI WiFi Dongle)",
      "dcV": "–",
      "gstPrice": 118,
      "mrp": null,
      "warranty": "No Warranty"
    },
    {
      "src": "GTI",
      "type": "Accessory",
      "series": "GTI Accessories",
      "model": "DONGLE S4 WI-FI USB (for NXI 140/150)",
      "dcV": "–",
      "gstPrice": 118,
      "mrp": null,
      "warranty": "No Warranty"
    },
    {
      "src": "GTI",
      "type": "Accessory",
      "series": "GTI Accessories",
      "model": "GTI ARRAY MANAGEMENT UNIT AI 2000 (250kW & 350kW)",
      "dcV": "–",
      "gstPrice": 203137,
      "mrp": 330000,
      "warranty": "10 Years"
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "Polycrystalline Solar Panels",
      "model": "Poly 170W/12V",
      "dcV": "12V",
      "gstPrice": 4006,
      "mrp": 6000,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "585W Panel/Pallet",
      "model": "PV MOD LUM 24585T144 BI-TS",
      "dcV": "–",
      "gstPrice": 10548,
      "mrp": 19600,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "585W Panel/Pallet",
      "model": "PV MOD LUM 24585T144 BI-TS 31",
      "dcV": "–",
      "gstPrice": 10223,
      "mrp": 607600,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "585W Panel/Pallet",
      "model": "PV MOD LUM 24585TG144 BI-GL",
      "dcV": "–",
      "gstPrice": 10548,
      "mrp": 19700,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "585W Panel/Pallet",
      "model": "PV MOD LUM 24585TG144 BI-GL 31",
      "dcV": "–",
      "gstPrice": 10223,
      "mrp": 610700,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "590W Panel/Pallet",
      "model": "PV MOD LUM 24590T144 BI-TS",
      "dcV": "–",
      "gstPrice": 10638,
      "mrp": 19800,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "590W Panel/Pallet",
      "model": "PV MOD LUM 24590T144 BI-TS-31",
      "dcV": "–",
      "gstPrice": 10310,
      "mrp": 613800,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "595W Panel/Pallet",
      "model": "PV MOD LUM 24595TG144 BI-GL V1",
      "dcV": "–",
      "gstPrice": 10728,
      "mrp": 20100,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "610W Panel/Pallet",
      "model": "PV MOD LUM 610TG132 BI-GL V1",
      "dcV": "–",
      "gstPrice": 10999,
      "mrp": 20700,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "610W Panel/Pallet",
      "model": "PV MOD LUM 610TG132 BI-GL SPGS36",
      "dcV": "–",
      "gstPrice": 10659,
      "mrp": 745200,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "615W Panel/Pallet",
      "model": "PV MOD LUM 615TG132 BI-GL V1",
      "dcV": "–",
      "gstPrice": 11089,
      "mrp": 20800,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "615W Panel/Pallet",
      "model": "PV MOD LUM 615TG132 BI-GL SPGS36",
      "dcV": "–",
      "gstPrice": 10747,
      "mrp": 748800,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "620W Panel/Pallet",
      "model": "PV MOD LUM 620TG132 BI-GL V1",
      "dcV": "–",
      "gstPrice": 11179,
      "mrp": 21500,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "620W Panel/Pallet",
      "model": "PV MOD LUM 620TG132 BI-GL SPGS36",
      "dcV": "–",
      "gstPrice": 10834,
      "mrp": 774000,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "625W Panel/Pallet",
      "model": "PV MOD LUM 625TG132 BI-GL V1",
      "dcV": "–",
      "gstPrice": 11269,
      "mrp": 21700,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "625W Panel/Pallet",
      "model": "PV MOD LUM 625TG132 BI-GL SPGS36",
      "dcV": "–",
      "gstPrice": 10922,
      "mrp": 781200,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "630W Panel/Pallet",
      "model": "PV MOD LUM 630TG132 BI-GL V1",
      "dcV": "–",
      "gstPrice": 11359,
      "mrp": 22500,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Solar Panel",
      "series": "630W Panel/Pallet",
      "model": "PV MOD LUM 630TG132 BI-GL SPGS36",
      "dcV": "–",
      "gstPrice": 11009,
      "mrp": 810000,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG850e-12V1N-B40L4N-170W-1N",
      "dcV": "12V",
      "gstPrice": 28427,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG850e-12V1N-B40H4N-170W-1N",
      "dcV": "12V",
      "gstPrice": 30555,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG850e-12V1N-B80H2N-170W-1N",
      "dcV": "12V",
      "gstPrice": 26092,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG850e-12V1N-B100H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 19447,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG850e-12V1N-B120H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 20176,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG850e-12V1N-B150L1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 21882,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG850e-12V1N-B150H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 23087,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG850e-12V1N-B200L1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 26523,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG850e-12V1N-B200H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 27380,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1150e-12V1N-B40L4N-170W-1N",
      "dcV": "12V",
      "gstPrice": 29728,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1150e-12V1N-B40H4N-170W-1N",
      "dcV": "12V",
      "gstPrice": 31856,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1150e-12V1N-B80H2N-170W-1N",
      "dcV": "12V",
      "gstPrice": 27393,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1150e-12V1N-B100H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 20749,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1150e-12V1N-B120H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 21478,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1150e-12V1N-B150L1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 23183,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1150e-12V1N-B150H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 24388,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1150e-12V1N-B200L1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 27824,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1150e-12V1N-B200H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 28681,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1450e-12V1N-B40L4N-170W-1N",
      "dcV": "12V",
      "gstPrice": 30987,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1450e-12V1N-B80H2N-170W-1N",
      "dcV": "12V",
      "gstPrice": 28652,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1450e-12V1N-B100H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 22007,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1450e-12V1N-B120H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 22736,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1450e-12V1N-B150L1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 24441,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1450e-12V1N-B150H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 25647,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1450e-12V1N-B200L1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 29083,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG e Series SPGS",
      "model": "NXG1450e-12V1N-B200H1N-170W-1N",
      "dcV": "12V",
      "gstPrice": 29940,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V31N-B150L62N-585WBI-TSPL-31N",
      "dcV": "24V",
      "gstPrice": 1398441,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V31N-B150H62N-585WBI-TSPL-31N",
      "dcV": "24V",
      "gstPrice": 1473175,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B80H2N-585WBI-TS-1N",
      "dcV": "24V",
      "gstPrice": 36496,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B100H2N-585WBI-TS-1N",
      "dcV": "24V",
      "gstPrice": 40568,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B150L2N-585WBI-TS-1N",
      "dcV": "24V",
      "gstPrice": 45436,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B150H2N-585WBI-TS-1N",
      "dcV": "24V",
      "gstPrice": 47847,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B200L2N-585WBI-TS-1N",
      "dcV": "24V",
      "gstPrice": 54718,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B200H2N-585WBI-TS-1N",
      "dcV": "24V",
      "gstPrice": 56432,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850-24V1N-B80H4N-585WBI-TS-1N",
      "dcV": "24V",
      "gstPrice": 53857,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850-24V1N-B150L2N-585WBI-TS-1N",
      "dcV": "24V",
      "gstPrice": 45436,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850-24V1N-B150H2N-P590BI-TS-2N",
      "dcV": "24V",
      "gstPrice": 58575,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850-24V1N-B200H2N-P590BI-TS-2N",
      "dcV": "24V",
      "gstPrice": 67161,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B80H2N-P590BI-TS-2N",
      "dcV": "24V",
      "gstPrice": 47225,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B100H2N-P590BI-TS-2N",
      "dcV": "24V",
      "gstPrice": 51296,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B120H2N-P590BI-TS-2N",
      "dcV": "24V",
      "gstPrice": 52754,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B150L2N-P590BI-TS-2N",
      "dcV": "24V",
      "gstPrice": 56164,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B150H2N-P590BI-TS-2N",
      "dcV": "24V",
      "gstPrice": 58575,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B200L2N-P590BI-TS-2N",
      "dcV": "24V",
      "gstPrice": 65447,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V1N-B200H2N-P590BI-TS-2N",
      "dcV": "24V",
      "gstPrice": 67161,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V31N-B150L62N-P590BI-TSPL-31N",
      "dcV": "24V",
      "gstPrice": 1401132,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V31N-B150H62N-P590BI-TSPL-31N",
      "dcV": "24V",
      "gstPrice": 1475866,
      "mrp": null,
      "warranty": ""
    },
    {
      "src": "SOLAR",
      "type": "Combo",
      "series": "NXG SPGS",
      "model": "NXG1850e-24V31N-B200L62N-P590BI-TSPL-31N",
      "dcV": "24V",
      "gstPrice": 1688887,
      "mrp": null,
      "warranty": ""
    }
  ]
};

const sourceOrder = ['INBT', 'HKVA', 'HELIOS', 'SOLAR', 'GTI'];
const sourceConfig = DATA.sources;

// selectedKeys: products currently ticked via checkbox (drives the message).
// currentMessageKeys: snapshot of keys the message panel currently reflects,
// used to auto-refresh the draft when the global discount changes.
let selectedKeys = new Set();
let currentMessageKeys = [];
let messageDirty = false;
let globalDiscount = 0;

function formatINR(value) {
  const n = Math.round(Number(value) || 0);
  return new Intl.NumberFormat('en-IN').format(n);
}

function normalizeDiscount(value) {
  const raw = String(value ?? '').trim();
  if (!raw) return 0;
  const n = Number(raw);
  if (!Number.isFinite(n)) return 0;
  return Math.trunc(n);
}

function discountSuffix(discount) {
  const d = normalizeDiscount(discount);
  if (d > 0) return ` I${Math.abs(d)}`;
  if (d < 0) return ` D${Math.abs(d)}`;
  return '';
}

function applyDiscount(price, discount) {
  const base = Number(price) || 0;
  const d = normalizeDiscount(discount);
  return Math.round(base * (1 + d / 100));
}

function productKey(index) {
  return `p-${index}`;
}

function productFromKey(key) {
  const idx = Number(String(key).replace(/^p-/, ''));
  return DATA.products[idx];
}

function getGlobalDiscount() {
  const el = document.getElementById('globalDiscount');
  if (!el) return globalDiscount;
  const raw = el.value.trim();
  if (raw === '-' || raw === '+') return 0;
  const parsed = normalizeDiscount(raw);
  globalDiscount = parsed;
  return parsed;
}

function setGlobalDiscount(value) {
  globalDiscount = normalizeDiscount(value);
  const el = document.getElementById('globalDiscount');
  if (el) el.value = String(globalDiscount);
  try {
    localStorage.setItem('luminousGlobalDiscount', String(globalDiscount));
  } catch (err) {
    console.warn('Could not save global discount', err);
  }
}

function loadGlobalDiscount() {
  try {
    const rawSaved = localStorage.getItem('luminousGlobalDiscountRaw');
    if (rawSaved !== null) {
      const el = document.getElementById('globalDiscount');
      if (el) el.value = rawSaved;
      globalDiscount = normalizeDiscount(rawSaved);
      return;
    }
    const saved = localStorage.getItem('luminousGlobalDiscount');
    if (saved !== null) {
      globalDiscount = normalizeDiscount(saved);
      return;
    }
  } catch (err) {
    console.warn('Could not load global discount', err);
  }
  globalDiscount = 0;
  const el = document.getElementById('globalDiscount');
  if (el) el.value = '0';
}

function productSearchBlob(p) {
  return [
    p.model, p.type, p.series || '', p.wave || '', p.src || '', p.dcV || '',
    p.warranty || '', p.range || '', p.inbuiltBattery || '', p.maxExternalAh || '',
    String(p.ah || '')
  ].join(' ').toLowerCase();
}

function currentAdjustedPrice(p) {
  return applyDiscount(p.gstPrice, getGlobalDiscount());
}

function updateCounts(list) {
  const counts = { INBT: 0, HKVA: 0, HELIOS: 0, SOLAR: 0, GTI: 0 };
  list.forEach((p) => {
    if (counts[p.src] !== undefined) counts[p.src]++;
  });
  sourceOrder.forEach((src) => {
    const el = document.getElementById(`cnt-${src}`);
    if (el) el.textContent = counts[src] || 0;
  });
  const total = document.getElementById('totalCount');
  if (total) total.textContent = list.length;
}

function getFilteredProducts() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const src = document.getElementById('filterSource').value;
  const typ = document.getElementById('filterType').value;
  const maxP = parseInt(document.getElementById('filterPrice').value) || Infinity;

  return DATA.products.filter((p) => {
    const price = Number(p.gstPrice) || 0;
    return (!q || productSearchBlob(p).includes(q)) &&
      (!src || p.src === src) &&
      (!typ || p.type === typ) &&
      (price <= maxP);
  });
}

function applyFilters() {
  renderResults(getFilteredProducts());
}

/* ============================================================
   Selection (checkboxes) + selection summary bar
   ============================================================ */

function updateSelectionBar() {
  const n = selectedKeys.size;
  const countEl = document.getElementById('selectedCount');
  if (countEl) countEl.textContent = `${n} selected`;

  const genBtn = document.getElementById('generateBtn');
  if (genBtn) genBtn.disabled = n === 0;

  const clearBtn = document.getElementById('clearSelBtn');
  if (clearBtn) clearBtn.classList.toggle('visible', n > 0);
}

function setRowSelected(key, selected) {
  const row = document.getElementById(`row-${key}`);
  if (row) row.classList.toggle('selected', selected);
  const cb = row ? row.querySelector('.row-check') : document.querySelector(`.row-check[data-key="${key}"]`);
  if (cb) cb.checked = selected;
}

function toggleSelect(key) {
  const nowSelected = !selectedKeys.has(key);
  if (nowSelected) selectedKeys.add(key);
  else selectedKeys.delete(key);
  setRowSelected(key, nowSelected);
  syncSectionSelectAll(key);
  updateSelectionBar();
}

function syncSectionSelectAll(key) {
  const row = document.getElementById(`row-${key}`);
  if (!row) return;
  const section = row.closest('.source-section');
  if (!section) return;
  const allChecks = Array.from(section.querySelectorAll('.row-check'));
  const allOn = allChecks.length > 0 && allChecks.every((cb) => selectedKeys.has(cb.dataset.key));
  const headCb = section.querySelector('.select-all-check');
  if (headCb) headCb.checked = allOn;
}

function toggleSelectAllInSection(checkbox) {
  const section = checkbox.closest('.source-section');
  if (!section) return;
  const rowChecks = section.querySelectorAll('.row-check');
  rowChecks.forEach((cb) => {
    const key = cb.dataset.key;
    if (checkbox.checked) selectedKeys.add(key);
    else selectedKeys.delete(key);
    setRowSelected(key, checkbox.checked);
  });
  updateSelectionBar();
}

function clearSelection() {
  selectedKeys.forEach((key) => setRowSelected(key, false));
  selectedKeys.clear();
  document.querySelectorAll('.select-all-check').forEach((cb) => { cb.checked = false; });
  updateSelectionBar();
}

function reapplySelectionState() {
  selectedKeys.forEach((key) => setRowSelected(key, true));
  document.querySelectorAll('.source-section').forEach((section) => {
    const allChecks = Array.from(section.querySelectorAll('.row-check'));
    const allOn = allChecks.length > 0 && allChecks.every((cb) => selectedKeys.has(cb.dataset.key));
    const headCb = section.querySelector('.select-all-check');
    if (headCb) headCb.checked = allOn;
  });
  updateSelectionBar();
}

/* ============================================================
   Rendering
   ============================================================ */

function renderResults(list) {
  const container = document.getElementById('resultsContainer');
  updateCounts(list);

  if (!list.length) {
    container.innerHTML = `<div class="no-results">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <p>No products match your search.</p>
    </div>`;
    return;
  }

  const grouped = {};
  list.forEach((p) => {
    const idx = DATA.products.indexOf(p);
    const key = productKey(idx);
    if (!grouped[p.src]) grouped[p.src] = [];
    grouped[p.src].push({ p, idx, key });
  });

  let html = '<div class="table-wrap">';

  sourceOrder.forEach((src) => {
    if (!grouped[src] || !grouped[src].length) return;
    const cfg = sourceConfig[src] || { label: src, color: '#64748b' };

    html += `<section class="source-section">
      <div class="source-header">
        <span class="source-dot" style="background:${cfg.color || '#64748b'}"></span>
        <span class="source-name">${cfg.label || src}</span>
        <span class="source-count">${grouped[src].length} products</span>
      </div>
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th class="select-th"><input type="checkbox" class="select-all-check" title="Select all in this list" onclick="toggleSelectAllInSection(this)"></th>
              <th>Model</th>
              <th>Type</th>
              <th>DC Voltage</th>
              <th>GST Price</th>
              <th>MRP</th>
              <th>Warranty</th>
            </tr>
          </thead>
          <tbody>`;

    grouped[src].forEach(({ p, idx, key }) => {
      const typeClassName = `type-${String(p.type || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

      let seriesText = p.series || p.wave || p.range || '';
      if (p.type === 'Boost Charge') {
        const extra = [];
        if (p.inbuiltBattery && p.inbuiltBattery !== '—') extra.push(`Inbuilt: ${p.inbuiltBattery}`);
        if (p.maxExternalAh) extra.push(`Max External: ${p.maxExternalAh}`);
        seriesText = extra.length ? [seriesText, extra.join(' · ')].filter(Boolean).join(' · ') : seriesText;
      }
      const seriesHtml = seriesText ? `<div class="model-series">${seriesText}</div>` : '';

      const discount = getGlobalDiscount();
      const adjustedPrice = currentAdjustedPrice(p);
      const priceHtml = discount === 0
        ? `<div class="price-gst">₹${formatINR(adjustedPrice)}</div>`
        : `<div class="price-gst">₹${formatINR(adjustedPrice)} <span class="price-delta">${discount > 0 ? '+' : ''}${discount}%</span></div><div class="price-base">Base ₹${formatINR(p.gstPrice)}</div>`;
      const mrpHtml = p.mrp ? `<div class="price-mrp">Base ₹${formatINR(p.mrp)}</div>` : `<div class="price-mrp">—</div>`;

      html += `<tr id="row-${key}" class="product-row" onclick="toggleSelect('${key}')">
        <td class="select-cell" onclick="event.stopPropagation()">
          <input type="checkbox" class="row-check" data-key="${key}" onclick="toggleSelect('${key}')">
        </td>
        <td>
          <div class="model-name">${p.model}</div>
          ${seriesHtml}
        </td>
        <td><span class="type-badge ${typeClassName}">${p.type}</span></td>
        <td>${p.dcV && p.dcV !== '–' ? p.dcV : '—'}</td>
        <td>${priceHtml}</td>
        <td>${mrpHtml}</td>
        <td><div class="warranty-info">${p.warranty || '—'}</div></td>
      </tr>`;
    });

    html += `</tbody></table></div></section>`;
  });

  html += '</div>';
  container.innerHTML = html;

  reapplySelectionState();
}

function handleGlobalDiscountInput(value) {
  try { localStorage.setItem('luminousGlobalDiscountRaw', value); } catch (e) {}
  globalDiscount = normalizeDiscount(value);
  renderResults(getFilteredProducts());

  if (currentMessageKeys.length && !messageDirty) {
    const products = currentMessageKeys.map(productFromKey).filter(Boolean);
    if (products.length) setMessageValue(buildCombinedMessage(products));
  }
}

/* ============================================================
   Message building (supports one or many selected products)
   ============================================================ */

function buildMessageItem(p, index, total) {
  const adjustedPrice = currentAdjustedPrice(p);
  const lines = [];
  const prefix = total > 1 ? `${index + 1}) ` : '';
  lines.push(`${prefix}*${p.model}*`);

  let typeLine = `🏷️ ${p.type}`;
  if (p.series) typeLine += ` – ${p.series}`;
  else if (p.wave) typeLine += ` – ${p.wave}`;
  else if (p.range) typeLine += ` – ${p.range}`;
  lines.push(typeLine);

  if (p.dcV && p.dcV !== '–') lines.push(`⚡ DC Voltage: ${p.dcV}`);
  if (p.type === 'Boost Charge') {
    if (p.inbuiltBattery && p.inbuiltBattery !== '—') lines.push(`🔋 Inbuilt Battery: ${p.inbuiltBattery}`);
    if (p.maxExternalAh) lines.push(`🔌 Max External: ${p.maxExternalAh}`);
  }
  lines.push(`💰 Price (GST Incl.): ₹${formatINR(adjustedPrice)}`);
  lines.push(`🛡️ Warranty: ${p.warranty || '—'}`);

  return lines.join('\n');
}

function buildCombinedMessage(products) {
  const discount = getGlobalDiscount();
  const suffix = discountSuffix(discount);
  const total = products.length;

  let msg = total > 1
    ? `*Luminous – Price Quote (${total} items)*\n\n`
    : `*Luminous ${products[0].model}*\n\n`;

  msg += products.map((p, i) => buildMessageItem(p, i, total)).join('\n\n');

  if (total > 1) {
    const sum = products.reduce((acc, p) => acc + currentAdjustedPrice(p), 0);
    msg += `\n\n*Total (GST Incl.): ₹${formatINR(sum)}*`;
  }

  msg += `\n\n_Price is inclusive of GST. Subject to change without notice.${suffix.trim() ? (' ' + suffix.trim()) : ''}_`;
  return msg;
}

function setMessageValue(value) {
  document.getElementById('messageText').value = value;
}

function getMessageValue() {
  return document.getElementById('messageText').value || '';
}

function resetCopyButtonLabel() {
  const btn = document.getElementById('copyBtn');
  btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Message';
  btn.classList.remove('copied');
}

function generateMessageForSelection() {
  if (selectedKeys.size === 0) return;
  const keys = Array.from(selectedKeys);
  const products = keys.map(productFromKey).filter(Boolean);
  if (!products.length) return;

  currentMessageKeys = keys;
  const panel = document.getElementById('messagePanel');
  panel.classList.add('visible');

  setMessageValue(buildCombinedMessage(products));
  messageDirty = false;

  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  resetCopyButtonLabel();
}

function copyMessage() {
  const text = getMessageValue();
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
    btn.classList.add('copied');
    setTimeout(resetCopyButtonLabel, 2200);
  }).catch(() => {
    alert('Copy failed. Select the text and copy manually.');
  });
}

function resetFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('filterSource').value = '';
  document.getElementById('filterType').value = '';
  document.getElementById('filterPrice').value = '';
  applyFilters();
}

function initMessageEditor() {
  const textarea = document.getElementById('messageText');
  textarea.addEventListener('input', () => {
    messageDirty = true;
  });

  const discountInput = document.getElementById('globalDiscount');
  if (discountInput) {
    discountInput.addEventListener('input', (e) => {
      handleGlobalDiscountInput(e.target.value);
    });
  }
}

function init() {
  loadGlobalDiscount();
  initMessageEditor();
  applyFilters();
  document.getElementById('messagePanel').classList.add('visible');
  document.getElementById('messageText').value = 'Tick the checkbox next to one or more products, then click Generate Message to draft an editable quote here.';
  updateSelectionBar();
}

window.applyFilters = applyFilters;
window.resetFilters = resetFilters;
window.copyMessage = copyMessage;
window.toggleSelect = toggleSelect;
window.toggleSelectAllInSection = toggleSelectAllInSection;
window.clearSelection = clearSelection;
window.generateMessageForSelection = generateMessageForSelection;
window.handleGlobalDiscountInput = handleGlobalDiscountInput;

document.addEventListener('DOMContentLoaded', init);
