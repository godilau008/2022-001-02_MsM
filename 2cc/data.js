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
        "yaw": 0.2708173099999982,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 0.8226775687987402,
          "pitch": 0.313109851771177,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": 0.15746086542389826,
          "pitch": 0.26201801258740787,
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
          "yaw": -0.7390888308095303,
          "pitch": 0.41892138935309475,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": 0.9658508292236903,
          "pitch": 0.2443811786549226,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": 1.7044400135439313,
          "pitch": 0.2506515908822742,
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
        "yaw": -2.0869873280617455,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 3.007836374714481,
          "pitch": 0.5834115867186167,
          "rotation": 0,
          "target": "3-couloir"
        },
        {
          "yaw": -1.452480120592675,
          "pitch": 0.2410735706074938,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": -2.172864321566765,
          "pitch": 0.3545644677725477,
          "rotation": 0,
          "target": "1-salon-2"
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
          "yaw": 0.8091908434419111,
          "pitch": 0.23943044529807267,
          "rotation": 0,
          "target": "6-chambre-2"
        },
        {
          "yaw": 0.2188350302797133,
          "pitch": 0.5899940374033061,
          "rotation": 0,
          "target": "5-chambre-1"
        },
        {
          "yaw": -0.7688072572004732,
          "pitch": 0.49808589176270424,
          "rotation": 0,
          "target": "4-salle-de-bain"
        },
        {
          "yaw": -2.3038389521925726,
          "pitch": 0.29986540197592326,
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
        "yaw": 0.1120042899999838,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 0.0018715115815268746,
          "pitch": 0.43653971173832495,
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": -0.8905505130451878,
          "pitch": 0.38333072090069464,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0549416072972146,
          "pitch": 0.2854597673801216,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "2CC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
