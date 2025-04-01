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
        "yaw": 0.6889086508516833,
        "pitch": 0,
        "fov": 1.5505539101712311
      },
      "linkHotspots": [
        {
          "yaw": 0.9711208117246226,
          "pitch": 0.32734871166570123,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": 0.13616910122868475,
          "pitch": 0.25614914914880593,
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
          "yaw": -0.7158915521511631,
          "pitch": 0.4142278523432399,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": 0.9505996042833971,
          "pitch": 0.26947117790247255,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": 1.7350658247273598,
          "pitch": 0.3686794769269355,
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
          "yaw": 2.9666404934526254,
          "pitch": 0.580721331523252,
          "rotation": 0,
          "target": "3-couloir"
        },
        {
          "yaw": -2.0811350268551063,
          "pitch": 0.3467641975438287,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": -1.4572820218885774,
          "pitch": 0.23742715978234585,
          "rotation": 0,
          "target": "0-salon-1"
        },
        {
          "yaw": 2.9283315430349948,
          "pitch": 0.15273319662532003,
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
          "yaw": -2.2926867390042602,
          "pitch": 0.2914415162258184,
          "rotation": 0,
          "target": "1-salon-2"
        },
        {
          "yaw": -2.626682302308339,
          "pitch": 0.20130303324554433,
          "rotation": 0,
          "target": "7-mcanique"
        },
        {
          "yaw": -0.8116227838674241,
          "pitch": 0.4838254304925389,
          "rotation": 0,
          "target": "4-salle-de-bain"
        },
        {
          "yaw": 0.22396413200294063,
          "pitch": 0.5706763097878103,
          "rotation": 0,
          "target": "5-chambre-1"
        },
        {
          "yaw": 0.7994278190343831,
          "pitch": 0.22170635984681297,
          "rotation": 0,
          "target": "6-chambre-2"
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
          "yaw": -0.005631331480060453,
          "pitch": 0.46396988726766963,
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
          "yaw": -0.8810674685625237,
          "pitch": 0.389568313142048,
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
          "yaw": -2.0535743200448824,
          "pitch": 0.32616590608930096,
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
          "yaw": -1.8557862376532004,
          "pitch": 0.13036319870190027,
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
