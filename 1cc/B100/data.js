var APP_DATA = {
  "scenes": [
    {
      "id": "0-cuisine",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": -0.5784789492782778,
          "pitch": 0.22993858946010448,
          "rotation": 0,
          "target": "1-salon-1"
        },
        {
          "yaw": 0.09766653629772293,
          "pitch": 0.3248347244499108,
          "rotation": 0,
          "target": "2-salon-2"
        },
        {
          "yaw": 1.206416233123571,
          "pitch": 0.566964508852422,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon-1",
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
          "yaw": 0.39992306358922747,
          "pitch": 0.304959526962552,
          "rotation": 0,
          "target": "0-cuisine"
        },
        {
          "yaw": -0.2823052938027022,
          "pitch": 0.3539609422743233,
          "rotation": 0,
          "target": "2-salon-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon-2",
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
          "yaw": 0.45359066297844386,
          "pitch": 0.34172124251163716,
          "rotation": 0,
          "target": "1-salon-1"
        },
        {
          "yaw": -1.2422112548289093,
          "pitch": 0.2632523779583096,
          "rotation": 0,
          "target": "0-cuisine"
        },
        {
          "yaw": -2.016724850189771,
          "pitch": 0.2938272479033355,
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
        "yaw": -2.1006963799954033,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 0.008239554245610847,
          "pitch": 0.3147407323201463,
          "rotation": 0,
          "target": "2-salon-2"
        },
        {
          "yaw": -1.3820689495673033,
          "pitch": 0.48373804070966564,
          "rotation": 0,
          "target": "4-salle-de-bain"
        },
        {
          "yaw": -2.7335968357221248,
          "pitch": 0.5358636713087535,
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
        "yaw": 1.5454496296177593,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 1.6641361889077118,
          "pitch": 0.46974252881281764,
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
          "yaw": 1.0077025893210632,
          "pitch": 0.4586256946293865,
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
