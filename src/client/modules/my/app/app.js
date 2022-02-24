import LightningElementWithBootstrap from "../../lib/lightningElementWithBootstrap";
const BASE_URL = 'https://remotive.io/api/remote-jobs'
const i = ''

export default class App extends LightningElementWithBootstrap {
    description='';
    category='';
    job_type='';
    selectedJob = null;
    jobs=[
        {"id":1111881,"url":"https://remotive.io/remote-jobs/customer-support/new-community-manager-1111881","title":"NEW Community Manager","company_name":"CloserIQ","company_logo":"https://remotive.io/job/1111881/logo","category":"Customer Service","tags":["marketing","sales","growth","management","operations","networking","email","programming","project management","content","B2B","customer success","community management","community","business development","creative","business","zendesk","account management","people","partnerships","events","development","reporting","engagement","hubspot","learning","law","event planning","organization","problem-solving","public speaking","branding","time management","revenue","sales operations","support","software"],"job_type":"full_time","publication_date":"2022-02-22T15:39:31","candidate_required_location":"USA Only","salary":"","description":"Community Manager description"},
        {"id":1103845,"url":"https://remotive.io/remote-jobs/software-dev/mobile-app-developer-ios-swift-1103845","title":"Mobile App Developer (iOS/Swift)","company_name":"SovTech","company_logo":"https://remotive.io/job/1103845/logo","category":"Software Development","tags":["developer","git","ios","mobile","swift","design","programming","agile","Engineering","product","CI/CD","knowledge","RESTful","RxSwift","people","culture","SOLID","development","APIs","IT","writing","RESTful APIs","UIKit","learning","fintech","networks","testing","github","support","MVVM","software"],"job_type":"full_time","publication_date":"2022-02-22T15:39:23","candidate_required_location":"Worldwide","salary":"","description":"Great job as a software developer"},
        {"id":1103971,"url":"https://remotive.io/remote-jobs/software-dev/network-engineer-1103971","title":"Network Engineer","company_name":"Linode","company_logo":"https://remotive.io/job/1103971/logo","category":"Software Development","tags":["cisco","cloud","git","go","ios","linux","python","growth","networking","design","automation","Engineering","community","knowledge","data","hardware","people","culture","events","development","scripting","IT","JSON","network protocols","networks","backbone","grafana","github","support","insurance","programs","software","virtualization"],"job_type":"full_time","publication_date":"2022-02-22T13:39:33","candidate_required_location":"USA Only","salary":"","description":"Linode's mission is to accelerate innovation by making cloud computing simple, affordable and accessible to all."},
        {"id":1104484,"url":"https://remotive.io/remote-jobs/software-dev/software-engineer-c-microsoft-ecosystem-1104484","title":"Software engineer (C#/Microsoft ecosystem)","company_name":"Writer","company_logo":"https://remotive.io/job/1104484/logo","category":"Software Development","tags":[".Net","api","C","C#","C++","microsoft","saas","ui","ux","growth","content","Engineering","community","product","windows","analytics","WPF","deployment","Enterprise","business","hiring","people","onboarding","culture","development","APIs","IT","writing","law","invision","microsoft office","applications","communication","diversity","outlook","architecture ","insurance","software"],"job_type":"full_time","publication_date":"2022-02-22T13:39:32","candidate_required_location":"USA Only","salary":"","description":"Great job ffer"},
        {"id":1112166,"url":"https://remotive.io/remote-jobs/qa/qa-manager-1112166","title":"QA Manager","company_name":"IngeniousIO","company_logo":"https://remotive.io/job/1112166/logo","category":"QA","tags":["api","cloud","java","python","scrum","management","design","agile","automation","project management","strategy","Engineering","documentation","product","analytics","QA","knowledge","rest","data","English","selenium","hiring","people","release","engineering management","development","reporting","scripting","IT","learning","testing","communication","construction","software","bugs"],"job_type":"full_time","publication_date":"2022-02-22T11:40:53","candidate_required_location":"USA Only","salary":"","description":"Great job as a QA ina big company"}
    ]
    jobs2=[];
    
    
    connectedCallback(){
        this.fetchJobs();
    }

    fetchJobs(){
        const url = `${BASE_URL}?search=${this.description}&category=${this.category}&limit=60`;
        fetch(url).then(response=>response.json())
        .then(result=>{
            console.log(url)
            console.log(result.jobs);
            this.jobs2 = [...result.jobs];
        }).catch(error=>{
            console.error(error, error.line);
        })
    }

    selectedHandler(event){
        this.selectedJob = event.detail;

    }

    goBackHandler(){
        this.selectedJob=null;
    }

    searchHandler(event){
        console.log(event.detail);
        this.description = event.detail.description.replaceAll(' ','+')
        this.category = event.detail.category
        this.job_type = event.detail.job_type
        if(event.detail.job_type == 'full_time'){
            this.description = this.description+'+'+event.detail.job_type;
        }
        this.fetchJobs();
    }
}


