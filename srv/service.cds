using {  emaildb} from '../db/schema';


service EmailService {
    entity sendEmail as projection on  emaildb.sendEmail;
}