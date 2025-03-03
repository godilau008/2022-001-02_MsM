var APP_DATA = {
  "scenes": [
    {
      "id": "0-v1chambre",
      "name": "v1chambre",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0592840268095216,
          "pitch": 0.4416657724019011,
          "rotation": 0,
          "target": "1-v1couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-v1couloir",
      "name": "v1couloir",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.42149612404995906,
          "pitch": 0.2576466129701096,
          "rotation": 0,
          "target": "5-v1salon2"
        },
        {
          "yaw": -0.9243242084074872,
          "pitch": 0.4936477236729129,
          "rotation": 0,
          "target": "3-v1salle-de-bain"
        },
        {
          "yaw": -2.3390526292886893,
          "pitch": 0.4312119882254031,
          "rotation": 0,
          "target": "0-v1chambre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-v1cuisine",
      "name": "v1Cuisine",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4961288065409857,
          "pitch": 0.24826059091424924,
          "rotation": 0,
          "target": "4-v1salon1"
        },
        {
          "yaw": 0.22369542137691845,
          "pitch": 0.31875967200265265,
          "rotation": 0,
          "target": "5-v1salon2"
        },
        {
          "yaw": 1.1762038766259852,
          "pitch": 0.5653187657097867,
          "rotation": 0,
          "target": "1-v1couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-v1salle-de-bain",
      "name": "v1Salle-de-bain",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.714316476349766,
          "pitch": 0.4897509229515862,
          "rotation": 0,
          "target": "1-v1couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-v1salon1",
      "name": "v1salon1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3968552752832011,
          "pitch": 0.33249061577362227,
          "rotation": 0,
          "target": "5-v1salon2"
        },
        {
          "yaw": 0.4024168564049333,
          "pitch": 0.2563906570712984,
          "rotation": 0,
          "target": "2-v1cuisine"
        },
        {
          "yaw": -0.07529653109417822,
          "pitch": 0.23592498005153217,
          "rotation": 0,
          "target": "1-v1couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-v1salon2",
      "name": "v1salon2",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4477349852587018,
          "pitch": 0.36873272702986526,
          "rotation": 0,
          "target": "4-v1salon1"
        },
        {
          "yaw": -1.2282660043722,
          "pitch": 0.2687962725456696,
          "rotation": 0,
          "target": "2-v1cuisine"
        },
        {
          "yaw": -2.012637493536751,
          "pitch": 0.28373812720346514,
          "rotation": 0,
          "target": "1-v1couloir"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
