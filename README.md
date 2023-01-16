# Docker and Kubernetes

why exactly do we need containers in software development?

Imagine that you are developing a JavaScript code, which uses a feature called top-level `await`.

In this case, we need Node.js 14.3 or higher, you know, we have it and the execution running successfully. But what if we then take this application,
and we deploy it onto some remote machine onto a server, they might have an older version of Node.js installed,
maybe 14.1, or 12, or eight, whatever.
And all of a sudden, the code which worked locally
on our machine doesn't work there anymore.

And that is something where Docker
and containers can help!

```python
import express from 'express';

import connectToDatabse from '/...'

const app = express();

app.get('/', (req, res) => {
 res.send('<h1> HELLO GITHUB </h1>')
});

await connectToDatabse();

app.listen(3000);

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
