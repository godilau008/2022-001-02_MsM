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
          "yaw": -0.36480811712947236,
          "pitch": 0.37675799030848545,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": -0.038955204094312634,
          "pitch": 0.1914875981581421,
          "rotation": 0,
          "target": "3-couloir"
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
          "yaw": -1.6476551506606505,
          "pitch": 0.4867300539141972,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": -1.9997826637995537,
          "pitch": 0.2824062005378227,
          "rotation": 0,
          "target": "3-couloir"
        },
        {
          "yaw": 0.5058620173793749,
          "pitch": 0.3314531689181841,
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
        "yaw": 0.011344690000013813,
        "pitch": 0,
        "fov": 1.5505539101712311
      },
      "linkHotspots": [
        {
          "yaw": -0.3536100347145883,
          "pitch": 0.22524740548596078,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": 0.41095167003969024,
          "pitch": 0.31637779090960194,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": 1.3804844051087812,
          "pitch": 0.5663303919640779,
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
          "yaw": -0.007470960960574757,
          "pitch": 0.28810077663521483,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": -1.3033127154867472,
          "pitch": 0.5255187869997524,
          "rotation": 0,
          "target": "4-salle-de-bain"
        },
        {
          "yaw": 3.107608566880031,
          "pitch": 0.7774037078868368,
          "rotation": 0,
          "target": "5-chambre"
        },
        {
          "yaw": 1.030065653455523,
          "pitch": 0.3718370687140933,
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
        "yaw": 1.6843044315199176,
        "pitch": 0,
        "fov": 1.5505539101712311
      },
      "linkHotspots": [
        {
          "yaw": 1.7731639126297116,
          "pitch": 0.5349948116610861,
          "rotation": 0,
          "target": "3-couloir"
        },
        {
          "yaw": 1.722471488414957,
          "pitch": 0.11876366162211127,
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
        "yaw": 0.034304120000010485,
        "pitch": 0,
        "fov": 1.5505539101712311
      },
      "linkHotspots": [
        {
          "yaw": 1.2803103804869238,
          "pitch": 0.4995775017486874,
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
        "yaw": 0.9177041295065678,
        "pitch": 0,
        "fov": 1.5505539101712311
      },
      "linkHotspots": [
        {
          "yaw": -2.121033547544906,
          "pitch": 0.5704238882846244,
          "rotation": 0,
          "target": "3-couloir"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "1CC-B200",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
