module.exports = function(express){
  var router = express.Router();

  router.get('*', function(req, res){
    var testParams = [
      {
        "name": "Good Reciving",
        "sets": [
          {
            "setId": "f017833e-3b3c-4307-b355-ba2a3a309e92",
            "setName": "Receiving Inspection",
            "measuredParameters": [
              {
                "setName": "Receiving Inspection",
                "setId": "f017833e-3b3c-4307-b355-ba2a3a309e92",
                "id": "c77d3ec4-1154-4509-85d6-4493d37b7b0d",
                "name": "Manufacurer Paperwork",
                "description": "Verfiy paperwork corresponds. Record 1 if ok",
                "upperThreshold": "1",
                "lowerThreshold": "1",
                "location": "Good Reciving",
                "unit": "73e6d3b3-1d26-48dd-89b1-b35971d96a2a"
              },
              {
                "setName": "Receiving Inspection",
                "setId": "40c3fbad-567b-4239-9658-4a0440c2e64f",
                "id": "e2982291-f0b4-44e1-ad25-9510bc642af8",
                "name": "Manufacurer Paperwork",
                "description": "Verfiy paperwork corresponds. Record 1 if ok",
                "upperThreshold": "1",
                "lowerThreshold": "1",
                "location": "Good Reciving",
                "unit": "73e6d3b3-1d26-48dd-89b1-b35971d96a2a"
              },
              {
                "setName": "Receiving Inspection",
                "setId": "f017833e-3b3c-4307-b355-ba2a3a309e92",
                "id": "d79db782-44dd-4fc0-b41f-c762c6c49a13",
                "name": "Package Damage",
                "description": "Visual inspection of package. Record 1 if ok",
                "upperThreshold": "1",
                "lowerThreshold": "1",
                "location": "Good Reciving",
                "unit": "73e6d3b3-1d26-48dd-89b1-b35971d96a2a"
              },
              {
                "setName": "Receiving Inspection",
                "setId": "f017833e-3b3c-4307-b355-ba2a3a309e92",
                "id": "70d1bf60-c1c6-4380-a0b2-b015ba2e26ca",
                "name": "Seals Secure",
                "description": "Verify seals around mark ref1.4 are in tackt",
                "upperThreshold": "1",
                "lowerThreshold": "1",
                "location": "Good Reciving",
                "unit": "73e6d3b3-1d26-48dd-89b1-b35971d96a2a"
              },
              {
                "setName": "Receiving Inspection",
                "setId": "40c3fbad-567b-4239-9658-4a0440c2e64f",
                "id": "01e743db-dcb1-4cf9-b271-6f677e1b01ed",
                "name": "Package Damage",
                "description": "Visual inspection of package. Record 1 if ok",
                "upperThreshold": "1",
                "lowerThreshold": "1",
                "location": "Good Reciving",
                "unit": "73e6d3b3-1d26-48dd-89b1-b35971d96a2a"
              },
              {
                "setName": "Receiving Inspection",
                "setId": "f017833e-3b3c-4307-b355-ba2a3a309e92",
                "id": "1e3f0e27-74c1-43f7-a4c3-d9da4c937f31",
                "name": "RRN NO",
                "description": "Verfify return package number",
                "upperThreshold": "1",
                "lowerThreshold": "1",
                "location": "Good Reciving",
                "unit": "73e6d3b3-1d26-48dd-89b1-b35971d96a2a"
              }
            ]
          }
        ]
      },
      {
        "name": "Approval Review",
        "sets": [
          {
            "setId": "46a3ab3b-fc5f-40f9-a162-d4328a05aa3c",
            "setName": "Part Final Approval"
          }
        ]
      },
      {
        "name": "Part Inspection",
        "sets": [
          {
            "setId": "ca80a7f9-807b-43b7-97e0-ac810b7ff2ee",
            "setName": "Milling Inspection",
            "measuredParameters": [
              {
                "setName": "Milling Inspection",
                "setId": "ca80a7f9-807b-43b7-97e0-ac810b7ff2ee",
                "id": "ddebbba2-13ee-428b-b902-312a7b416950",
                "name": "H1",
                "description": "Measure from point hb1 to h1 using calipers",
                "upperThreshold": "2",
                "lowerThreshold": "1",
                "location": "Part Inspection",
                "unit": "44c19aac-b85d-402b-876b-8d8ea88ccb13"
              },
              {
                "setName": "Milling Inspection",
                "setId": "ca80a7f9-807b-43b7-97e0-ac810b7ff2ee",
                "id": "d397fae9-301a-43b0-83b5-e85051a087d2",
                "name": "H2",
                "description": "Measure from point hb2 to h2 using calipers",
                "upperThreshold": "2",
                "lowerThreshold": "1",
                "location": "Part Inspection",
                "unit": "44c19aac-b85d-402b-876b-8d8ea88ccb13"
              },
              {
                "setName": "Milling Inspection",
                "setId": "ca80a7f9-807b-43b7-97e0-ac810b7ff2ee",
                "id": "b6784318-2a60-4c3c-b45c-ec7a55ae0dd2",
                "name": "H3",
                "description": "Measure from point hb3 to h3 using calipers",
                "upperThreshold": "2",
                "lowerThreshold": "1",
                "location": "Part Inspection",
                "unit": "44c19aac-b85d-402b-876b-8d8ea88ccb13"
              }
            ]
          }
        ]
      }];
    res.send(testParams);
  });

  router.get('/machine', function(req, res){
    res.send(`[{"machineInstance": "54865619-d29c-4e09-9f7e-f5408ee04c15","machineType": "c58686f2-8245-4da9-a175-bd90c57f18ad","locationDesc": "Peters PC Tester","lastConnected": "1476116865"}]`);
  });

  router.get('/measurements', function(req, res){
    console.log('Part: '+req.query.partId+' Param: '+req.query.paramId);
    res.send({"value": "1", "notes": "testnote"});
  });

  router.post('/measurements', function(req, res){
    console.log(JSON.stringify(req.body))
    value = req.body.value;
  });

  router.get('/part', function(req, res){
    res.send(`[{"id":"f193fb93-2bd9-4b07-8987-8b9456736c31","partNumber":"123456","name":"Widget"},
  {"id":"f193fb93-2bd9-4b07-8987-8b9456736c32","partNumber":"987654","name":"Gadget"}]`);
  });

  router.post('/part', function(req, res){
    console.log(JSON.stringify(req.body));
    res.send([{"id":"f193fb93-2bd9-4b07-8987-8b9456736c31","partNumber":"123456","name":"Widget"}]);
  });

  router.get('/machine', function(req, res){
    console.log(JSON.stringify(req.body));
    res.send([{"machineInstance": "54865619-d29c-4e09-9f7e-f5408ee04c15","machineType": "c58686f2-8245-4da9-a175-bd90c57f18ad","locationDesc": "Peters PC Tester","lastConnected": "1476116865"}]);
  });

  router.get('/partinstance', function(req, res){
    console.log(JSON.stringify(req.body));
    res.send([{"id":"4913580c-1355-40b1-8625-c818f8705567","serialNo":"12345","isEngine":false,"hasNc":true,"partName":"Lower Fan Blade","partNumber":"LFB101r2","instanceApprovals":null,"part":null,"partSetRevision":"e75def4d-e95f-486d-80bc-3468d7ddc483"},{"id":"0979b43f-6578-496f-ae1e-4d9c860a8a7a","serialNo":"12346","isEngine":false,"hasNc":false,"partName":"Lower Fan Blade","partNumber":"LFB101r2","instanceApprovals":null,"part":null,"partSetRevision":"998bea8a-850d-4c07-b002-93b26aa77645"},{"id":"cd9c9ad9-baae-426d-993c-3e5e2c63890c","serialNo":"7777","isEngine":false,"hasNc":false,"partName":"Fan Disk","partNumber":"DISKP6v167","instanceApprovals":null,"part":null,"partSetRevision":"57732924-2fc3-4520-ad9d-ff1ece8237d1"},{"id":"23764950-4625-4f36-8360-9d74638e1ded","serialNo":"836438387","isEngine":false,"hasNc":false,"partName":"Fan Disk","partNumber":"DISKP6v167","instanceApprovals":null,"part":null,"partSetRevision":"b0cbd03d-b7e1-4b60-9691-4084f68958e8"},{"id":"7ad0806c-85aa-4558-9d02-e37bcb9eeb3a","serialNo":"343434545","isEngine":false,"hasNc":false,"partName":"Starter Motor","partNumber":"SM1024r1a","instanceApprovals":null,"part":null,"partSetRevision":"b5edadc3-02ae-41bd-90f4-17060f2bae23"}]);
  });

  router.get('/part/:partId/sets', function(req, res){
    res.send(`[
      {"id":"345", "psrId": "456", "name": "Inspection",
       "measurer_role": "987", "machine_type": {"id":"765"}, "measurement_location": {"id":"543"}},
       {"id":"678", "psrId": "890", "name": "Composition",
        "measurer_role": "432", "machine_type": "321", "measurement_location": "210"}
    ]`);
  });

  router.get('/set/:setId/parameters', function(req, res){
    res.send(`[
      {"name": "Param1", "lowerThres": "0", "upperThres": "10", "dimension": "length", "measureUnit": "mm"},
      {"name": "Param2", "lowerThres": "5", "upperThres": "7.5", "dimension": "length", "measureUnit": "mm"}
    ]`);
  });

  router.get('/lookup/machineType', function(req, res){
    res.send(`[
      {"id": "765", "name": "Machine 1", "desc": "Machine1"},
      {"id": "321", "name": "Machine 2", "desc": "Machine2"}
    ]`);
  });

  router.get('/lookup/measurementLocation', function(req, res){
    res.send(`[
      {"id": "543", "name": "Location 1", "desc": "Location1"},
      {"id": "210", "name": "Location 2", "desc": "Location2"}
    ]`);
  });

  router.get('/permission/roles', function(req, res){
    res.send(`[
      {"id": "987", "name": "Inspector 1", "desc": "Inspector1"},
      {"id": "432", "name": "Inspector 2", "desc": "Inspector2"}
    ]`);
  });

  router.get('/approvals/pending', function(req, res){
    res.send(`[
        { "numPending": "3",
          "partInstance": {
            "id": "aa7e1a2c-3a15-4b5a-b272-850817836ce2",
            "serialNo": "ABCD-1234-7890",
            "part": {
              "id": "474228b3-8716-4e77-af31-11d1f43e10e1",
              "partNumber": "X123456.789R1",
              "name": "Engine Piece",
              "currentTemplate": "998bea8a-850d-4c07-b002-93b26aa77645"
            }
          }
        },
        { "numPending": "1",
          "partInstance": {
            "id": "aa7e1a2c-3a15-4b5a-b272-850817836ce2",
            "serialNo": "DGHQ-634-78090",
            "part": {
              "id": "473228b3-8716-4e77-af31-11d1f43e10e1",
              "partNumber": "X456716.351R3",
              "name": "Chunk",
              "currentTemplate": "998bea8a-850d-4c07-b002-93b26aa77646"
            }
          }
        }
      ]`);
  });

  router.get('/partInstance/:id/approvals', function(req, res){
    res.send(`
      { "pending": [{"id": "approval1",
        "setId": "set1",
        "approvalType": "Technical"}]
      }
    `);
  });

  router.get('/partInstance/:id', function(req, res){
    res.send(`{
      "id":"`+req.params.id+`",
      "serialNo":"7777",
      "isEngine":false,
      "hasNc":false,
      "instanceApprovals":null,
      "part":{
        "id":"f5796678-5354-4a25-9d7b-9c09456d86cb",
        "partNumber":"DISKP6v167",
        "name":"Fan Disk",
        "currentTemplate":"57732924-2fc3-4520-ad9d-ff1ece8237d1",
        "partType":"part"
      },
      "partSetRevision":"57732924-2fc3-4520-ad9d-ff1ece8237d1"
    }`);
  });

  router.get('/partInstance/*', function(req, res){
    res.send(`[{
    "id": "4913580c-1355-40b1-8625-c818f8705567",
    "serialNo": "12345",
    "isEngine": false,
    "hasNc": true,
    "partName": "Lower Fan Blade",
    "partNumber": "LFB101r2",
    "instanceApprovals": null,
    "part": null,
    "partSetRevision": "e75def4d-e95f-486d-80bc-3468d7ddc483"
  },
  {
    "id": "0979b43f-6578-496f-ae1e-4d9c860a8a7a",
    "serialNo": "12346",
    "isEngine": false,
    "hasNc": false,
    "partName": "Lower Fan Blade",
    "partNumber": "LFB101r2",
    "instanceApprovals": null,
    "part": null,
    "partSetRevision": "998bea8a-850d-4c07-b002-93b26aa77645"
  },
  {
    "id": "cd9c9ad9-baae-426d-993c-3e5e2c63890c",
    "serialNo": "7777",
    "isEngine": false,
    "hasNc": false,
    "partName": "Fan Disk",
    "partNumber": "DISKP6v167",
    "instanceApprovals": null,
    "part": null,
    "partSetRevision": "57732924-2fc3-4520-ad9d-ff1ece8237d1"
  }]`);
  });

  router.put('/part/:partid/set/:setid', function(req, res){
    res.send(200, req.body);
  });

  return router;
};

var value="1";
