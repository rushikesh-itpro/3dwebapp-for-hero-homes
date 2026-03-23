var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.8333147630307369,
        "pitch": 0.12958925495220797,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -1.3551563256927288,
          "pitch": 0.7479991518105784,
          "rotation": 18.84955592153877,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.08170865488297352,
          "pitch": 0.40166454665651585,
          "rotation": 18.84955592153877,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.23647754713027958,
        "pitch": 0.03734652652585879,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": 0.09312070018783558,
          "pitch": 0.34260702291729217,
          "rotation": 0,
          "target": "2-dry-area"
        },
        {
          "yaw": 3.1384554999771783,
          "pitch": 0.9245106498482247,
          "rotation": 13.351768777756625,
          "target": "0-foyer"
        },
        {
          "yaw": 2.551884864800196,
          "pitch": 0.7047795327358983,
          "rotation": 17.27875959474387,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dry-area",
      "name": "Dry Area",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.253124621635365,
        "pitch": 0.3112521253362246,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -2.038934632156188,
          "pitch": 0.8021676295883537,
          "rotation": 19.63495408493622,
          "target": "3-servant-room"
        },
        {
          "yaw": 1.961148081270597,
          "pitch": 0.7844620657503469,
          "rotation": 6.283185307179586,
          "target": "1-kitchen"
        },
        {
          "yaw": -2.0686690556117444,
          "pitch": 0.4811894438923403,
          "rotation": 0,
          "target": "4-servant-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-servant-room",
      "name": "Servant Room",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.31921431409136325,
        "pitch": 0.30697939623440185,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": 0.5935887476672566,
          "pitch": 0.633328439122808,
          "rotation": 50.265482457436654,
          "target": "2-dry-area"
        },
        {
          "yaw": -1.5026493287131792,
          "pitch": 1.2398103941939915,
          "rotation": 30.630528372500507,
          "target": "4-servant-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-servant-washroom",
      "name": "Servant Washroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.9851431562115085,
        "pitch": 0.5315751149547623,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": 2.0813285361555964,
          "pitch": 0.734627386143023,
          "rotation": 0.7853981633974483,
          "target": "3-servant-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining",
      "name": "Dining",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.30863308118970423,
        "pitch": 0.1915959236810103,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -1.0094987151512065,
          "pitch": 0.5789665336524958,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 2.924574618350877,
          "pitch": 0.7238136138152562,
          "rotation": 0.7853981633974483,
          "target": "6-bedroom-02"
        },
        {
          "yaw": 1.6012326570304314,
          "pitch": 0.5688766434470818,
          "rotation": 6.283185307179586,
          "target": "9-living"
        },
        {
          "yaw": 1.1803336871800099,
          "pitch": 0.4132079116608196,
          "rotation": 6.283185307179586,
          "target": "11-mandir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-02",
      "name": "Bedroom 02",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.12810200233802682,
        "pitch": 0.1345674410549087,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -0.729753222244856,
          "pitch": 0.5505440975945639,
          "rotation": 0.7853981633974483,
          "target": "8-bedroom-02-balcony"
        },
        {
          "yaw": 2.884752960991804,
          "pitch": 0.5924030768938717,
          "rotation": 13.351768777756625,
          "target": "5-dining"
        },
        {
          "yaw": 2.4591920203572055,
          "pitch": 0.5516115154522261,
          "rotation": 4.71238898038469,
          "target": "7-bedroom-02-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-02-washroom",
      "name": "Bedroom 02 Washroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.5412028437256886,
        "pitch": 0.17270268574460346,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -1.2643273232547187,
          "pitch": 0.35807134411163943,
          "rotation": 17.27875959474387,
          "target": "6-bedroom-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-02-balcony",
      "name": "Bedroom 02 Balcony",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.6937407327279672,
        "pitch": 0.17017000308042363,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": 1.597835192862985,
          "pitch": 0.9292988672474216,
          "rotation": 0.7853981633974483,
          "target": "6-bedroom-02"
        },
        {
          "yaw": -2.2343466718334284,
          "pitch": 0.6168704464563248,
          "rotation": 0,
          "target": "10-living-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-living",
      "name": "Living",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.9984053771281296,
        "pitch": 0.3089379833155341,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -1.215224385940271,
          "pitch": 0.47625728083618313,
          "rotation": 0,
          "target": "10-living-balcony"
        },
        {
          "yaw": -2.6922347046523,
          "pitch": 0.6347068885589096,
          "rotation": 12.566370614359176,
          "target": "11-mandir"
        },
        {
          "yaw": 0.9017537415852726,
          "pitch": 0.5817835049792386,
          "rotation": 6.283185307179586,
          "target": "6-bedroom-02"
        },
        {
          "yaw": 1.5267999076351302,
          "pitch": 0.5195348854770021,
          "rotation": 0.7853981633974483,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-living-balcony",
      "name": "Living Balcony",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.0035733885757203154,
        "pitch": 0.19862990487090926,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": 1.7880314524551784,
          "pitch": 0.8237807556186247,
          "rotation": 0.7853981633974483,
          "target": "9-living"
        },
        {
          "yaw": 0.5660466539537872,
          "pitch": 0.42150524089090524,
          "rotation": 12.566370614359176,
          "target": "8-bedroom-02-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-mandir",
      "name": "Mandir",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.81808500892617,
        "pitch": 0.29454828539844513,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -0.22687009364644695,
          "pitch": 0.6800548929622892,
          "rotation": 10.995574287564278,
          "target": "12-common-washroom"
        },
        {
          "yaw": 0.2242093586617422,
          "pitch": 0.78132985909496,
          "rotation": 14.137166941154074,
          "target": "13-bedroom-03"
        },
        {
          "yaw": -2.969578699316557,
          "pitch": 0.30709229388191517,
          "rotation": 6.283185307179586,
          "target": "6-bedroom-02"
        },
        {
          "yaw": 3.02434082975196,
          "pitch": 0.6030895632088527,
          "rotation": 10.995574287564278,
          "target": "9-living"
        },
        {
          "yaw": -2.686803617991238,
          "pitch": 0.40976115458148854,
          "rotation": 7.0685834705770345,
          "target": "5-dining"
        },
        {
          "yaw": 0.03163643757881296,
          "pitch": 0.3585591105982253,
          "rotation": 6.283185307179586,
          "target": "15-m-bedroom"
        },
        {
          "yaw": -0.13586691413351204,
          "pitch": 0.43071481505504394,
          "rotation": 17.27875959474387,
          "target": "18-bedroom-04"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-common-washroom",
      "name": "Common Washroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.5379271357256332,
        "pitch": 0.4414182822460351,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": 1.5259121276995202,
          "pitch": 0.4971072772913683,
          "rotation": 0.7853981633974483,
          "target": "11-mandir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-03",
      "name": "Bedroom 03",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.12641844311743533,
        "pitch": 0.14539820201765963,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": 1.7694255102316063,
          "pitch": 0.9301744608290097,
          "rotation": 0,
          "target": "14-bedroom-03-washroom"
        },
        {
          "yaw": -3.038058372445045,
          "pitch": 0.646379554786412,
          "rotation": 39.269908169872416,
          "target": "15-m-bedroom"
        },
        {
          "yaw": 2.979622807179995,
          "pitch": 0.5287721852010883,
          "rotation": 11.780972450961727,
          "target": "11-mandir"
        },
        {
          "yaw": -3.0060832480609054,
          "pitch": 0.2529451188004508,
          "rotation": 12.566370614359176,
          "target": "12-common-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-03-washroom",
      "name": "Bedroom 03 Washroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.73819061232936,
        "pitch": 0.36619576828001854,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -2.321652722502588,
          "pitch": 0.370325655163132,
          "rotation": 6.283185307179586,
          "target": "13-bedroom-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-m-bedroom",
      "name": "M. Bedroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.08868159442566359,
        "pitch": 0.2682346140670617,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": 0.4528354953220024,
          "pitch": 0.48635262549438707,
          "rotation": 6.283185307179586,
          "target": "16-mbedroom-balcony"
        },
        {
          "yaw": -1.617965762868133,
          "pitch": 0.5233116407939882,
          "rotation": 5.497787143782138,
          "target": "17-m-bedroom-washroom"
        },
        {
          "yaw": 3.04946054518917,
          "pitch": 0.7742619426615214,
          "rotation": 11.780972450961727,
          "target": "11-mandir"
        },
        {
          "yaw": 2.923946959310361,
          "pitch": 0.5668166036223354,
          "rotation": 25.132741228718363,
          "target": "18-bedroom-04"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-mbedroom-balcony",
      "name": "M.Bedroom Balcony",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.064354170212237,
        "pitch": 0.10229356121171485,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": 1.4719465667360883,
          "pitch": 0.5167673378034756,
          "rotation": 13.351768777756625,
          "target": "15-m-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-m-bedroom-washroom",
      "name": "M. Bedroom Washroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.8067335701139928,
        "pitch": 0.30215859281575064,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -2.8275682280609615,
          "pitch": 0.338169624569602,
          "rotation": 18.06415775814132,
          "target": "15-m-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-04",
      "name": "Bedroom 04",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.1432562098886052,
        "pitch": 0.21081041748556117,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -1.0139426299335845,
          "pitch": 0.5497515584898629,
          "rotation": 5.497787143782138,
          "target": "19-bedroom-04-washroom"
        },
        {
          "yaw": 2.4875486373303435,
          "pitch": 0.631922384489819,
          "rotation": 10.995574287564278,
          "target": "15-m-bedroom"
        },
        {
          "yaw": 2.7959596512340266,
          "pitch": 0.6353510071520496,
          "rotation": 7.0685834705770345,
          "target": "11-mandir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-04-washroom",
      "name": "Bedroom 04 Washroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.8836401870965176,
        "pitch": 0.30952809028299555,
        "fov": 1.5066261967691337
      },
      "linkHotspots": [
        {
          "yaw": -2.5529961347830508,
          "pitch": 0.6806173495973056,
          "rotation": 25.132741228718363,
          "target": "18-bedroom-04"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
