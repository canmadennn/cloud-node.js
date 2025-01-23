import express, {Express, NextFunction, Request, Response,Application} from 'express';
import cors, { CorsOptions } from 'cors';
import xsenv, {JSONValue} from "@sap/xsenv";
import sapcore from "@sap/cloud-sdk-core";
import dotenv from 'dotenv';
import { fetchData } from './test/test';
import {translateText} from './test/translate'
import {dmServices} from './DMservices/dmServices'


dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));


app.get;

app.get('/translate', (req:Request, res:Response) => {
    const value = translateText();
    console.log(value);
    const response = {
        status: 200,
        message: 'Success',
        data: value
    };
    res.json(response);
});


app.get('/order', (req: Request, res: Response) => {
    dmServices()
        .then(s => {
            // Yanıtı döndürün
            const response = {
                status: 200,
                message: 'Success',
                data: s
            };
            res.json(response);
        })
        .catch(error => {
            // Hata durumunda uygun bir mesaj döndürün
            const errorResponse = {
                status: 500,
                message: 'An error occurred',
                error: error.message
            };
            res.status(500).json(errorResponse);
        });
});

app.get('/test', (req:Request, res:Response) => {
    const s= dmServices();
    const response = {
        status: 200,
        message: 'Success',
        data: s
    };
    res.json(response);
});

app.get('/test1', (req:Request, res:Response) => {
    fetchData()
    const response = {
        status: 200,
        message: 'Success',
        data: "s"
    };
    res.json(response);
});

app.post('/ornekEndpoint', (req:Request, res:Response) => {
    const requestData = req.body;
    const response = {
        status: 200,
        message: 'Success',
        data: requestData
    };
    res.json(response);
});



app.listen(port, () => {
    console.log("appListen = "+ port);
});
