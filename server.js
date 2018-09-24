// Load the dependencies
const server = require('server');
const { render } = server.reply;

// The URL fragment between "spreadsheets/d/" and "/edit"
const id = process.env.id;
const options = { sheet: id,
		  cache: 30 };
const drive = require('drive-db')(options);

// Launch the server in port 3000
server(async () => {

  // Local or remote (depends on the cache expiration)
  const db = await drive.load();
	console.log(db.find());

  // Render the index with the user data
  return render('index.hbs', { users: db.find() });
});

