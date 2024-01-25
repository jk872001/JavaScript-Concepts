import React, { useState, useEffect } from 'react';

 

const RawDataFilter = ({ rawData }) => {

  const [finalObj, setFinalObj] = useState({});

 

  useEffect(() => {

    const newData = rawData.reduce((acc, item) => {

      const { variation, event, uniqueId, subgoalId } = item;

 

      if (!acc[variation]) {

        acc[variation] = { show: 0, like: 0, apply: 0, visit: 0, likeSubgoalIds: new Set(), applySubgoalIds: new Set() };

      }

 

      if (event === 'show_variation') {

        acc[variation].show++;

      } else if (event === 'like' && !acc[variation].likeSubgoalIds.has(subgoalId)) {

        acc[variation].like++;

        acc[variation].likeSubgoalIds.add(subgoalId);

      } else if (event === 'apply' && !acc[variation].applySubgoalIds.has(subgoalId)) {

        acc[variation].apply++;

        acc[variation].applySubgoalIds.add(subgoalId);

      } else if (event === 'visit') {

        acc[variation].visit++;

      }

 

      return acc;

    }, {});

 

    setFinalObj(newData);

  }, [rawData]);

 

  return (

    <div>

      <pre>{JSON.stringify(finalObj, null, 2)}</pre>

    </div>

  );

};

 

const App = () => {

  let rawArr=[

 

    {

 

        "createdAt": "2023-10-10T03:48:33.254Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "2",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "d2f53272-33fd-4f83-bccd-94ed8fb0a926",

 

        "event": "apply",

 

        "variation": "Algo 1",

 

        "uniqueId": "1",

 

        "updatedAt": "2023-10-10T03:48:33.254Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T04:12:42.404Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "649a7e28-38d2-439e-bfeb-a6b14ac196e8",

 

        "event": "visit",

 

        "variation": "Control",

 

        "uniqueId": "3",

 

        "updatedAt": "2023-10-10T04:12:42.404Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T03:45:34.436Z",

 

        "campaign": "camp1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "f5dc4967-e992-4b0e-a86a-d24c80f31ff8",

 

        "event": "show_variation",

 

        "variation": "Control",

 

        "uniqueId": "8",

 

        "updatedAt": "2023-10-10T03:45:34.436Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T03:45:24.931Z",

 

        "campaign": "camp1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "e414ff9c-4465-49b9-80c3-f7b2a668c9cd",

 

        "event": "show_variation",

 

        "variation": "Control",

 

        "uniqueId": "5",

 

        "updatedAt": "2023-10-10T03:45:24.931Z"

 

    },

 

   

 

   

 

    {

 

        "createdAt": "2023-10-10T03:48:42.375Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "277db511-40e3-44a0-8a2c-98fcaf71f9ce",

 

        "event": "visit",

 

        "variation": "Control",

 

        "uniqueId": "2",

 

        "updatedAt": "2023-10-10T03:48:42.375Z"

 

    },

 

   

 

    {

 

        "createdAt": "2023-10-10T03:48:59.065Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "3",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "7c872eb8-c5fa-4932-8ee2-1bfad2de0552",

 

        "event": "like",

 

        "variation": "Control",

 

        "uniqueId": "2",

 

        "updatedAt": "2023-10-10T03:48:59.065Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T03:45:38.232Z",

 

        "campaign": "camp1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "6dd72846-a6e3-465b-9df3-d1eca9c41e55",

 

        "event": "show_variation",

 

        "variation": "Control",

 

        "uniqueId": "9",

 

        "updatedAt": "2023-10-10T03:45:38.232Z"

 

    },

 

   

 

   

 

    {

 

        "createdAt": "2023-10-10T03:48:34.750Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "2",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "5833c34e-de64-4bb6-aa63-b90e0db8399f",

 

        "event": "like",

 

        "variation": "Algo 1",

 

        "uniqueId": "1",

 

        "updatedAt": "2023-10-10T03:48:34.750Z"

 

    },

 

   

 

    {

 

        "createdAt": "2023-10-10T03:48:28.577Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "2",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "c33a9e45-8575-4ea3-8ef4-9e3473ed8a9b",

 

        "event": "visit",

 

        "variation": "Algo 1",

 

        "uniqueId": "1",

 

        "updatedAt": "2023-10-10T03:48:28.577Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T03:45:18.782Z",

 

        "campaign": "camp1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "79dcf0e6-c022-473c-8221-c0a79d4ac5b4",

 

        "event": "show_variation",

 

        "variation": "Control",

 

        "uniqueId": "3",

 

        "updatedAt": "2023-10-10T03:45:18.782Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T04:13:17.940Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "730a096f-f905-477f-986f-ecea99699b5e",

 

        "event": "visit",

 

        "variation": "Control",

 

        "uniqueId": "3",

 

        "updatedAt": "2023-10-10T04:13:17.940Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T03:48:46.201Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "0d9d5fc8-ca4b-405c-a3ab-a83ac6a23a44",

 

        "event": "like",

 

        "variation": "Control",

 

        "uniqueId": "2",

 

        "updatedAt": "2023-10-10T03:48:46.201Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T04:12:47.242Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "3",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "e99cc057-a390-42eb-b7ad-e7559bcd0dae",

 

        "event": "visit",

 

        "variation": "Control",

 

        "uniqueId": "3",

 

        "updatedAt": "2023-10-10T04:12:47.242Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T04:12:50.799Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "5",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "0a40e840-b6b7-4c60-b951-e81ac010209e",

 

        "event": "visit",

 

        "variation": "Control",

 

        "uniqueId": "3",

 

        "updatedAt": "2023-10-10T04:12:50.799Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T03:45:30.235Z",

 

        "campaign": "camp1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "7636a175-c001-41cc-a8b2-707ab780f589",

 

        "event": "show_variation",

 

        "variation": "Control",

 

        "uniqueId": "7",

 

        "updatedAt": "2023-10-10T03:45:30.235Z"

 

    },

 

   

 

    {

 

        "createdAt": "2023-10-10T03:48:55.596Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "3",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "f13c301e-1d34-4bbb-b043-2fd1ecdd48c5",

 

        "event": "visit",

 

        "variation": "Control",

 

        "uniqueId": "2",

 

        "updatedAt": "2023-10-10T03:48:55.596Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T04:12:38.036Z",

 

        "campaign": "camp1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "480364d5-dc80-4ca1-93d1-f4a039489b11",

 

        "event": "show_variation",

 

        "variation": "Control",

 

        "uniqueId": "3",

 

        "updatedAt": "2023-10-10T04:12:38.036Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T03:48:40.365Z",

 

        "campaign": "camp1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "87e94706-ebee-4668-89d8-3fce7ef33dbb",

 

        "event": "show_variation",

 

        "variation": "Control",

 

        "uniqueId": "2",

 

        "updatedAt": "2023-10-10T03:48:40.365Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T03:48:15.877Z",

 

        "campaign": "camp1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "50706c98-27d8-4642-b4c5-f3c4cf9f1cdd",

 

        "event": "show_variation",

 

        "variation": "Algo 1",

 

        "uniqueId": "1",

 

        "updatedAt": "2023-10-10T03:48:15.877Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T03:49:00.359Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "3",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "48c2ce3a-51f8-4d82-8335-1b170fb67b08",

 

        "event": "apply",

 

        "variation": "Control",

 

        "uniqueId": "2",

 

        "updatedAt": "2023-10-10T03:49:00.359Z"

 

    },

 

    {

 

        "createdAt": "2023-10-10T03:48:47.476Z",

 

        "goal": "free",

 

        "campaign": "camp1",

 

        "subgoalId": "1",

 

        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",

 

        "id": "7d8023fc-e7e4-456e-b2b0-b838387ada14",

 

        "event": "apply",

 

        "variation": "Control",

 

        "uniqueId": "2",

 

        "updatedAt": "2023-10-10T03:48:47.476Z"

 

    }

 

]

 

  return (

    <div>

      <RawDataFilter rawData={rawArr} />

    </div>

  );

};

 

export default App;