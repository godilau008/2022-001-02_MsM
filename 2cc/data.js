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
        "yaw": -1.8739333562563232,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": -1.435938403824041,
          "pitch": 0.22715614541076334,
          "rotation": 0,
          "target": "1-salon-1"
        },
        {
          "yaw": -2.190137590745991,
          "pitch": 0.28765887383605815,
          "rotation": 0,
          "target": "2-salon-2"
        },
        {
          "yaw": 2.999915405304966,
          "pitch": 0.5791828425753849,
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
        "yaw": 0.45430189687260203,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": 0.1380567535494599,
          "pitch": 0.26394394950923683,
          "rotation": 0,
          "target": "0-cuisine"
        },
        {
          "yaw": 0.9683874861545849,
          "pitch": 0.3087142321578469,
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
          "yaw": -0.7744031035485115,
          "pitch": 0.4037007853193124,
          "rotation": 0,
          "target": "1-salon-1"
        },
        {
          "yaw": 0.9782860462873497,
          "pitch": 0.25928788675077996,
          "rotation": 0,
          "target": "0-cuisine"
        },
        {
          "yaw": 1.6943801154719509,
          "pitch": 0.24730262949058535,
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
        "yaw": -0.13582648192523195,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": -0.7921639284689839,
          "pitch": 0.48871524230471586,
          "rotation": 0,
          "target": "4-salle-de-bain"
        },
        {
          "yaw": 0.22105618354620482,
          "pitch": 0.6002057049389435,
          "rotation": 0,
          "target": "5-chambre-1"
        },
        {
          "yaw": 0.8014849903474399,
          "pitch": 0.23458724802425834,
          "rotation": 0,
          "target": "6-chambre-2"
        },
        {
          "yaw": -2.304476111216351,
          "pitch": 0.30255938963931683,
          "rotation": 0,
          "target": "2-salon-2"
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
        "yaw": 0.07856158107335354,
        "pitch": 0,
        "fov": 1.5626018005051336
      },
      "linkHotspots": [
        {
          "yaw": -0.0024660667359004407,
          "pitch": 0.47891843524934075,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8816123080718583,
          "pitch": 0.3973365195836145,
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
          "yaw": -2.053993334783632,
          "pitch": 0.29902698211377476,
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
