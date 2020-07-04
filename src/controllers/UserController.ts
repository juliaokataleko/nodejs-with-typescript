import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    {
        name: 'Julião F. Kataleko',
        email: 'juliao@kataleko.com'
    },
    {
        name: 'Teresa F. Kataleko',
        email: 'teresa@kataleko.com'
    }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: {
                name: 'JFK',
                email: 'jfk@kataleko.com'
            }, 
            message: {
                subject: 'Bem vindo ao sistema',
                body: 'Sem bem-vindo'
            }
        });

        return res.send()
    }
}