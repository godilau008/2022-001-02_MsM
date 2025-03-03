var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon2",
      "name": "Salon2",
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
        "yaw": 0.32224537271578413,
        "pitch": 0.003548869323410031,
        "fov": 1.5629220283745582
      },
      "linkHotspots": [
        {
          "yaw": 0.4269994433615736,
          "pitch": 0.35568625126111897,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": -1.2442346087073552,
          "pitch": 0.25725800995930825,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": -2.0168856317763133,
          "pitch": 0.2428307578698572,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
      "name": "Salon",
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
        "yaw": -0.03593825503986636,
        "pitch": -0.040869802615612016,
        "fov": 1.5629220283745582
      },
      "linkHotspots": [
        {
          "yaw": -0.3045863463297671,
          "pitch": 0.34166380698925813,
          "rotation": 0,
          "target": "0-salon2"
        },
        {
          "yaw": 0.38492351054662777,
          "pitch": 0.27105124045747075,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": -0.08415483699060822,
          "pitch": 0.236278167951955,
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
          "yaw": -0.5562015540113912,
          "pitch": 0.23974599416183473,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": 0.3400258554077702,
          "pitch": 0.37074556411005233,
          "rotation": 0,
          "target": "0-salon2"
        },
        {
          "yaw": 1.2494205125600946,
          "pitch": 0.5409452385903535,
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
        "yaw": -2.0319700662088014,
        "pitch": 0.02484208526394127,
        "fov": 1.5629220283745582
      },
      "linkHotspots": [
        {
          "yaw": 0.01684333428850593,
          "pitch": 0.3011251371741821,
          "rotation": 0,
          "target": "0-salon2"
        },
        {
          "yaw": -1.3634075508000727,
          "pitch": 0.4834619119801662,
          "rotation": 0,
          "target": "4-salle-de-bain"
        },
        {
          "yaw": -2.775442375914828,
          "pitch": 0.40835553700105365,
          "rotation": 0,
          "target": "5-chambre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salle-de-bain",
      "name": "Salle-de-bain",
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
        "yaw": 1.651626870222005,
        "pitch": -0.0023421243076491294,
        "fov": 1.5629220283745582
      },
      "linkHotspots": [
        {
          "yaw": 1.6495222285917226,
          "pitch": 0.4813606118329048,
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
          "yaw": 1.0384947014760257,
          "pitch": 0.4514658680571948,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "1CC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
