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
          "yaw": -0.33179280021409596,
          "pitch": 0.3424620163084864,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": 0.3887377226243096,
          "pitch": 0.2709754471171326,
          "rotation": 0,
          "target": "2-cuisine"
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
          "yaw": 0.43306913394017954,
          "pitch": 0.35904221351300514,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": -1.2280360977097793,
          "pitch": 0.25243314200718814,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": -2.0266143635095197,
          "pitch": 0.2929258415043634,
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
          "yaw": -0.5696891968330533,
          "pitch": 0.23452905657912737,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": 0.32673776963321366,
          "pitch": 0.3858102239486403,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": 1.2742898524547517,
          "pitch": 0.5417486156757949,
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
          "yaw": -0.007684615277918638,
          "pitch": 0.32028822890591435,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": 1.0763838505523253,
          "pitch": 0.41603628818899097,
          "rotation": 0,
          "target": "6-mcanique"
        },
        {
          "yaw": -1.3778252641436595,
          "pitch": 0.4844406479685297,
          "rotation": 0,
          "target": "4-salle-de-bain"
        },
        {
          "yaw": -2.7525511736777197,
          "pitch": 0.5890776368618234,
          "rotation": 0,
          "target": "5-chambre"
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
        "yaw": 1.5672312362869754,
        "pitch": 0,
        "fov": 1.5505539101712311
      },
      "linkHotspots": [
        {
          "yaw": 1.6092238832042067,
          "pitch": 0.5030092043635186,
          "rotation": 0,
          "target": "3-couloir"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.019128668801688,
          "pitch": 0.45849390006540247,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1625921744674557,
          "pitch": 0.15635639596227158,
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
