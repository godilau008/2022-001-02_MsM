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
        "yaw": 0.024853029999993836,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 0.3806171992366725,
          "pitch": 0.28181567551242637,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": -0.2636360637738093,
          "pitch": 0.34684792552815047,
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
        "yaw": -0.2754546256120225,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 0.42400876955437994,
          "pitch": 0.3525121895637362,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": -1.2667215437480657,
          "pitch": 0.35492281159021033,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": -2.0224241878124793,
          "pitch": 0.2661779001568938,
          "rotation": 0,
          "target": "3-couloir"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5751416612182805,
          "pitch": 0.22861413781828865,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": 0.2518468632990576,
          "pitch": 0.36162518138988453,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": 1.282903365108817,
          "pitch": 0.5555383433891485,
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
          "yaw": 0.0035009992300700787,
          "pitch": 0.2607008953000296,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": -1.34163633470631,
          "pitch": 0.5099925722366141,
          "rotation": 0,
          "target": "4-salle-de-bain"
        },
        {
          "yaw": -2.6769221608062796,
          "pitch": 0.6041539882113636,
          "rotation": 0,
          "target": "5-chambre"
        },
        {
          "yaw": 1.0434928937659524,
          "pitch": 0.2032865300821971,
          "rotation": 0,
          "target": "6-mcanique"
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
        "yaw": 1.5962782891000442,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 1.6685298683306726,
          "pitch": 0.5251239218575954,
          "rotation": 0,
          "target": "3-couloir"
        },
        {
          "yaw": 1.5898117127845453,
          "pitch": 0.1082058754329811,
          "rotation": 0,
          "target": "6-mcanique"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-chambre",
      "name": "Chambre",
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
        "yaw": 0.006390020000011987,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 1.0151636885214224,
          "pitch": 0.4698271864610053,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-mcanique",
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
        "yaw": 0.41868630000000095,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": -2.18122826355782,
          "pitch": 0.286598453074026,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "1CC-B100",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
