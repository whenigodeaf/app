import app from './app';
import * as http from 'http';

http.createServer(app).listen(8081, () => {
    console.log('app is listening');
})