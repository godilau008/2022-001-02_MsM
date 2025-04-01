var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon-1",
      "name": "Salon 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2530367151746802,
          "pitch": 0.3466429774939641,
          "rotation": 0,
          "target": "1-salon-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon-2",
      "name": "Salon 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.693177801762161,
          "pitch": 0.265177486516496,
          "rotation": 0,
          "target": "3-couloir"
        },
        {
          "yaw": 1.414715311478263,
          "pitch": 0.46191450784709076,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": -0.8122702675373219,
          "pitch": 0.3997535870455078,
          "rotation": 0,
          "target": "0-salon-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5586414244277336,
        "pitch": 0,
        "fov": 1.5505539101712311
      },
      "linkHotspots": [
        {
          "yaw": 2.9431051231263137,
          "pitch": 0.13897450764926234,
          "rotation": 0,
          "target": "7-mcanique"
        },
        {
          "yaw": -2.2276871432246104,
          "pitch": 0.3768987953248253,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": -1.4108123992722383,
          "pitch": 0.26073017727075687,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": 2.966846514644387,
          "pitch": 0.5842640378181319,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-couloir",
      "name": "Couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8165533861294278,
          "pitch": 0.23421965590846483,
          "rotation": 0,
          "target": "6-chambre-2"
        },
        {
          "yaw": 0.6741057523802336,
          "pitch": 0.30384528076263173,
          "rotation": 0,
          "target": "5-chambre-1"
        },
        {
          "yaw": -0.8019046210049616,
          "pitch": 0.4788156367519729,
          "rotation": 0,
          "target": "4-salle-de-bain"
        },
        {
          "yaw": -2.5914430625394207,
          "pitch": 0.1596391133986934,
          "rotation": 0,
          "target": "7-mcanique"
        },
        {
          "yaw": -2.30864245907075,
          "pitch": 0.2507882617474255,
          "rotation": 0,
          "target": "1-salon-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salle-de-bain",
      "name": "Salle de bain",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.050187325011094686,
          "pitch": 0.4514463731352052,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-chambre-1",
      "name": "Chambre 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.06901430390929875,
        "pitch": 0,
        "fov": 1.5505539101712311
      },
      "linkHotspots": [
        {
          "yaw": -2.187131598678029,
          "pitch": 0.8406389132008467,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-chambre-2",
      "name": "Chambre 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.25541931000002016,
        "pitch": 0,
        "fov": 1.5505539101712311
      },
      "linkHotspots": [
        {
          "yaw": -2.0392413342179374,
          "pitch": 0.26737886488376006,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-mcanique",
      "name": "Mécanique",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7612045942014305,
          "pitch": 0.11933772875931048,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "2CC-A200",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
