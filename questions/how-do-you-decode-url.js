// encodeURI() function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string. 

let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);

console.log('encoded-uri', encoded_uri);
console.log('decoded-uri', decoded_uri);


// ⚠️ VERY IMPORTANT DIFFERENCE (interview favorite)

// encodeURI vs encodeURIComponent

// ❌ encodeURI (does NOT encode query separators)

encodeURI("name=John&role=HR Manager");
// name=John&role=HR%20Manager

// ✅ encodeURIComponent (encodes EVERYTHING)

encodeURIComponent("name=John&role=HR Manager");
// name%3DJohn%26role%3DHR%20Manager