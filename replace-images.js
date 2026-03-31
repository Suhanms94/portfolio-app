const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

// Map old images to the new jpeg images in the public folder
const replacements = {
  '/portfolio_1_1774788306374.png': '/girl 1 pic.jpg.jpeg',
  '/portfolio_2_1774788323036.png': '/chess.jpeg',
  '/hero_cinematic_1774788287616.png': '/aaa12.jpeg'
};

function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
}

walk(directoryPath, function(err, results) {
  if (err) throw err;
  results.filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.js') || f.endsWith('.jsx')).forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let updated = content;
    for (let key in replacements) {
      updated = updated.split(key).join(replacements[key]);
    }
    if (content !== updated) {
      fs.writeFileSync(file, updated, 'utf8');
      console.log('Updated:', file);
    }
  });
});
