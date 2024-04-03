const fs = require('fs');
const path = require('path');

// Path to the manifest.json file
const manifestPath = path.join(__dirname, 'manifest.json');

// Domain to add, passed as a command-line argument
const domainToAdd = process.argv[2];

if (!domainToAdd) {
  console.error('Error: No domain provided. Usage: npm run add-domain <your-url-here>');
  process.exit(1);
}

// Convert domain to a match pattern
const matchPattern = `*://*.${domainToAdd}/*`;

// Read the manifest.json file
fs.readFile(manifestPath, (err, data) => {
  if (err) {
    console.error('Error reading manifest.json:', err);
    process.exit(1);
  }

  // Parse the manifest.json content
  let manifest;
  try {
    manifest = JSON.parse(data);
  } catch (parseError) {
    console.error('Error parsing manifest.json:', parseError);
    process.exit(1);
  }

  // Add the new domain to the matches array if it's not already present
  const matches = manifest.content_scripts[0].matches;
  if (!matches.includes(matchPattern)) {
    matches.push(matchPattern);
  } else {
    console.log('Domain already whitelisted.');
    process.exit(0);
  }

  // Write the updated manifest back to manifest.json
  fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), (writeError) => {
    if (writeError) {
      console.error('Error writing updated manifest.json:', writeError);
      process.exit(1);
    } else {
      console.log('Domain white-listed successfully.');
    }
  });
});
