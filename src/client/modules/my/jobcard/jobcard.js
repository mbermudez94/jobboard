import LightningElementWithBootstrap from "../../lib/lightningElementWithBootstrap";
import {api} from 'lwc';

export default class Jobcard extends LightningElementWithBootstrap {
    @api job={}

    viewDetailHandler(){
        console.log("view detail clicked");
    }

    // {
    //     "id":1111881,
    // "url":"https://remotive.io/remote-jobs/customer-support/new-community-manager-1111881",
    // "title":"NEW Community Manager",
    // "company_name":"CloserIQ",
    // "company_logo":"https://remotive.io/job/1111881/logo",
    // "category":"Customer Service",
    // "tags":["marketing","sales","growth","management","operations","networking","email","programming","project management","content","B2B","customer success","community management","community","business development","creative","business","zendesk","account management","people","partnerships","events","development","reporting","engagement","hubspot","learning","law","event planning","organization","problem-solving","public speaking","branding","time management","revenue","sales operations","support","software"],
    // "job_type":"full_time",
    // "publication_date":"2022-02-22T15:39:31",
    // "candidate_required_location":"USA Only",
    // "salary":"",
    // "description":"Community Manager description"
    // }
}