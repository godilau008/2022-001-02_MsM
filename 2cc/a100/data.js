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
        "yaw": 0.3859256100000117,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 0.827340490909263,
          "pitch": 0.2992378302683676,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": 0.19060275048642694,
          "pitch": 0.27310428950682564,
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
        "yaw": 0.10149766000001037,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": -0.6926516352776915,
          "pitch": 0.43858385712815284,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": 1.0291709279615642,
          "pitch": 0.3504836359192076,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": 1.6879581820034666,
          "pitch": 0.23301310907698003,
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
        "yaw": -1.760887563256425,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": -1.4215976928069818,
          "pitch": 0.24089586793473927,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": -2.2432368678698396,
          "pitch": 0.3607219091129572,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": 2.9944895608233413,
          "pitch": 0.59831772759747,
          "rotation": 0,
          "target": "3-couloir"
        },
        {
          "yaw": 2.9525203099043473,
          "pitch": 0.15388538692132947,
          "rotation": 0,
          "target": "7-mcanique"
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
          "yaw": -0.9304979007791907,
          "pitch": 0.520577160284649,
          "rotation": 0,
          "target": "4-salle-de-bain"
        },
        {
          "yaw": 0.05154438481206469,
          "pitch": 0.613121291557194,
          "rotation": 0,
          "target": "5-chambre-1"
        },
        {
          "yaw": 0.6577584831193821,
          "pitch": 0.223618126296957,
          "rotation": 0,
          "target": "6-chambre-2"
        },
        {
          "yaw": -2.471796325110631,
          "pitch": 0.2859210359931481,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": -2.7672160207811434,
          "pitch": 0.13722740776811904,
          "rotation": 0,
          "target": "7-mcanique"
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
        "yaw": 0.1113212999999984,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 0.003098764718544089,
          "pitch": 0.49511829863579315,
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
        "yaw": -0.07720544144845753,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": -0.891498924437002,
          "pitch": 0.41108823615223855,
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
        "yaw": 0.1576549400000129,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": -2.048044059846273,
          "pitch": 0.2759509503985953,
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
          "yaw": -2.17187052376428,
          "pitch": 0.23534362853757074,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "2CC-A100",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
