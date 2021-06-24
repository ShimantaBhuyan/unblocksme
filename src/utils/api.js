
const CONFIG = { "client_id": "235806155860-4ac63tu7rnkg02pqv0j7ads9slf3jcmq.apps.googleusercontent.com" };

const getSpecificCookie = (cookieName) => {
    return document.cookie.split('; ')
        .find(row => row.startsWith(`${cookieName}=`))
        .split('=')[1];
}

const SPREADSHEETID = getSpecificCookie("unblocksMeSpreadsheetId");
if (SPREADSHEETID) {
    console.log("Retrieved spreadsheet: ", SPREADSHEETID);
}

const CLIENT_ID = CONFIG.client_id; // = '<YOUR_CLIENT_ID>';

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// https://www.googleapis.com/auth/drive.file
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

const loadGoogleScript = () => {

    // Loads the Google JavaScript Library
    (function () {
        const id = 'google-js';
        const src = 'https://apis.google.com/js/platform.js'; // (Ref. 1)
        //https://apis.google.com/js/api.js

        // We have at least one script (React)
        const firstJs = document.getElementsByTagName('script')[0]; // (Ref. 2)

        // Prevent script from loading twice
        if (document.getElementById(id)) { return; } // (Ref. 3)
        const js = document.createElement('script'); // (Ref. 4)
        js.id = id;
        js.src = src;
        js.onload = window.onGoogleScriptLoad; // (Ref. 5)
        firstJs.parentNode.insertBefore(js, firstJs);
    }());

}

const getSheetsData = (sheetName, gapi, id = "") => {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: id || SPREADSHEETID || window.localStorage.getItem("spreadsheetId"),
        range: `${sheetName}!A2:E3`,
    }).then(function (response) {
        var range = response.result;
        console.log(range);
        if (range.values.length > 0) {
            for (var i = 0; i < range.values.length; i++) {
                var row = range.values[i];
                // Print columns A and E, which correspond to indices 0 and 4.
                console.log(row);
            }
        } else {
            console.log('No data found.');
        }
    }, function (response) {
        console.log('Error: ' + response.result.error.message);
    });
}

const initialData = {
    "startRow": 0,
    "startColumn": 0,
    "rowData": [
        {
            "values": [
                {
                    "userEnteredValue": {
                        "stringValue": "TaskId",
                    },
                },
                {
                    "userEnteredValue": {
                        "stringValue": "Description",
                    },
                },
                {
                    "userEnteredValue": {
                        "stringValue": "Date",
                    },
                },
                // {
                //     "userEnteredValue": {
                //         "stringValue": "Number of Characters",
                //     },
                // },
                {
                    "userEnteredValue": {
                        "stringValue": "Status",
                    },
                }
            ]
        }
    ],
}

const initialSheet = {
    properties: {
        title: "UnblocksMe"
    },
    sheets: [
        {
            properties: {
                title: "Work",
            },
            data: [
                initialData
            ]
        },
        {
            properties: {
                title: "Personal"
            },
            data: [
                initialData
            ]
        },
        {
            properties: {
                title: "Recurring"
            },
            data: [
                initialData
            ]
        },
        {
            properties: {
                title: "Miscellaneous"
            },
            data: [
                initialData
            ]
        },
    ]
}

const createSpreadsheet = async (e, gapi) => {
    gapi.client.sheets.spreadsheets.create(initialSheet).then((response) => {
        console.log(response);
        if (response.status === 200) {
            console.log("Spreadsheet created!");
            document.cookie = `unblocksMeSpreadsheetId=${response.result.spreadsheetId}; SameSite=None; Secure`;
            window.localStorage.setItem("spreadsheetId", response.result.spreadsheetId);
        }
    });
}

const appendToSpreadsheet = async (e, gapi, values) => {
    console.log(values)
    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEETID,
        range: `${values.category}!A2:E1000`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        majorDimension: "ROWS",
        values: [
            [
                values.id,
                values.description,
                values.date,
                values.status
            ]
        ]
    })
    .then(function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Added values to spreadsheet: ", response);
    },
    function (err) { console.error("Append error:", err); });
}

const api = {
    CLIENT_ID,
    DISCOVERY_DOCS,
    SCOPES,
    loadGoogleScript,
    getSheetsData,
    createSpreadsheet,
    appendToSpreadsheet,
    SPREADSHEETID
};

export default api;