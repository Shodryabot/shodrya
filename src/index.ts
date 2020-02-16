import { config } from 'dotenv';
import Client from './client/ShodryaClient';

config()

const client = new Client({
 fetchAllMembers: true,
 enableEveryone: false
 })
 
client.login(process.env.token) // Connecting to Discord Gateway 
