const child = require('child_process');
child.exec('curl -X POST -d {} https://api.netlify.com/build_hooks/62c40d907d896a40f4f05432');
